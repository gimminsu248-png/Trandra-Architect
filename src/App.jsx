import React, { useState, useEffect } from 'react';
import {
  Trash2, AlertCircle, Copy, Check,
  Settings2, Layers, Zap, Lock, BookOpen,
  ChevronUp, ChevronDown, Box, Boxes, Search,
  ChevronRight, LayoutPanelTop, LayoutPanelLeft, Star, Monitor
} from 'lucide-react';
import Header from './components/Header';
import { INDICATORS } from './constants/indicators';
import { generatePineScript } from './utils/generator';
import { GUIDES } from './constants/indicatorGuides';
import IndicatorGuide from './components/IndicatorGuide';

const MAX_INDICATORS = 30;

const SectionHeader = ({ title, expanded, onToggle, count, disabled, icon: IconComponent, colorClass, badge }) => (
  <div
    onClick={!disabled ? onToggle : undefined}
    className={`flex items-center justify-between p-4 rounded-2xl border mb-3 cursor-pointer transition-all
      ${disabled ? 'opacity-20 bg-[#161b22] border-[#30363d] grayscale' : 'bg-[#21262d] border-[#30363d] hover:border-primary/50'}
    `}
  >
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-xl bg-opacity-10 ${colorClass}`}>
        {IconComponent && <IconComponent className={`w-4 h-4 ${colorClass.replace('bg-', 'text-')}`} />}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className={`text-xs font-bold uppercase tracking-widest ${disabled ? 'text-[#30363d]' : 'text-white'}`}>
            {title}
          </h3>
          {badge && (
            <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${badge === 'LOCKED' ? 'bg-red-500/20 text-red-500' : 'bg-primary/20 text-primary'}`}>
              {badge}
            </span>
          )}
        </div>
        <span className="text-[10px] text-[#8b949e]">{count} Indicators Available</span>
      </div>
    </div>
    {!disabled && (
      <div style={{ transform: `rotate(${expanded ? 90 : 0}deg)`, transition: 'transform 0.2s' }}>
        <ChevronRight className="w-4 h-4 text-[#8b949e]" />
      </div>
    )}
  </div>
);

function App() {
  const [lang, setLang] = useState('KR');
  const [selectedIndicators, setSelectedIndicators] = useState([]);
  const [options, setOptions] = useState({
    title: 'Expert Architect Suite',
    exportMode: 'merged'
  });
  const [generatedData, setGeneratedData] = useState('');
  const [activeSeparateTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(1);
  const [selectedIndicatorId, setSelectedIndicatorId] = useState(null);

  // URL Parameter Routing & SEO Logic
  // URL Parameter Routing & SEO Logic
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      const id = params.get('id');

      if (tab === 'guide') {
        setActiveTab(2);
        setSelectedIndicatorId(id || null);
      } else {
        setActiveTab(1);
        setSelectedIndicatorId(null);
      }
    };

    // Run on mount
    handlePopState();

    // Listen for Back/Forward buttons
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (activeTab === 2) {
      params.set('tab', 'guide');
      if (selectedIndicatorId) params.set('id', selectedIndicatorId);
    }

    const newQuery = params.toString();
    const currentQuery = window.location.search.slice(1);

    // Only push state if the query actually changed to avoid History Trap
    if (newQuery !== currentQuery) {
      const newUrl = newQuery ? `?${newQuery}` : window.location.pathname;
      window.history.pushState({}, '', newUrl);
    }

    // Dynamic Title for SEO
    if (activeTab === 2 && selectedIndicatorId) {
      const guideData = GUIDES.find(g => g.id === selectedIndicatorId);
      if (guideData) {
        const langKey = lang === 'KR' ? 'ko' : 'en';
        const guide = guideData[langKey];
        document.title = `${guide.name} - ${lang === 'KR' ? '지표 백과사전' : 'Indicator Wiki'} | Trandra Architect`;

        // Dynamic Meta Description for SEO
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.name = 'description';
          document.head.appendChild(metaDesc);
        }
        metaDesc.content = guide.description;
      }
    } else if (activeTab === 2) {
      document.title = lang === 'KR' ? '지표 백과사전 - 전문 트레이딩 지식 가이드 | Trandra Architect' : 'Indicator Wiki - Professional Trading Knowledge | Trandra Architect';
    } else {
      document.title = lang === 'KR' ? 'Trandra Architect - 지식형 파인스크립트 생성 엔진' : 'Trandra Architect - AI-Powered Pine Script Generator';
    }
  }, [activeTab, selectedIndicatorId, lang]);
  // 1: Architect, 2: Guide

  // Fold states
  const [overlayExpanded, setOverlayExpanded] = useState(false);
  const [oscillatorExpanded, setOscillatorExpanded] = useState(false);
  const [specialExpanded, setSpecialExpanded] = useState(false);

  useEffect(() => {
    setGeneratedData(generatePineScript(selectedIndicators, options));
  }, [selectedIndicators, options]);

  const activeCategory = selectedIndicators.length > 0
    ? INDICATORS.find(i => i.id === selectedIndicators[0].id)?.category
    : null;

  const hasSpecial = selectedIndicators.some(s => {
    const base = INDICATORS.find(i => i.id === s.id);
    return base?.isSpecial;
  });

  const isSegmented = selectedIndicators.length > 1 && activeCategory === 'oscillator' && !hasSpecial;

  const addIndicator = (ind) => {
    if (hasSpecial && !ind.isSpecial) {
      alert(lang === 'KR' ? '특수 지표(Exclusive) 활성 중에는 일반 지표를 추가할 수 없습니다.' : 'Regular indicators are blocked when a Special indicator is active.');
      return;
    }

    if (selectedIndicators.length >= MAX_INDICATORS && !ind.isSpecial) {
      alert(lang === 'KR' ? `지표는 최대 ${MAX_INDICATORS}개까지만 추가 가능합니다.` : `Maximum ${MAX_INDICATORS} indicators allowed.`);
      return;
    }

    let nextIndicators = [...selectedIndicators];

    if (ind.isSpecial) {
      nextIndicators = [];
    } else {
      if (activeCategory && activeCategory !== ind.category) return;
    }

    const newInd = {
      ...ind,
      // eslint-disable-next-line react-hooks/purity
      instanceId: `ind-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      parameters: ind.parameters.reduce((acc, p) => ({ ...acc, [p.id]: p.default }), {})
    };

    setSelectedIndicators([...nextIndicators, newInd]);
  };

  const removeIndicator = (instanceId) => {
    setSelectedIndicators(selectedIndicators.filter(i => i.instanceId !== instanceId));
  };

  const moveIndicator = (index, direction) => {
    const newItems = [...selectedIndicators];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setSelectedIndicators(newItems);
  };

  const updateParam = (instanceId, key, value) => {
    setSelectedIndicators(selectedIndicators.map(i =>
      i.instanceId === instanceId ? { ...i, parameters: { ...i.parameters, [key]: value } } : i
    ));
  };

  const copyToClipboard = () => {
    const textToCopy = options.exportMode === 'separate'
      ? (Array.isArray(generatedData) ? generatedData[activeSeparateTab] : '')
      : generatedData;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredIndicators = INDICATORS.filter(i =>
    i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const overlays = filteredIndicators.filter(i => i.category === 'overlay' && !i.isSpecial);
  const oscillators = filteredIndicators.filter(i => i.category === 'oscillator' && !i.isSpecial);
  const specials = filteredIndicators.filter(i => i.isSpecial);

  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col font-sans selection:bg-primary selection:text-white">
      <Header lang={lang} setLang={setLang} onLogoClick={() => setActiveTab(1)} />

      <main className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
        {/* Navigation Tabs (Mobile/Internal) */}
        {!activeTab && null}

        {activeTab === 1 ? (
          <>
            <div className="w-full lg:w-[480px] border-r border-[#30363d] flex flex-col overflow-y-auto bg-[#161b22] bg-opacity-40">
              <div className="p-6 space-y-8 pb-20">
                {/* Tab Switcher inside Sidebar for context */}
                <div className="flex bg-[#0d1117] rounded-2xl p-1.5 border border-[#30363d] mb-6 shadow-inner">
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 1 ? 'bg-primary text-white shadow-lg' : 'text-[#8b949e] hover:text-white'}`}
                  >
                    <Zap className="w-3.5 h-3.5" /> TAB 1: ARCHITECT
                  </button>
                  <button
                    onClick={() => setActiveTab(2)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 2 ? 'bg-primary text-white shadow-lg' : 'text-[#8b949e] hover:text-white'}`}
                  >
                    <BookOpen className="w-3.5 h-3.5" /> TAB 2: GUIDE
                  </button>
                </div>

                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b949e] flex items-center gap-2">
                      <Settings2 className="w-3.5 h-3.5" /> {lang === 'KR' ? '지표 제목 설정' : 'Indicator Title'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <input
                      type="text"
                      value={options.title}
                      onChange={(e) => setOptions({ ...options, title: e.target.value })}
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-[#484f58] text-sm"
                      placeholder={lang === 'KR' ? "지표 제목 설정" : "Indicator Title"}
                    />
                  </div>

                  {activeCategory && (
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[11px] text-primary font-bold uppercase">{activeCategory} Mode Locked</span>
                      </div>
                      <button
                        onClick={() => setSelectedIndicators([])}
                        className="text-[10px] bg-primary/20 hover:bg-primary/30 text-primary px-2 py-1 rounded-md font-bold transition-all"
                      >
                        RESET
                      </button>
                    </div>
                  )}
                </section>

                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#484f58] group-focus-within:text-primary transition-colors" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={lang === 'KR' ? '지표 검색 (FVG, OB, RSI...)' : 'Search indicators...'}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-2xl pl-11 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <div>
                    <SectionHeader
                      title={lang === 'KR' ? '프리미엄 특수 지표' : 'Premium Specials'}
                      expanded={specialExpanded}
                      onToggle={() => setSpecialExpanded(!specialExpanded)}
                      count={specials.length}
                      disabled={false}
                      icon={Star}
                      colorClass="bg-yellow-500"
                      badge="EXCLUSIVE"
                      as="h2"
                    />
                    {specialExpanded && (
                      <div className="overflow-hidden grid grid-cols-1 gap-2 mb-6">
                        {specials.map(ind => {
                          const isSelected = selectedIndicators.some(s => s.id === ind.id);
                          const isLocked = activeCategory && activeCategory !== ind.category;
                          return (
                            <button
                              key={ind.id}
                              disabled={isLocked}
                              onClick={() => addIndicator(ind)}
                              className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left
                                                ${isLocked ? 'opacity-20 bg-[#161b22] border-[#30363d] cursor-not-allowed' :
                                  isSelected ? 'bg-primary/10 border-primary' : 'bg-[#21262d] border-[#30363d] hover:border-yellow-500/50'}`}
                            >
                              <div className="flex flex-col">
                                <span className={`text-[11px] font-bold ${isSelected ? 'text-primary' : 'text-white'}`}>{ind.name}</span>
                                <span className="text-[9px] text-[#8b949e]">{ind.description || 'Special Alpha'}</span>
                              </div>
                              {isSelected && <Check className="w-3.5 h-3.5 text-primary" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div>
                    <SectionHeader
                      title={lang === 'KR' ? '오버레이 (차트형)' : 'Overlay'}
                      expanded={overlayExpanded}
                      onToggle={() => setOverlayExpanded(!overlayExpanded)}
                      count={overlays.length}
                      disabled={activeCategory === 'oscillator' || hasSpecial}
                      icon={LayoutPanelTop}
                      colorClass="bg-primary"
                      badge={hasSpecial ? "LOCKED" : ""}
                    />
                    {overlayExpanded && activeCategory !== 'oscillator' && !hasSpecial && (
                      <div className="overflow-hidden grid grid-cols-2 gap-2 mb-6">
                        {overlays.map(ind => (
                          <button
                            key={ind.id}
                            onClick={() => addIndicator(ind)}
                            className="flex flex-col items-start p-3 rounded-xl border bg-[#21262d] border-[#30363d] hover:border-primary transition-all text-left"
                          >
                            <span className="text-[10px] font-bold text-white leading-tight uppercase">{ind.name}</span>
                            <span className="text-[8px] text-[#8b949e]">V6 STABLE</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <SectionHeader
                      title={lang === 'KR' ? '오실레이터 (보조지표)' : 'Oscillators'}
                      expanded={oscillatorExpanded}
                      onToggle={() => setOscillatorExpanded(!oscillatorExpanded)}
                      count={oscillators.length}
                      disabled={activeCategory === 'overlay' || hasSpecial}
                      icon={LayoutPanelLeft}
                      colorClass="bg-teal-500"
                      badge={hasSpecial ? "LOCKED" : ""}
                    />
                    {oscillatorExpanded && activeCategory !== 'overlay' && !hasSpecial && (
                      <div className="overflow-hidden grid grid-cols-2 gap-2 mb-6">
                        {oscillators.map(ind => (
                          <button
                            key={ind.id}
                            onClick={() => addIndicator(ind)}
                            className="flex flex-col items-start p-3 rounded-xl border bg-[#21262d] border-[#30363d] hover:border-teal-500/50 transition-all text-left"
                          >
                            <span className="text-[10px] font-bold text-white leading-tight uppercase">{ind.name}</span>
                            <span className="text-[8px] text-[#8b949e]">OSC NATIVE</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <section className="space-y-4 pt-10 border-t border-[#30363d]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#8b949e]">
                      {lang === 'KR' ? '활성 디자인 레이어' : 'Active Design Layers'}
                    </h2>
                    <span className="text-primary font-mono text-xs">{selectedIndicators.length}/{MAX_INDICATORS}</span>
                  </div>

                  <div className="space-y-3 pb-32">
                    {selectedIndicators.map((ind, index) => (
                      <div
                        key={ind.instanceId}
                        className="group p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-primary/30 transition-all shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">{ind.name}</h4>
                              <p className="text-[9px] text-[#484f58] font-mono">{ind.instanceId}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => moveIndicator(index, -1)} className="p-1.5 hover:bg-[#21262d] rounded-md text-[#8b949e]"><ChevronUp className="w-3.5 h-3.5" /></button>
                            <button onClick={() => moveIndicator(index, 1)} className="p-1.5 hover:bg-[#21262d] rounded-md text-[#8b949e]"><ChevronDown className="w-3.5 h-3.5" /></button>
                            <button onClick={() => removeIndicator(ind.instanceId)} className="p-1.5 hover:bg-red-500/10 rounded-md text-red-500/70 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pb-2 border-b border-[#30363d]/50 mb-3">
                          {INDICATORS.find(master => master.id === ind.id).parameters.map(p => (
                            <div key={p.id} className="space-y-1.5">
                              <label className="text-[9px] font-bold text-[#484f58] uppercase px-1">{p.name}</label>
                              {p.type === 'source' ? (
                                <select
                                  value={ind.parameters[p.id]}
                                  onChange={(e) => updateParam(ind.instanceId, p.id, e.target.value)}
                                  className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-2 py-1.5 text-[10px] outline-none focus:border-primary text-[#c9d1d9]"
                                >
                                  {['open', 'high', 'low', 'close', 'hl2', 'hlc3', 'ohlc4'].map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
                                </select>
                              ) : (
                                <input
                                  type="number"
                                  value={ind.parameters[p.id]}
                                  onChange={(e) => updateParam(ind.instanceId, p.id, parseFloat(e.target.value))}
                                  className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-3 py-1.5 text-[10px] outline-none focus:border-primary text-[#c9d1d9]"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {selectedIndicators.length === 0 && (
                      <div className="py-20 border-2 border-dashed border-[#30363d] rounded-3xl flex flex-col items-center justify-center text-[#484f58] text-sm italic">
                        <Boxes className="w-12 h-12 mb-4 opacity-10" />
                        <p>{lang === 'KR' ? '지표를 선택하여 설계를 시작하십시오' : 'Select an indicator to start'}</p>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div>

            <div className="flex-1 flex flex-col bg-[#010409] relative shadow-2xl">
              <div className="h-16 border-b border-[#30363d] bg-[#0d1117] flex items-center justify-between px-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-primary" />
                    <span className="text-[11px] font-bold text-white tracking-widest uppercase">Expert Architect Engine v13</span>
                  </div>
                  <div className="h-4 w-[1px] bg-[#30363d]" />
                  <div className="flex items-center gap-2">
                    {isSegmented ? (
                      <div className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-[9px] font-bold uppercase flex items-center gap-2">
                        <Boxes className="w-3 h-3" /> Dashboard
                      </div>
                    ) : (
                      <div className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold uppercase flex items-center gap-2">
                        <Box className="w-3 h-3" /> Native View
                      </div>
                    )}
                    {hasSpecial && (
                      <div className="px-2 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-bold uppercase flex items-center gap-2">
                        <Star className="w-3 h-3 fill-current" /> Alpha Mode
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-[#3fb950] text-white text-xs font-bold transition-all active:scale-95 shadow-lg"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? (lang === 'KR' ? '복사됨!' : 'COPIED!') : (lang === 'KR' ? '스크립트 복사' : 'COPY SCRIPT')}
                </button>
              </div>

              <div className="flex-1 flex flex-col overflow-hidden p-6 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#161b22] bg-opacity-40 border border-[#30363d] rounded-2xl p-5 hover:border-primary/30 transition-all cursor-default group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-all">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h5 className="text-[13px] font-bold text-white uppercase tracking-tighter">Fast Design Guide</h5>
                    </div>
                    <p className="text-[13px] text-[#8b949e] leading-relaxed">
                      {lang === 'KR'
                        ? "좌측에서 원하는 지표를 선택하고 파라미터를 실시간으로 튜닝하세요. 생성된 스크립트는 트레이딩뷰 설정창에서 즉시 변수 조절이 가능합니다."
                        : "Select indicators on the left and tune parameters in real-time. The generated script allows direct variable adjustment in TradingView settings."}
                    </p>
                  </div>

                  <div className="bg-[#161b22] bg-opacity-40 border border-[#30363d] rounded-2xl p-5 hover:border-accent/30 transition-all cursor-default group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-all">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h5 className="text-[13px] font-bold text-white uppercase tracking-tighter">Deployment Notes</h5>
                    </div>
                    <p className="text-[13px] text-[#8b949e] leading-relaxed">
                      {lang === 'KR'
                        ? "생성된 코드를 복사하여 트레이딩뷰 파인 에디터에 붙여넣으세요. 최대 30개의 지표 레이어를 한 번의 스크립트로 결합하여 관리할 수 있습니다."
                        : "Copy the code and paste it into the TradingView Pine Editor. You can combine and manage up to 30 indicator layers in a single script."}
                    </p>
                  </div>
                </div>

                <div className="flex-1 rounded-3xl border border-[#30363d] bg-[#0d1117] overflow-hidden relative group">
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[10px] text-[#8b949e] font-mono">
                      PINE SCRIPT V6
                    </div>
                  </div>
                  <textarea
                    value={generatedData}
                    readOnly
                    className="w-full h-full bg-transparent p-8 text-[14px] font-mono text-primary leading-relaxed outline-none resize-none"
                    placeholder="// Generated Pine Script will appear here..."
                  />
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setDisclaimerOpen(!disclaimerOpen)}
                    className="flex items-center gap-2 text-[11px] text-[#484f58] hover:text-[#8b949e] transition-colors"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Financial Disclaimer (Toggle)</span>
                  </button>

                  {disclaimerOpen && (
                    <div className="mt-6 p-8 rounded-2xl bg-red-500/5 border border-red-500/10">
                      <p className="text-[12px] text-[#8b949e] leading-relaxed italic">
                        {lang === 'KR'
                          ? "본 서비스에서 생성된 모든 Pine Script 코드는 교육 및 정보 제공용입니다. 실제 매매에 따른 결과는 사용자 본인의 책임이며, 과거의 수익이 미래의 수익을 보장하지 않습니다. 금융 투자 시 반드시 전문가와 상의하십시오. 코드는 TradingView 환경에 따라 다르게 작동할 수 있습니다."
                          : "All Pine Script code generated by this service is for educational and informational purposes only. Trading involves significant risk, and you are solely responsible for any investment results. Past performance does not guarantee future results. Experts advice is recommended."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <IndicatorGuide
            selectedId={selectedIndicatorId}
            onSelect={setSelectedIndicatorId}
            onHome={() => {
              setActiveTab(1);
              setSelectedIndicatorId(null);
            }}
            lang={lang}
          />
        )}
      </main>
    </div>
  );
}

export default App;
