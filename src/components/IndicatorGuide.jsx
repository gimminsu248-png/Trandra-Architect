import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Search, Info, Settings, Lightbulb, TrendingUp, Share2 } from 'lucide-react';
import { GUIDES } from '../constants/indicatorGuides';

const IndicatorGuide = ({ selectedId, onSelect, onHome, lang = 'KR' }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const langKey = lang === 'KR' ? 'ko' : 'en';

    const filteredGuides = GUIDES.filter(guideData => {
        const guide = guideData[langKey];
        return guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            guideData.id.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (selectedId) {
        const guideData = GUIDES.find(g => g.id === selectedId);
        if (!guideData) return null;
        const guide = guideData[langKey];

        return (
            <div className="flex-1 overflow-y-auto bg-[#0d1117] text-[#c9d1d9] p-6 lg:p-12">
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between mb-8">
                        <button
                            onClick={() => onSelect(null)}
                            className="flex items-center gap-2 text-primary hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-bold uppercase tracking-widest text-xs">
                                {lang === 'KR' ? '문서 목록으로' : 'Back to List'}
                            </span>
                        </button>
                        <button
                            onClick={onHome}
                            className="text-[10px] font-bold text-[#8b949e] hover:text-primary uppercase tracking-widest transition-colors flex items-center gap-1"
                        >
                            <Share2 className="w-3 h-3" />
                            {lang === 'KR' ? '홈으로 이동' : 'Return Home'}
                        </button>
                    </div>

                    <header className="space-y-4 border-b border-[#30363d] pb-10">
                        <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                            {guide.title}
                        </h1>
                        <p className="text-lg text-[#8b949e] leading-relaxed">
                            {guide.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-tighter">
                                {guideData.category.toUpperCase()} Analysis
                            </span>
                            <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-tighter">Trading Education</span>
                            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-500 text-[10px] font-bold uppercase tracking-tighter">SEO Optimized Content</span>
                        </div>
                    </header>

                    <article
                        className="prose prose-invert max-w-none 
              prose-h2:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
              prose-p:text-[#c9d1d9] prose-p:text-base prose-p:leading-8 prose-p:mb-6 text-justify
              prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:mb-2 prose-li:text-[#c9d1d9]
              prose-strong:text-primary prose-strong:font-bold"
                        dangerouslySetInnerHTML={{ __html: guide.content }}
                    />

                    {/* AdSense Placeholder */}
                    <div className="my-16 p-8 rounded-3xl border border-dashed border-[#30363d] bg-[#161b22] flex flex-col items-center justify-center min-h-[250px] relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                        <Info className="w-8 h-8 text-[#484f58] mb-4 opacity-20" />
                        <span className="text-[10px] font-bold text-[#484f58] uppercase tracking-[0.2em]">Google AdSense Optimized Block</span>
                        <p className="text-[11px] text-[#484f58] mt-2">
                            {lang === 'KR' ? '전문가용 고품질 금융 지식 콘텐츠 섹션' : 'Professional Grade Financial Knowledge Content Section'}
                        </p>
                    </div>

                    <footer className="pt-20 border-t border-[#30363d] text-center">
                        <p className="text-xs text-[#484f58] uppercase tracking-widest mb-4">You are reading the official guide of Trandra Architect</p>
                        <div className="flex items-center justify-center gap-6">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-primary hover:text-white text-[10px] font-bold uppercase transition-all">
                                {lang === 'KR' ? '페이지 상단으로' : 'Top of page'}
                            </button>
                            <button onClick={() => onSelect(null)} className="text-[#8b949e] hover:text-white text-[10px] font-bold uppercase transition-all">
                                {lang === 'KR' ? '다른 지표 둘러보기' : 'Explore more'}
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col bg-[#010409] overflow-hidden">
            <div className="p-8 lg:p-12 border-b border-[#30363d] bg-[#0d1117]">
                <div className="max-w-6xl mx-auto space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={onHome}
                                className="p-3 rounded-2xl border border-[#30363d] text-[#8b949e] hover:text-white hover:border-primary transition-all"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-black text-white flex items-center gap-3">
                                    <BookOpen className="w-8 h-8 text-primary" />
                                    {lang === 'KR' ? '지표 백과사전' : 'Indicator Wiki'} <span className="text-primary text-sm font-bold uppercase tracking-tighter">Trading Wiki</span>
                                </h1>
                                <p className="text-[#8b949e] mt-1 text-sm lg:text-base">
                                    {lang === 'KR' ? '전략적 트레이딩을 위한 고품질 기술 지표 분석 가이드' : 'Premium guide to technical indicators for strategic trading'}
                                </p>
                            </div>
                        </div>
                        <div className="relative group w-full lg:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#484f58] group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder={lang === 'KR' ? '지표 이름 검색 (Search)...' : 'Search indicators...'}
                                className="w-full bg-[#0d1117] border border-[#30363d] rounded-2xl pl-11 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 lg:p-12 scroll-smooth">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGuides.map(guideData => {
                        const guide = guideData[langKey];
                        return (
                            <div
                                key={guideData.id}
                                onClick={() => onSelect(guideData.id)}
                                className="group p-6 rounded-3xl bg-[#161b22] bg-opacity-40 border border-[#30363d] hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between h-full"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />

                                <div className="relative space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="p-3 rounded-2xl bg-[#0d1117] border border-[#30363d] text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <TrendingUp className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-bold text-[#484f58] uppercase tracking-widest group-hover:text-primary transition-colors">
                                            {guideData.category.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{guide.name}</h3>
                                        <p className="text-[13px] text-[#8b949e] leading-relaxed line-clamp-3">
                                            {guide.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative pt-6 mt-6 border-t border-[#30363d]/50 flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        {lang === 'KR' ? '자세히 보기' : 'Read more'} →
                                    </span>
                                    <div className="flex gap-1">
                                        <Info className="w-3.5 h-3.5 text-[#484f58]" />
                                        <Settings className="w-3.5 h-3.5 text-[#484f58]" />
                                        <Lightbulb className="w-3.5 h-3.5 text-[#484f58]" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default IndicatorGuide;
