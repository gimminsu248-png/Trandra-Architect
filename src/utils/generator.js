import { INDICATORS } from '../constants/indicators';

export const generatePineScript = (selectedIndicators, options) => {
    const { title, exportMode = 'merged' } = options;
    const n = selectedIndicators.length;

    if (n === 0) return exportMode === 'merged' ? '' : [];

    const isOverlay = INDICATORS.find(i => i.id === selectedIndicators[0].id)?.category === 'overlay';
    const isSingle = n === 1;

    const buildScript = (indicators, showDashboard = false) => {
        let script = `// This Pine Script™ code is version 6\n`;
        script += `//@version=6\n`;
        script += `indicator("${title || 'Premium Smart Architect'}", overlay=${isOverlay}, max_bars_back=500)\n\n`;

        if (showDashboard) {
            script += `// --- [공통 함수] 구역 정규화 ---\n`;
            script += `segment_norm(src, len, min_h, max_h) =>\n`;
            script += `    h = ta.highest(src, len)\n`;
            script += `    l = ta.lowest(src, len)\n`;
            script += `    min_h + (max_h - min_h) * (src - l) / (h - l + 1e-10)\n\n`;
        }

        const typeCounts = {};

        indicators.forEach((ind, index) => {
            const baseInd = INDICATORS.find(i => i.id === ind.id);
            if (!baseInd) return;

            typeCounts[ind.id] = (typeCounts[ind.id] || 0) + 1;
            const idPrefix = typeCounts[ind.id] > 1 ? `${ind.id}${typeCounts[ind.id]}` : `${ind.id}`;
            const prefix = `${idPrefix.replace('sp', 'p')}_`;

            script += `// ==========================================\n`;
            script += `// ${baseInd.name} Setup\n`;
            script += `// ==========================================\n`;

            // Back to static snippets
            script += baseInd.snippet(ind.parameters, prefix) + `\n`;

            if (baseInd.isSpecial) {
                if (baseInd.category === 'oscillator' && !isSingle && showDashboard) {
                    const step = 100 / n;
                    const min_h = Math.floor(step * index) + 5;
                    const max_h = Math.floor(step * (index + 1)) - 5;
                    script += `plot(${prefix}raw, "${baseInd.name} Real", display=display.status_line + display.data_window)\n`;
                    script += `${prefix}vis = segment_norm(${prefix}raw, 100, ${min_h}, ${max_h})\n`;
                    script += `plot(${prefix}vis, "${baseInd.name} Visual", color=${baseInd.color || 'color.white'}, display=display.pane)\n`;
                } else if (baseInd.category === 'oscillator') {
                    script += `plot(${prefix}raw, "${baseInd.name}", color=${baseInd.color || 'color.white'})\n`;
                }
            } else if (isOverlay) {
                if (ind.id === 'bb') {
                    script += `plot(${prefix}mid, "BB Mid", color=color.gray)\n`;
                    script += `p_up = plot(${prefix}up, "BB Upper", color=color.teal)\n`;
                    script += `p_low = plot(${prefix}low, "BB Lower", color=color.teal)\n`;
                    script += `fill(p_up, p_low, color=color.new(color.teal, 90))\n`;
                } else if (ind.id === 'ichimoku') {
                    script += `plot(${prefix}tenkan, "Tenkan", color=color.red)\n`;
                    script += `plot(${prefix}kijun, "Kijun", color=color.blue)\n`;
                    script += `p1 = plot(${prefix}senkouA, "Senkou A", color=color.green, offset=26)\n`;
                    script += `p2 = plot(${prefix}senkouB, "Senkou B", color=color.red, offset=26)\n`;
                    script += `fill(p1, p2, color=color.new(color.green, 90))\n`;
                } else {
                    script += `plot(${prefix}raw, "${baseInd.name}", color=${baseInd.color || 'color.blue'}, linewidth=2)\n`;
                }
            } else {
                if (isSingle) {
                    script += `plot(${prefix}raw, "${baseInd.name}", color=${baseInd.color || 'color.white'})\n`;
                } else {
                    const step = 100 / n;
                    const min_h = Math.floor(step * index) + 5;
                    const max_h = Math.floor(step * (index + 1)) - 5;
                    script += `plot(${prefix}raw, "${baseInd.name} Real", display=display.status_line + display.data_window)\n`;
                    script += `${prefix}vis = segment_norm(${prefix}raw, 100, ${min_h}, ${max_h})\n`;
                    script += `plot(${prefix}vis, "${baseInd.name} Visual", color=${baseInd.color || 'color.white'}, display=display.pane)\n`;
                    script += `hline(${min_h - 5 > 0 ? min_h - 5 : 0}, color=color.new(color.gray, 80), linestyle=hline.style_dotted)\n`;
                }
            }
            script += `\n`;
        });
        return script;
    };

    if (exportMode === 'separate') {
        return selectedIndicators.map(ind => buildScript([ind], false));
    }

    return buildScript(selectedIndicators, !isSingle && !isOverlay);
};
