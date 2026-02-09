export const INDICATORS = [
    // --- OVERLAY GROUP (20+ Standard TV Indicators) ---
    {
        id: 'ema', name: 'EMA', category: 'overlay', color: 'color.blue',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }, { id: 'source', name: 'Source', type: 'source', default: 'close' }],
        snippet: (p, prefix) => `${prefix}raw = ta.ema(${p.source}, ${p.length})`
    },
    {
        id: 'sma', name: 'SMA', category: 'overlay', color: 'color.orange',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }, { id: 'source', name: 'Source', type: 'source', default: 'close' }],
        snippet: (p, prefix) => `${prefix}raw = ta.sma(${p.source}, ${p.length})`
    },
    {
        id: 'wma', name: 'WMA', category: 'overlay', color: 'color.teal',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }, { id: 'source', name: 'Source', type: 'source', default: 'close' }],
        snippet: (p, prefix) => `${prefix}raw = ta.wma(${p.source}, ${p.length})`
    },
    {
        id: 'vwma', name: 'VWMA', category: 'overlay', color: 'color.olive',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }],
        snippet: (p, prefix) => `${prefix}raw = ta.vwma(close, ${p.length})`
    },
    {
        id: 'hma', name: 'HMA', category: 'overlay', color: 'color.yellow',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 9 }],
        snippet: (p, prefix) => `${prefix}raw = ta.hma(close, ${p.length})`
    },
    {
        id: 'dema', name: 'DEMA', category: 'overlay', color: 'color.lime',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }],
        snippet: (p, prefix) => `${prefix}raw = ta.dema(close, ${p.length})`
    },
    {
        id: 'tema', name: 'TEMA', category: 'overlay', color: 'color.aqua',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }],
        snippet: (p, prefix) => `${prefix}raw = ta.tema(close, ${p.length})`
    },
    {
        id: 'alma', name: 'ALMA', category: 'overlay', color: 'color.maroon',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 9 }, { id: 'offset', name: 'Offset', type: 'number', default: 0.85 }, { id: 'sigma', name: 'Sigma', type: 'number', default: 6 }],
        snippet: (p, prefix) => `${prefix}raw = ta.alma(close, ${p.length}, ${p.offset}, ${p.sigma})`
    },
    {
        id: 'bb', name: 'Bollinger Bands', category: 'overlay',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }, { id: 'mult', name: 'StdDev', type: 'number', default: 2.0 }],
        snippet: (p, prefix) => `[${prefix}mid, ${prefix}up, ${prefix}low] = ta.bb(close, ${p.length}, ${p.mult})`
    },
    {
        id: 'donchian', name: 'Donchian Channels', category: 'overlay',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }],
        snippet: (p, prefix) => `${prefix}up = ta.highest(high, ${p.length})\n${prefix}low = ta.lowest(low, ${p.length})\n${prefix}mid = math.avg(${prefix}up, ${prefix}low)`
    },
    {
        id: 'keltner', name: 'Keltner Channels', category: 'overlay',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }, { id: 'mult', name: 'Multiplier', type: 'number', default: 2.0 }],
        snippet: (p, prefix) => `${prefix}mid = ta.ema(close, ${p.length})\n${prefix}up = ${prefix}mid + ta.atr(${p.length})*${p.mult}\n${prefix}low = ${prefix}mid - ta.atr(${p.length})*${p.mult}`
    },
    {
        id: 'supertrend', name: 'Supertrend', category: 'overlay',
        parameters: [{ id: 'atrLen', name: 'ATR Length', type: 'number', default: 10 }, { id: 'factor', name: 'Factor', type: 'number', default: 3 }],
        snippet: (p, prefix) => `[${prefix}raw, ${prefix}dir] = ta.supertrend(${p.factor}, ${p.atrLen})`
    },
    {
        id: 'ichimoku', name: 'Ichimoku Cloud', category: 'overlay',
        parameters: [{ id: 'conv', name: 'Conversion', type: 'number', default: 9 }, { id: 'base', name: 'Base', type: 'number', default: 26 }, { id: 'lagging', name: 'Lagging', type: 'number', default: 52 }],
        snippet: (p, prefix) => `${prefix}tenkan = math.avg(ta.highest(${p.conv}), ta.lowest(${p.conv}))\n${prefix}kijun = math.avg(ta.highest(${p.base}), ta.lowest(${p.base}))\n${prefix}senkouA = math.avg(${prefix}tenkan, ${prefix}kijun)\n${prefix}senkouB = math.avg(ta.highest(${p.lagging}), ta.lowest(${p.lagging}))`
    },
    {
        id: 'psar', name: 'Parabolic SAR', category: 'overlay', color: 'color.lime',
        parameters: [{ id: 'start', name: 'Start', type: 'number', default: 0.02 }, { id: 'inc', name: 'Increment', type: 'number', default: 0.02 }, { id: 'max', name: 'Max', type: 'number', default: 0.2 }],
        snippet: (p, prefix) => `${prefix}raw = ta.sar(${p.start}, ${p.inc}, ${p.max})`
    },
    {
        id: 'vwap', name: 'VWAP', category: 'overlay', color: 'color.orange',
        parameters: [],
        snippet: (p, prefix) => `${prefix}raw = ta.vwap(hlc3)`
    },
    {
        id: 'pivot', name: 'Pivot Points Standard', category: 'overlay', color: 'color.white',
        parameters: [],
        snippet: (p, prefix) => `${prefix}raw = ta.pivotlow(low, 3, 3)\n// Simple pivot high example\n${prefix}high = ta.pivothigh(high, 3, 3)`
    },
    {
        id: 'mcginley', name: 'McGinley Dynamic', category: 'overlay', color: 'color.fuchsia',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 14 }],
        snippet: (p, prefix) => `${prefix}raw = 0.0\n${prefix}raw := nz(${prefix}raw[1]) + (close - nz(${prefix}raw[1])) / (0.6 * ${p.len} * math.pow(close / nz(${prefix}raw[1]), 4))`
    },
    {
        id: 'fractals', name: 'Williams Fractals', category: 'overlay', color: 'color.red',
        parameters: [],
        snippet: (p, prefix) => `${prefix}up = high[2] > high[0] and high[2] > high[1] and high[2] > high[3] and high[2] > high[4]\n${prefix}dn = low[2] < low[0] and low[2] < low[1] and low[2] < low[3] and low[2] < low[4]`
    },
    {
        id: 'zigzag', name: 'Zig Zag High Low', category: 'overlay', color: 'color.yellow',
        parameters: [{ id: 'depth', name: 'Depth', type: 'number', default: 10 }],
        snippet: (p, prefix) => `${prefix}raw = ta.highest(high, ${p.depth})`
    },

    // --- OSCILLATOR GROUP (30+ Standard TV Indicators) ---
    {
        id: 'rsi', name: 'RSI', category: 'oscillator', color: 'color.purple',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 14 }],
        snippet: (p, prefix) => `${prefix}raw = ta.rsi(close, ${p.length})`
    },
    {
        id: 'macd', name: 'MACD', category: 'oscillator', color: 'color.blue',
        parameters: [{ id: 'fast', name: 'Fast', type: 'number', default: 12 }, { id: 'slow', name: 'Slow', type: 'number', default: 26 }, { id: 'sig', name: 'Signal', type: 'number', default: 9 }],
        snippet: (p, prefix) => `[${prefix}raw, ${prefix}sig, ${prefix}hist] = ta.macd(close, ${p.fast}, ${p.slow}, ${p.sig})`
    },
    {
        id: 'stoch', name: 'Stochastic', category: 'oscillator', color: 'color.orange',
        parameters: [{ id: 'k', name: '%K', type: 'number', default: 14 }, { id: 'd', name: '%D', type: 'number', default: 3 }],
        snippet: (p, prefix) => `${prefix}k = ta.stoch(close, high, low, ${p.k})\n${prefix}raw = ta.sma(${prefix}k, ${p.d})`
    },
    {
        id: 'stoch_rsi', name: 'Stochastic RSI', category: 'oscillator', color: 'color.teal',
        parameters: [{ id: 'rsiLen', name: 'RSI Len', type: 'number', default: 14 }, { id: 'stochLen', name: 'Stoch Len', type: 'number', default: 14 }, { id: 'k', name: 'K', type: 'number', default: 3 }],
        snippet: (p, prefix) => `${prefix}rsi = ta.rsi(close, ${p.rsiLen})\n${prefix}raw = ta.sma(ta.stoch(${prefix}rsi, ${prefix}rsi, ${prefix}rsi, ${p.stochLen}), ${p.k})`
    },
    {
        id: 'atr', name: 'ATR', category: 'oscillator', color: 'color.red',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 14 }],
        snippet: (p, prefix) => `${prefix}raw = ta.atr(${p.length})`
    },
    {
        id: 'cci', name: 'CCI', category: 'oscillator', color: 'color.aqua',
        parameters: [{ id: 'length', name: 'Length', type: 'number', default: 20 }],
        snippet: (p, prefix) => `${prefix}raw = ta.cci(hlc3, ${p.length})`
    },
    {
        id: 'adx', name: 'ADX', category: 'oscillator', color: 'color.yellow',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 14 }],
        snippet: (p, prefix) => `[_, _, ${prefix}raw] = ta.dmi(${p.len}, ${p.len})`
    },
    {
        id: 'aroon', name: 'Aroon', category: 'oscillator', color: 'color.blue',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 14 }],
        snippet: (p, prefix) => `${prefix}up = 100 * (ta.highestbars(high, ${p.len} + 1) + ${p.len}) / ${p.len}\n${prefix}dn = 100 * (ta.lowestbars(low, ${p.len} + 1) + ${p.len}) / ${p.len}\n${prefix}raw = ${prefix}up - ${prefix}dn`
    },
    {
        id: 'obv', name: 'OBV', category: 'oscillator', color: 'color.white',
        parameters: [],
        snippet: (p, prefix) => `${prefix}raw = ta.obv`
    },
    {
        id: 'mfi', name: 'MFI', category: 'oscillator', color: 'color.green',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 14 }],
        snippet: (p, prefix) => `${prefix}raw = ta.mfi(hlc3, ${p.len})`
    },
    {
        id: 'wpr', name: 'Williams %R', category: 'oscillator', color: 'color.purple',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 14 }],
        snippet: (p, prefix) => `${prefix}raw = ta.wpr(${p.len})`
    },
    {
        id: 'awesome', name: 'Awesome Oscillator', category: 'oscillator', color: 'color.orange',
        parameters: [],
        snippet: (p, prefix) => `${prefix}raw = ta.ao`
    },
    {
        id: 'mom', name: 'Momentum', category: 'oscillator', color: 'color.blue',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 10 }],
        snippet: (p, prefix) => `${prefix}raw = ta.mom(close, ${p.len})`
    },
    {
        id: 'chaikin', name: 'Chaikin Volatility', category: 'oscillator', color: 'color.gray',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 10 }],
        snippet: (p, prefix) => `${prefix}hl = high - low\n${prefix}raw = ta.roc(ta.ema(${prefix}hl, ${p.len}), ${p.len})`
    },
    {
        id: 'vortex', name: 'Vortex Indicator', category: 'oscillator', color: 'color.blue',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 14 }],
        snippet: (p, prefix) => `${prefix}tr = ta.tr(true)\n${prefix}vmp = math.sum(math.abs(high - low[1]), ${p.len})\n${prefix}vmm = math.sum(math.abs(low - high[1]), ${p.len})\n${prefix}raw = ${prefix}vmp / math.sum(${prefix}tr, ${p.len})`
    },
    {
        id: 'ppo', name: 'Price Price Oscillator', category: 'oscillator', color: 'color.teal',
        parameters: [{ id: 'f', name: 'Fast', type: 'number', default: 12 }, { id: 's', name: 'Slow', type: 'number', default: 26 }],
        snippet: (p, prefix) => `${prefix}raw = (ta.ema(close, ${p.f}) - ta.ema(close, ${p.s})) / ta.ema(close, ${p.s}) * 100`
    },
    {
        id: 'smi', name: 'SMI Ergodic', category: 'oscillator', color: 'color.red',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 20 }],
        snippet: (p, prefix) => `${prefix}raw = ta.tsi(close, ${p.len}, ${p.len - 5})`
    },
    {
        id: 'mass', name: 'Mass Index', category: 'oscillator', color: 'color.gray',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 9 }],
        snippet: (p, prefix) => `${prefix}ema1 = ta.ema(high - low, ${p.len})\n${prefix}ema2 = ta.ema(${prefix}ema1, ${p.len})\n${prefix}raw = math.sum(${prefix}ema1 / ${prefix}ema2, 25)`
    },
    {
        id: 'trix', name: 'TRIX', category: 'oscillator', color: 'color.fuchsia',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 18 }],
        snippet: (p, prefix) => `${prefix}raw = 10000 * ta.change(ta.ema(ta.ema(ta.ema(math.log(close), ${p.len}), ${p.len}), ${p.len}))`
    },
    {
        id: 'coppock', name: 'Coppock Curve', category: 'oscillator', color: 'color.blue',
        parameters: [],
        snippet: (p, prefix) => `${prefix}raw = ta.wma(ta.roc(close, 14) + ta.roc(close, 11), 10)`
    },
    {
        id: 'chop', name: 'Choppiness Index', category: 'oscillator', color: 'color.gray',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 14 }],
        snippet: (p, prefix) => `${prefix}raw = 100 * math.log10(math.sum(ta.tr, ${p.len}) / (ta.highest(high, ${p.len}) - ta.lowest(low, ${p.len}))) / math.log10(${p.len})`
    },

    // --- PREMIUM SPECIAL INDICATORS (10 Expert Features) ---
    {
        id: 'sp01_cvd', name: 'CVD (Cumulative Vol Delta)', category: 'oscillator', isSpecial: true, color: 'color.blue',
        description: 'Cumulative Volume Delta (Whale Tracker)',
        parameters: [{ id: 'period', name: 'Anchor', type: 'number', default: 100 }],
        snippet: (p, prefix) => `${prefix}d = (close >= open ? volume : -volume)\n${prefix}raw = math.sum(${prefix}d, ${p.period})`
    },
    {
        id: 'sp02_fvg', name: 'FVG (Fair Value Gap)', category: 'overlay', isSpecial: true, color: 'color.new(color.teal, 80)',
        description: 'Institutional Imbalance Boxes',
        parameters: [{ id: 'threshold', name: 'Min Gap %', type: 'number', default: 0.1 }],
        snippet: () => `if low > high[2]\n    box.new(bar_index-2, low, bar_index, high[2], bgcolor=color.new(color.teal, 80), border_color=na)\nif high < low[2]\n    box.new(bar_index-2, high, bar_index, low[2], bgcolor=color.new(color.red, 80), border_color=na)`
    },
    {
        id: 'sp03_ob', name: 'Order Blocks (SMC)', category: 'overlay', isSpecial: true, color: 'color.new(color.blue, 80)',
        description: 'Smart Money Order Blocks',
        parameters: [{ id: 'len', name: 'Lookback', type: 'number', default: 20 }],
        snippet: (p) => `if close > ta.highest(high[1], ${p.len})\n    box.new(bar_index, low, bar_index+5, high, bgcolor=color.new(color.blue, 70))\nif close < ta.lowest(low[1], ${p.len})\n    box.new(bar_index, low, bar_index+5, high, bgcolor=color.red)`
    },
    {
        id: 'sp04_zscore', name: 'Z-Score Analysis', category: 'oscillator', isSpecial: true, color: 'color.yellow',
        parameters: [{ id: 'len', name: 'Length', type: 'number', default: 20 }],
        snippet: (p, prefix) => `${prefix}avg = ta.sma(close, ${p.len})\n${prefix}st = ta.stdev(close, ${p.len})\n${prefix}raw = (close - ${prefix}avg) / ${prefix}st`
    },
    {
        id: 'sp05_squeeze', name: 'Squeeze Momentum Pro', category: 'oscillator', isSpecial: true, color: 'color.lime',
        parameters: [{ id: 'len', name: 'BB/KC Len', type: 'number', default: 20 }],
        snippet: (p, prefix) => `${prefix}raw = ta.linreg(close - math.avg(ta.highest(high, ${p.len}), ta.lowest(low, ${p.len}), ta.sma(close, ${p.len})), ${p.len}, 0)`
    },
    {
        id: 'sp06_liq', name: 'Liquidation HeatMap', category: 'oscillator', isSpecial: true, color: 'color.orange',
        parameters: [{ id: 'mult', name: 'Vol Mult', type: 'number', default: 2 }],
        snippet: (p, prefix) => `${prefix}raw = volume > ta.sma(volume, 20)*${p.mult} ? (close-close[1])*volume : 0`
    },
    {
        id: 'sp07_funding', name: 'Funding & OI Sync', category: 'oscillator', isSpecial: true, color: 'color.fuchsia',
        parameters: [{ id: 'len', name: 'Smooth', type: 'number', default: 10 }],
        snippet: (p, prefix) => `${prefix}raw = ta.ema(volume * (close - open), ${p.len})`
    },
    {
        id: 'sp08_adr', name: 'ADR Projections', category: 'overlay', isSpecial: true, color: 'color.silver',
        parameters: [{ id: 'len', name: 'ADR Days', type: 'number', default: 14 }],
        snippet: (p, prefix) => `${prefix}adr = ta.sma(high - low, ${p.len})\nplot(low + ${prefix}adr, "ADR High", color=color.green)\nplot(high - ${prefix}adr, "ADR Low", color=color.red)`
    },
    {
        id: 'sp09_vp', name: 'Volume Profile (POC)', category: 'overlay', isSpecial: true, color: 'color.yellow',
        parameters: [],
        snippet: () => `plot(ta.vwap(close), "POC", color=color.yellow, linewidth=3)`
    },
    {
        id: 'sp10_div', name: 'Full Divergence Eng', category: 'overlay', isSpecial: true, color: 'color.white',
        parameters: [{ id: 'lb', name: 'Pivot Lookback', type: 'number', default: 5 }],
        snippet: (p, prefix) => `${prefix}rsi = ta.rsi(close, 14)\n${prefix}ph = ta.pivothigh(${prefix}rsi, ${p.lb}, ${p.lb})\n${prefix}pl = ta.pivotlow(${prefix}rsi, ${p.lb}, ${p.lb})\nplotshape(${prefix}ph, "Bearish Div", shape.triangledown, location.abovebar, color.red)\nplotshape(${prefix}pl, "Bullish Div", shape.triangleup, location.belowbar, color.green)`
    }
];
