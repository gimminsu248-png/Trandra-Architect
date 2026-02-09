export const GUIDES = [
  // --- OVERLAYS (19) ---
  {
    id: 'ema',
    category: 'overlay',
    ko: {
      name: 'EMA (지수 이동 평균)',
      title: 'EMA 마스터 가이드: 추세의 탄력을 읽는 법',
      description: '단순 이동 평균의 지연 현상을 극복하여 최근 시장 변화를 가장 빠르게 포착하는 지표입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>지수 이동 평균(EMA)은 과거의 모든 데이터를 사용하지만, <strong>최근 가격에 더 높은 가중치</strong>를 부여하여 계산하는 이동평균선입니다. 이는 트레이더가 시장의 갑작스러운 방향 전환을 단순 이동 평균(SMA)보다 훨씬 빠르게 포착할 수 있게 돕습니다.</p>
        
        <h3>2. 기술적 원리</h3>
        <p>EMA는 단순 산술 평균이 아닌 '지수 식'을 사용합니다. 수식의 핵심은 '평활화 계수(Smoothing Factor)'입니다. 기간이 N일일 때 가중치는 2/(N+1)로 결정되며, 이 값이 클수록 최근 시세 변화에 민감하게 반응합니다.</p>
        
        <h3>3. 해석 방법</h3>
        <ul>
          <li><strong>추세 판단:</strong> 가격이 EMA 위에 있으면 상승 추세, 아래에 있으면 하락 추세로 간주합니다.</li>
          <li><strong>이격도 체크:</strong> 가격과 EMA 사이의 거리가 너무 멀어지면 평균으로 회귀하려는 성질을 이용해 과매수/과매도를 판단합니다.</li>
          <li><strong>배열 상태:</strong> 단기, 중기, 장기 EMA가 위에서부터 순서대로 놓인 '정배열'은 강력한 매수 시장을 의미합니다.</li>
        </ul>
        
        <h3>4. 실전 매매 전략</h3>
        <ul>
          <li><strong>골든/데드크로스:</strong> 9일 EMA가 21일 EMA를 상향 돌파할 때 매수하며, 반대의 경우 매도합니다.</li>
          <li><strong>지급 지지선 활용:</strong> 강한 상승장에서는 20일 EMA가 강력한 지지선 역할을 합니다. 가격이 이 선에 닿을 때가 최적의 '눌림목' 매수 타점입니다.</li>
        </ul>
        
        <h3>5. 장점 및 주의사항</h3>
        <p><strong>장점:</strong> SMA보다 지연 시간이 짧아 최신 트렌드 반영에 탁월합니다.<br>
        <strong>주의:</strong> 횡보장(Box권)에서는 가격이 선 위아래를 반복해서 관통하며 '가짜 신호(Whipsaw)'를 많이 내보낼 수 있으므로 다른 보조지표와 병행해야 합니다.</p>
      `
    },
    en: {
      name: 'EMA (Exponential Moving Average)',
      title: 'EMA Master Guide: Capturing Trend Momentum',
      description: 'The standard tool to overcome SMA lag and react fast to the latest market shifts.',
      content: `
        <h3>1. Overview</h3>
        <p>The Exponential Moving Average (EMA) is a type of moving average that places a <strong>greater weight and significance on the most recent data points</strong>. It is designed to respond more quickly to price changes than the Simple Moving Average (SMA), making it a favorite for trend followers.</p>
        
        <h3>2. Technical Logic</h3>
        <p>The EMA uses a constant smoothing factor: 2 / (N + 1). This mathematical approach ensures that current prices have a exponentially higher impact on the indicator value than older prices, reducing the inherent "lag" in averaging.</p>
        
        <h3>3. How to Interpret</h3>
        <ul>
          <li><strong>Trend Bias:</strong> Price above EMA suggests a bullish bias; price below indicates a bearish bias.</li>
          <li><strong>Mean Reversion:</strong> When the distance between price and EMA becomes extreme, it often signals a potential pullback toward the mean.</li>
          <li><strong>Parallel Alignment:</strong> When multiple EMAs (e.g., 20, 50, 200) are aligned in sequence, it confirms a healthy, sustainable trend.</li>
        </ul>
        
        <h3>4. Practical Trading Strategies</h3>
        <ul>
          <li><strong>The Cross Strategy:</strong> Trade the crossover between a fast EMA (e.g., 9) and a slow EMA (e.g., 21) to enter a new trend early.</li>
          <li><strong>Dynamic Support/Resistance:</strong> In a strong trend, the 20-period EMA often acts as a reliable floor. Buying the "touch" of this line is a high-probability setup.</li>
        </ul>
        
        <h3>5. Pros & Precautions</h3>
        <p><strong>Pros:</strong> Excellent for fast markets and early trend detection.<br>
        <strong>Precautions:</strong> Highly prone to "Whipsaws" in sideways or choppy markets. Always combine with volume or oscillators like RSI.</p>
      `
    }
  },
  {
    id: 'sma',
    category: 'overlay',
    ko: {
      name: 'SMA (단순 이동 평균)',
      title: 'SMA: 시장의 평균적 심리와 균형 단가',
      description: '가장 오래되고 가장 널리 쓰이는 기본 중의 기본, 시장의 기준선입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>단순 이동 평균(SMA)은 특정 기간 동안의 종가를 모두 합하여 기간 수로 나눈 값입니다. 모든 데이터 포인트에 동일한 가중치를 부여하므로, 시장의 중장기적인 방향성을 확인하는 데 최적화되어 있습니다.</p>
        
        <h3>2. 기술적 원리</h3>
        <p>수학적으로 가장 정직한 산술 평균입니다. 새로운 데이터가 들어오면 가장 오래된 데이터를 제거하고 평균을 다시 냄으로써 가격의 흐름을 부드럽게(Smoothing) 표현합니다.</p>
        
        <h3>3. 해석 방법</h3>
        <ul>
          <li><strong>장기 기준선:</strong> 특히 200일 SMA는 '대세 하락'과 '대세 상승'을 가르는 절대적인 기준선으로 통용됩니다.</li>
          <li><strong>지지와 저항:</strong> 가격이 SMA 근처에 오면 심리적 매수/매도세가 몰려 강력한 지지 또는 저항이 형성됩니다.</li>
        </ul>
        
        <h3>4. 실전 매매 전략</h3>
        <ul>
          <li><strong>트렌드 필터링:</strong> 가격이 200일 SMA 위에 있을 때만 '매수' 포지션을 고려하는 필터로 활용하십시오.</li>
          <li><strong>수렴 후 확산:</strong> 여러 기간의 SMA(5, 20, 60, 120)가 한곳으로 모였다가 벌어지는 시점이 큰 추세의 시작입니다.</li>
        </ul>
        
        <h3>5. 장점 및 주의사항</h3>
        <p><strong>장점:</strong> 전 세계 수많은 트레이더와 기관이 참고하므로 '심리적 지지/저항'의 실효성이 매우 높습니다.<br>
        <strong>주의:</strong> 지연 시간(Lag)이 길기 때문에 급격한 변동성 장세에서는 신호가 늦게 나타날 수 있습니다.</p>
      `
    },
    en: {
      name: 'SMA (Simple Moving Average)',
      title: 'SMA: The Benchmark for Market Equilibrium',
      description: 'The foundation of technical analysis, providing a clean view of the average cost of participation.',
      content: `
        <h3>1. Overview</h3>
        <p>The Simple Moving Average (SMA) is calculated by adding the closing prices for a specific number of periods and dividing that sum by the number of periods. It is the most straightforward and widely used benchmark for long-term trend analysis.</p>
        
        <h3>2. Technical Logic</h3>
        <p>SMA treats every candle within the selected timeframe with equal importance. By smoothing out erratic price spikes, it offers a "clearer" picture of the true path the market is following.</p>
        
        <h3>3. How to Interpret</h3>
        <ul>
          <li><strong>The Line in the Sand:</strong> The 200-period SMA is widely regarded by institutions as the divider between a bull and bear market.</li>
          <li><strong>Psychological S/R:</strong> Because so many traders watch the SMA, it becomes a self-fulfilling prophecy of support and resistance.</li>
        </ul>
        
        <h3>4. Practical Trading Strategies</h3>
        <ul>
          <li><strong>Trend Filtering:</strong> Only take "Long" positions when price is trading above the 50 or 200-period SMA.</li>
          <li><strong>Moving Average Convergence:</strong> When multiple SMAs cluster together, wait for the expansion—this is usually the seed of a massive move.</li>
        </ul>
        
        <h3>5. Pros & Precautions</h3>
        <p><strong>Pros:</strong> High reliability as a major institutional reference point.<br>
        <strong>Precautions:</strong> Slow response time. It may lag too much during sudden news-driven crashes or pumps.</p>
      `
    }
  },
  {
    id: 'wma',
    category: 'overlay',
    ko: {
      name: 'WMA (가중 이동 평균)',
      title: 'WMA: 선형적 가중치를 통한 정교한 추세 추적',
      description: '각 데이터 포인트에 중요도를 차등 배분하여 EMA와 SMA 사이의 균형을 잡은 지표입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>WMA(Weighted Moving Average)는 가장 최근 가격에 가장 큰 비중을 두고, 과거로 갈수록 비중을 선형적으로 줄여가는 방식입니다. 이는 시장 변화에 대해 SMA보다 빠르지만 EMA보다는 약간 더 안정적인 움직임을 보여줍니다.</p>
        <h3>2. 활용 및 해석</h3>
        <p>급격한 가격 변동 시 WMA는 SMA보다 민감하게 방향을 틀기 때문에, 추세의 초기 반전을 잡아내기에 유리합니다. 주로 단기 매매에서 가격의 세부적인 굴곡을 확인하고 싶을 때 사용됩니다.</p>
        <h3>3. 전략 가이드</h3>
        <p>가격이 WMA를 상향 돌파하며 기울기가 위로 꺾일 때를 매집 구간으로 잡습니다. 기울기 자체가 추세의 강도를 의미하므로, 평평해지는 시점이 오면 수익 실현을 고려해야 합니다.</p>
      `
    },
    en: {
      name: 'WMA (Weighted Moving Average)',
      title: 'WMA: Linear Weighting for Technical Precision',
      description: 'Assigns decreasing importance to older data, striking a balance between SMA and EMA.',
      content: `
        <h3>1. Overview</h3>
        <p>The Weighted Moving Average (WMA) assigns a specific weight to each price point, with the highest weight given to the most recent data. The weights decrease linearly as we go back in time.</p>
        <h3>2. Usage & Insight</h3>
        <p>WMA reacts more sensitively than SMA, making it ideal for identifying early-stage trend shifts. It is particularly useful for scalpers who need a smoothed line that doesn't ignore the importance of recent volatility.</p>
        <h3>3. Strategy Implementation</h3>
        <p>Watch for the WMA slope. A steep upward slope confirms strong buying pressure. Use the crossover between price and WMA as your primary entry signal in momentum trading.</p>
      `
    }
  },
  {
    id: 'vwma',
    category: 'overlay',
    ko: {
      name: 'VWMA (거래량 가중 이동 평균)',
      title: 'VWMA: 진짜 돈이 실린 추세를 포착하는 법',
      description: '가격과 거래량을 결합하여, 실질적인 세력의 개입 여부를 판단하는 지표입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>VWMA는 단순히 가격만 평균 내는 것이 아니라, 거래량이 많이 터진 가격대에 더 큰 가중치를 둡니다. "거래량은 속이기 힘들다"는 격언을 차트에 선으로 구현한 것입니다.</p>
        <h3>2. 해석 및 사용법</h3>
        <ul>
          <li><strong>신뢰도 확인:</strong> 가격은 오르는데 VWMA가 SMA 아래에 머문다면 '거래량이 실리지 않은 불안한 상승'으로 해석합니다.</li>
          <li><strong>추세 확증:</strong> 가격 상승과 함께 VWMA가 급격히 따라 올라오면 이는 기관이나 큰 자금이 투입된 '진성 추세'로 봅니다.</li>
        </ul>
        <h3>3. 추천 전략</h3>
        <p>SMA(단순)와 VWMA(거래량 가중)를 동시에 띄워보세요. 상승장에서 VWMA가 SMA 위에 위치한다면 이는 강력한 홀딩 신호입니다.</p>
      `
    },
    en: {
      name: 'VWMA (Volume Weighted Moving Average)',
      title: 'VWMA: Validating Trends with Real Money Flow',
      description: 'Integrates volume data into the moving average to separate noise from significant moves.',
      content: `
        <h3>1. Overview</h3>
        <p>VWMA gives more weight to prices that occur during periods of high trading volume. It filters out low-volume price movements, focusing on where the "smart money" is actually trading.</p>
        <h3>2. Interpretation</h3>
        <ul>
          <li><strong>Trend Validation:</strong> A price breakout accompanied by a rising VWMA confirms strong participant conviction.</li>
          <li><strong>Volume Gap:</strong> If price moves away from VWMA on low volume, a reversal or consolidation is highly likely.</li>
        </ul>
        <h3>3. Trading Guide</h3>
        <p>Compare VWMA with a standard SMA of the same length. When VWMA stays above SMA during an uptrend, it indicates that volume is supporting the price increase—a highly bullish sign.</p>
      `
    }
  },
  {
    id: 'hma',
    category: 'overlay',
    ko: {
      name: 'HMA (헐 이동 평균)',
      title: 'HMA: 지연 제거와 부드러움의 최정점',
      description: '앨런 헐이 개발한 지표로, 지연(Lag)을 획기적으로 줄이면서도 시각적 곡선이 매우 매끄럽습니다.',
      content: `
        <h3>1. 개요</h3>
        <p>이동평균의 가장 큰 단점은 '지연'입니다. HMA는 가중 이동 평균(WMA)을 중첩해서 계산하여 응답 속도를 극대화했습니다. 시각적으로는 매우 부드럽지만 반응은 어떤 지표보다 빠릅니다.</p>
        <h3>2. 핵심 활용처</h3>
        <p>HMA의 가장 큰 특징은 '색상의 변화'나 '기울기의 전환'이 매우 명확하다는 것입니다. 주로 추세 반전의 꼭대기와 바닥을 매끄럽게 포착하고 싶을 때 사용합니다.</p>
        <h3>3. 주의사항</h3>
        <p>너무 빠르기 때문에 추세 초입에서는 이득이지만, 횡보장에서는 너무 자주 꺾여 잦은 손절을 유발할 수 있습니다. 필터링 지표(ADX 등)와 결합이 필수적입니다.</p>
      `
    },
    en: {
      name: 'HMA (Hull Moving Average)',
      title: 'HMA: The Pinnacle of Speed and Visual Smoothness',
      description: 'Developed by Alan Hull to solve the lag problem without creating a jagged, unreadable line.',
      content: `
        <h3>1. Overview</h3>
        <p>The Hull Moving Average (HMA) combines weighted moving averages in a unique formula to virtually eliminate lag while providing a silky-smooth curve on the chart.</p>
        <h3>2. Best Uses</h3>
        <p>Because it follows price action so closely, it’s an excellent tool for trend-following entries. Traders often look for the "inflection point" where the curve changes direction as an early exit or entry signal.</p>
        <h3>3. Pros & Cons</h3>
        <p><strong>Pros:</strong> Extremely fast and visually pleasing.<br><strong>Cons:</strong> Can be too sensitive in non-trending markets. Should be used as a directional bias tool rather than a standalone entry signal.</p>
      `
    }
  },
  {
    id: 'dema',
    category: 'overlay',
    ko: {
      name: 'DEMA (이중 지수 이동 평균)',
      title: 'DEMA: 극단적인 반응성을 원하는 스캘퍼를 위한 도구',
      description: '두 개의 EMA를 결합하여 지연 시간을 대폭 줄인 이동평균입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>이중 지수 이동 평균(DEMA)은 단순히 두 번 평균을 낸 것이 아니라, EMA 사이의 차이값을 원래 EMA에 더해 지연(Lag)을 수학적으로 상쇄시킨 지표입니다. 패트릭 멀로이가 개발한 이 지표는 이동평균의 매끄러움과 실시간 가격의 속도를 동시에 잡았습니다.</p>
        <h3>2. 기술적 원리</h3>
        <p>수식: DEMA = 2 * EMA - EMA(EMA). 이 공식을 통해 과거 데이터의 가중치를 줄이고 최근 변동에 대한 반응을 퀀텀 점프 수준으로 끌어올립니다.</p>
        <h3>3. 해석 및 전략</h3>
        <ul>
          <li><strong>추세 포착:</strong> 일반 EMA보다 훨씬 빠르게 캔들에 밀착하므로, 추세의 초기 반전을 잡아내는 데 최적화되어 있습니다.</li>
          <li><strong>장기 이동평균과의 결합:</strong> 단기 DEMA가 장기 SMA를 뚫고 올라갈 때 매우 신뢰도 높은 추세 진입 신호가 됩니다.</li>
        </ul>
        <h3>4. 장점 및 주의사항</h3>
        <p><strong>장점:</strong> 반응 속도가 어떤 이동평균보다 빠릅니다.<br><strong>주의:</strong> 변동성이 심한 횡보장에서는 가짜 신호(Noise)가 많아질 수 있으므로 반드시 거래량 지표와 함께 사용하십시오.</p>
      `
    },
    en: {
      name: 'DEMA (Double Exponential Moving Average)',
      title: 'DEMA: Engineered for Ultra-Low Lag Performance',
      description: 'A sophisticated combination of two EMAs designed to negate the lag inherent in standard calculations.',
      content: `
        <h3>1. Overview</h3>
        <p>Double Exponential Moving Average (DEMA) is not just a double average; it’s a calculation that offsets the lag of a single EMA by factoring in the difference between it and a double-smoothed EMA. Developed by Patrick Mulloy, it offers the smoothness of an average with the speed of real-time action.</p>
        <h3>2. Technical Logic</h3>
        <p>Formula: DEMA = 2 * EMA - EMA(EMA). By adding the difference back to the original EMA, it mathematically "erases" the time delay that usually haunts moving averages.</p>
        <h3>3. Interpretation & Strategy</h3>
        <ul>
          <li><strong>Signal Speed:</strong> Excellent for scalpers and day traders who need to react to micro-trend shifts before the rest of the market.</li>
          <li><strong>Trend Confirmation:</strong> Use a DEMA cross as a fast-entry trigger while observing a slower SMA for overall market bias.</li>
        </ul>
        <h3>4. Pros & Precautions</h3>
        <p><strong>Pros:</strong> Superior responsiveness with a smooth curve.<br><strong>Precautions:</strong> Highly sensitive to market noise during consolidation. Best used in trending markets with a secondary filter.</p>
      `
    }
  },
  {
    id: 'tema',
    category: 'overlay',
    ko: {
      name: 'TEMA (삼중 지수 이동 평균)',
      title: 'TEMA: 가장 정교하게 설계된 반응형 지표',
      description: 'DEMA보다 한 단계 더 나아가 세 겹의 EMA 필터를 사용하는 초강력 이동평균입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>삼중 지수 이동 평균(TEMA)은 세 개의 EMA를 결합하여 지연 시간을 0에 가깝게 수렴시키려 노력하는 지표입니다. 현대적인 알고리즘 매매와 고빈도 매매 환경에서 필수적인 도구로 꼽힙니다.</p>
        <h3>2. 해석 방법</h3>
        <p>가격의 미세한 굴곡을 그대로 반영하기 때문에, TEMA의 기울기가 변하는 시점이 곧 잠재적인 반전 포인트입니다. 일반적인 20일 이평선이 가지는 둔감함을 완전히 탈피하고 싶을 때 사용합니다.</p>
        <h3>3. 실전 전략</h3>
        <p>TEMA가 가격 위아래로 빈번하게 움직이는 것을 방어하기 위해 '기울기 돌파' 전략을 사용하세요. 선의 각도가 30도 이상 가팔라질 때만 추세로 인정하는 방식이 유효합니다.</p>
      `
    },
    en: {
      name: 'TEMA (Triple Exponential Moving Average)',
      title: 'TEMA: Precision Engineering for Trend Tracking',
      description: 'Utilizes three layers of EMA smoothing to provide an even faster response than DEMA.',
      content: `
        <h3>1. Overview</h3>
        <p>Triple Exponential Moving Average (TEMA) uses a triple-weighted EMA formula to further reduce the lag found in DEMA. It’s the ultimate choice for traders who demand absolute precision and real-time responsiveness to price momentum.</p>
        <h3>2. Interpretation</h3>
        <p>TEMA stays glued to the price action. Because of its extreme speed, the slope of the TEMA line itself becomes a powerful visual indicator of momentum exhaustion. If TEMA flattens out, the current move is likely over.</p>
        <h3>3. Strategy Implementation</h3>
        <p>Use TEMA as a scalp entry tool. Enter when TEMA crosses price while the overall market trend (viewed on a higher timeframe) is in alignment. It helps you find the "sweet spot" of the momentum wave.</p>
      `
    }
  },
  {
    id: 'alma',
    category: 'overlay',
    ko: {
      name: 'ALMA (아르노 르구 이동 평균)',
      title: 'ALMA: 자연스러운 시세 흐름의 통계적 필터',
      description: '가우시안 분포를 적용하여 지연과 매끄러움의 "황금비"를 찾은 지표입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>아르노 르구(Arnaud Legoux)와 디미트리 루스(Dimitri Loussaert)가 개발한 ALMA는 이동평균의 고질적 문제인 '지연'과 '오버슈팅'을 가우시안 필터(정규 분포)를 통해 해결합니다.</p>
        <h3>2. 해석 및 사용법</h3>
        <p>ALMA는 가격이 평균에서 이격되는 방식이 통계적으로 유의미한지를 판단합니다. 다른 지표들보다 시각적으로 매우 부드러워 실제 지지와 저항 구간을 찾는 데 탁월합니다.</p>
        <h3>3. 전문가 활용 팁</h3>
        <p>ALMA의 매끄러운 곡선은 추세 추종 시 '스탑로스'의 기준선으로 활용하기 좋습니다. 시세가 ALMA를 하향 돌파하기 전까지는 추세가 죽지 않았다고 판단하는 홀딩 전략에 최적입니다.</p>
      `
    },
    en: {
      name: 'ALMA (Arnaud Legoux Moving Average)',
      title: 'ALMA: Applying Gaussian Logic to Market Trends',
      description: 'Uses a Gaussian distribution to find the perfect offset between smoothness and responsiveness.',
      content: `
        <h3>1. Overview</h3>
        <p>The Arnaud Legoux Moving Average (ALMA) is a modern technical indicator that aims to resolve the classic dilemma between lag and responsiveness by using a Gaussian distribution for its weighting.</p>
        <h3>2. Interpretation</h3>
        <p>ALMA provides a remarkably clean visual representation of the trend. It ignores institutional spikes and retail noise, showing you where the real "value" area is forming.</p>
        <h3>3. Professional Insight</h3>
        <p>Because ALMA is less prone to "flipping" than other fast averages, it makes an excellent trailing stop-loss anchor. Keep your position as long as ALMA maintains its slope without being breached by a closing candle.</p>
      `
    }
  },
  {
    id: 'bb',
    category: 'overlay',
    ko: {
      name: 'Bollinger Bands (볼린저 밴드)',
      title: '볼린저 밴드: 변동성과 통계적 확률의 승부',
      description: '가격의 95%가 머무는 통계적 채널을 통해 돌파와 회귀를 동시에 분석합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>존 볼린저가 개발한 이 지표는 20일 이동평균선을 중심으로 위아래 2표준편차 값을 선으로 연결합니다. 시장의 변동성이 클 때는 밴드가 넓어지고, 작을 때는 좁아지는 특징이 있습니다.</p>
        <h3>2. 핵심 해석</h3>
        <ul>
          <li><strong>스퀴즈(Squeeze):</strong> 밴드가 평소보다 좁아지면 조만간 위나 아래로 엄청난 폭발이 일어날 징조입니다.</li>
          <li><strong>태그(Tag):</strong> 상단 밴드 터치는 일시적인 과열, 하단은 과도한 공포를 의미합니다.</li>
        </ul>
        <h3>3. 실전 전략</h3>
        <p>밴드 상단을 타고 올라가는 '밴드 워킹'이 발생하면 추세 추종을, 밴드 밖으로 튀어나갔다 안으로 급히 돌아오면 '역추세 매매'를 고려하세요.</p>
      `
    },
    en: {
      name: 'Bollinger Bands (BB)',
      title: 'Bollinger Bands: Mastering Volatility & Probability',
      description: 'A volatility-based channel where 95% of price action technically resides.',
      content: `
        <h3>1. Overview</h3>
        <p>Developed by John Bollinger, this indicator uses a standard deviation calculation to plot upper and lower bands around a central SMA. It provides a visual map of high and low volatility.</p>
        <h3>2. Core Interpretation</h3>
        <ul>
          <li><strong>The Squeeze:</strong> Narrow bands indicate low volatility, often a precursor to a massive directional breakout.</li>
          <li><strong>Overexpansion:</strong> When price hits the bands, it indicates an extreme relative to the mean, signaling potential reversal or a strong trend continuation.</li>
        </ul>
        <h3>3. Trading Strategy</h3>
        <p>Look for "W-Bottoms" or "M-Tops" formed near the bands for high-confidence reversal trades. Alternatively, use them to trail profits during a strong "Band Walk."</p>
      `
    }
  },
  {
    id: 'donchian',
    category: 'overlay',
    ko: {
      name: 'Donchian Channels (돈치안 채널)',
      title: '돈치안 채널: 박스권을 부수는 돌파 매매의 전설',
      description: '설정 기간 내의 최고점과 최저점을 연결하여 "진짜 돌파"를 잡아내는 도구입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>리처드 돈치안이 개발한 이 채널은 '터틀 트레이딩'의 기반이 된 역사적인 지표입니다. 단순히 고점과 저점을 선으로 연결하여 현재 시세가 박스권 안에 있는지, 아니면 새로운 추세를 여는 돌파인지를 한눈에 보여줍니다.</p>
        <h3>2. 기술적 원리</h3>
        <p>상단선은 N일간의 최고가, 하단선은 N일간의 최저가입니다. 중간선은 이 둘의 평균값으로 중심 가격을 나타냅니다.</p>
        <h3>3. 실전 매매 전략</h3>
        <ul>
          <li><strong>돌파 진입:</strong> 가격이 상단선을 뚫고 새로운 최고가를 쓰기 시작하면 추격 매집을 시작합니다.</li>
          <li><strong>추세 추종:</strong> 추세가 진행되는 동안 가격은 상단선을 계속 밀어 올립니다. 이때 중간선이나 하단선을 이탈하기 전까지는 포지션을 유지(Holding)합니다.</li>
        </ul>
        <h3>4. 해석 노하우</h3>
        <p>채널의 너비가 평평하고 좁게 유지되다 갑자기 상단선이 위로 꺾일 때가 가장 강력한 '빅 무브'의 시작점입니다.</p>
      `
    },
    en: {
      name: 'Donchian Channels',
      title: 'Donchian Channels: The Legend of Breakout Trading',
      description: 'Highlights the highest high and lowest low over a period to map trading ranges.',
      content: `
        <h3>1. Overview</h3>
        <p>The Donchian Channel, created by Richard Donchian, is a legendary tool used by the famous "Turtle Traders." It provides an objective look at the trading range and identifies when a breakout is occurring.</p>
        <h3>2. Technical Logic</h3>
        <p>Upper line = N-period high. Lower line = N-period low. Middle line = Average of both. It creates a dynamic box that shifts only when new price extremes are made.</p>
        <h3>3. Trading Strategies</h3>
        <ul>
          <li><strong>Pure Breakout:</strong> Buy when price breaches the upper channel; Sell when it breaches the lower.</li>
          <li><strong>Risk Management:</strong> Use the median (mid-line) as a trailing stop to lock in profits without being shaken out by minor volatility.</li>
        </ul>
        <h3>4. Pro Interpretation</h3>
        <p>Flat channels indicate consolidation. When the channel starts "expanding" due to an upper breach, it marks the psychological shift from a range-bound market to a high-conviction trend.</p>
      `
    }
  },
  {
    id: 'keltner',
    category: 'overlay',
    ko: {
      name: 'Keltner Channels (켈트너 채널)',
      title: '켈트너 채널: ATR을 활용한 유동적 지지/저항 분석',
      description: '단순한 편차가 아닌 ATR(실제 변동폭)을 채널의 비중으로 사용하는 고급 도구입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>켈트너 채널은 이동평균선과 ATR(평균 실질 변동폭)을 결합하여 지지와 저항 구간을 그립니다. 볼린저 밴드보다 부드러우며 추세의 지속 여부를 판단하는 데 더 탁월한 신뢰도를 보입니다.</p>
        <h3>2. 핵심 활용법</h3>
        <p>가격이 중단선인 EMA 위에 머물고 상단 채널 근처에서 움직인다면 이는 '강력한 상승 추세'입니다. 반대로 하단 채널을 뚫는 것은 매도 압력이 임계치를 넘었음을 의미합니다.</p>
        <h3>3. 볼린저 밴드와의 차이</h3>
        <p>볼린저 밴드는 통계적 표준편차를 사용하여 급격하게 팽창/수축하지만, 켈트너 채널은 ATR을 사용하므로 훨씬 안정적이고 일관된 채널 폭을 유지합니다. 잦은 가격 노이즈를 피하고 싶은 트레이더에게 적합합니다.</p>
      `
    },
    en: {
      name: 'Keltner Channels',
      title: 'Keltner Channels: Volatility-Adjusted Trend Zones',
      description: 'Uses Average True Range (ATR) to define channel width around an EMA.',
      content: `
        <h3>1. Overview</h3>
        <p>Keltner Channels combine an Exponential Moving Average (EMA) with Average True Range (ATR) to create more stable envelopes. Unlike Bollinger Bands, which expand based on volatility spikes, Keltner remains smoother and more trend-consistent.</p>
        <h3>2. Core Usage</h3>
        <p>When price remains above the center line and frequently tags the upper band, you are in a high-conviction uptrend. Breaching the lower band signals a significant breakdown in support.</p>
        <h3>3. Trading Logic</h3>
        <p>Enter on a pullback to the center line (EMA) during a confirmed trend. Keltner Channels help identify "overextended" markets without the noise associated with statistical SD bands.</p>
      `
    }
  },
  {
    id: 'supertrend',
    category: 'overlay',
    ko: {
      name: 'Supertrend (슈퍼트렌드)',
      title: '슈퍼트렌드: 트레이더의 눈을 정화해주는 상승/하락 감지기',
      description: '색상과 선을 통해 현재 내가 매수해야 할지 매도해야 할지를 즉각적으로 보여줍니다.',
      content: `
        <h3>1. 개요</h3>
        <p>슈퍼트렌드는 ATR(평균 실질 변동폭)과 배수(Multiplier)를 사용하여 현재 가격이 추세 우위에 있는지 알려줍니다. 복잡한 지표 해석을 싫어하는 트레이더들에게 '가장 직관적인 지표'로 사랑받습니다.</p>
        <h3>2. 원리 및 해석</h3>
        <p>가격이 슈퍼트렌드 선 위에 있으면 초록색(상승), 아래에 있으면 빨간색(하락)으로 표시됩니다. 선이 꺾이는 지점을 '추세 전환점'으로 봅니다.</p>
        <h3>3. 실전 전략 가이드</h3>
        <ul>
          <li><strong>추세 타기:</strong> 초록색 선이 유지되는 동안에는 성급하게 매도하지 말고 홀딩하십시오.</li>
          <li><strong>손절가 설정:</strong> 슈퍼트렌드 선 자체를 동적 손절가(Trailing Stop)로 활용하세요. 가격이 선을 건드리면 즉시 포지션을 정리하는 기계적 매매가 가능합니다.</li>
        </ul>
        <h3>4. 주의점</h3>
        <p>강한 추세장에서는 무적에 가깝지만, 가격이 위아래로 흔들리는 횡보장에서는 잦은 색상 변화로 손실을 줄 수 있습니다. 반드시 거래량이나 상위 시간대 차트와 병행하십시오.</p>
      `
    },
    en: {
      name: 'Supertrend',
      title: 'Supertrend: The Ultimate Clarity for Trend Direction',
      description: 'An easy-to-read indicator that plots buy and sell zones based on volatility levels.',
      content: `
        <h3>1. Overview</h3>
        <p>The Supertrend is a volatility-based trend follower that uses ATR and a multiplier to draw a line above or below the price. It’s widely regarded as the most direct "buy/sell" visual aid in trading.</p>
        <h3>2. Logic & Interpretation</h3>
        <p>Green line = Bullish trend. Red line = Bearish trend. The flip between colors signals a potential entry point or a mandatory exit signal.</p>
        <h3>3. Strategy Playbook</h3>
        <ul>
          <li><strong>Trend Riding:</strong> Stay in the trade as long as the Supertrend remains green. Do not try to pick the top; let the indicator tell you when it’s over.</li>
          <li><strong>Trailing Stop:</strong> The line itself is your stop-loss. As price moves up, the green line moves with it, protecting your profits automatically.</li>
        </ul>
        <h3>4. Limitations</h3>
        <p>Like most trend-following tools, Supertrend is vulnerable to market "choppiness". In range-bound markets, it produces frequent "flips." Use it alongside ADX to ensure you are only trading during periods of high trend strength.</p>
      `
    }
  },
  {
    id: 'ichimoku',
    category: 'overlay',
    ko: {
      name: 'Ichimoku Cloud (일목균형표)',
      title: '일목균형표: 동양 기술 분석의 정수, 시간과 흐름의 철학',
      description: '과거, 현재, 미래의 지지와 저항을 "구름대"라는 하나의 그림으로 통합한 강력한 시스템입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>전환선, 기준선, 선행스팬, 후행스팬으로 구성된 이 종합 지표는 차트 한 장으로 모든 정보를 알게 해줍니다.</p>
        <h3>2. 핵심 해석</h3>
        <ul>
          <li><strong>양구름/의구름:</strong> 구름 위는 매수 우위, 아래는 매도 우위입니다. 구름의 두께는 지지의 강도를 의미합니다.</li>
          <li><strong>전환선/기준선 교차:</strong> 두 선의 골든크로스는 매우 신뢰도 높은 추세 전환 신호입니다.</li>
        </ul>
        <h3>3. 사용 팁</h3>
        <p>가격이 구름대에 갇혀 있을 때는 '혼조세'이므로 매매를 쉬는 것이 계좌를 지키는 비결입니다.</p>
      `
    },
    en: {
      name: 'Ichimoku Cloud',
      title: 'Ichimoku Cloud: The Holistic Map of Market Cycles',
      description: 'A complete system providing equilibrium and trend signals in a single visual "Cloud".',
      content: `
        <h3>1. Overview</h3>
        <p>Consists of five different components (Tenkan, Kijun, Senkou A/B, Chikou) that project current price action into future support and resistance zones.</p>
        <h3>2. Core Insight</h3>
        <ul>
          <li><strong>The Cloud (Kumo):</strong> Acts as a magnetic zone and a wall. Thick clouds represent strong support/resistance; thin clouds suggest high vulnerability to breakouts.</li>
          <li><strong>TK Cross:</strong> The intersection of the Tenkan and Kijun lines is one of the most respected momentum signals in technical analysis.</li>
        </ul>
        <h3>3. Strategy Tips</h3>
        <p>Focus on trades where the price, clouds, and lagging spans are all aligned in the same direction—this indicates the highest probability setups.</p>
      `
    }
  },
  {
    id: 'psar',
    category: 'overlay',
    ko: {
      name: 'Parabolic SAR (파라볼릭 SAR)',
      title: '파라볼릭 SAR: 추세의 중단과 반전의 순간',
      description: '가격을 따라다니는 점(Stop and Reverse)을 통해 추세의 끝을 예고합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>Parabolic SAR는 "멈추고 반전한다(Stop And Reverse)"의 약자로, 추세 유지 기간 동안 가격을 따라 점을 그립니다. 추세가 강력할수록 점의 간격이 넓어지며 가격을 밀어붙이는 가속력을 보여줍니다.</p>
        <h3>2. 해석 및 전략</h3>
        <ul>
          <li><strong>상태 판단:</strong> 점이 캔들 아래에 있으면 매수 강세, 위에 있으면 매도 강세입니다.</li>
          <li><strong>최적의 퇴장 도구:</strong> 진입 시점보다는 '언제 팔아야 할지'를 알려주는 데 특화되어 있습니다. 추세가 점을 건드리는 순간이 바로 익절 타이밍입니다.</li>
        </ul>
        <h3>3. 전문가의 조언</h3>
        <p>이 지표는 시간과 가격을 동시에 고려합니다. 가격이 옆으로 횡보하면 점이 저항선처럼 다가와 결국 추세 반전 신호를 강제로 만들어냅니다. 따라서 '급격한 추세장'에서만 활용하는 것이 승률을 높이는 지름길입니다.</p>
      `
    },
    en: {
      name: 'Parabolic SAR',
      title: 'Parabolic SAR: Timing the Trend Flip',
      description: 'A time-and-price dependent indicator that marks high-probability exit points.',
      content: `
        <h3>1. Overview</h3>
        <p>The "Stop and Reverse" (SAR) indicator is designed to map the boundaries of a trend. Dots accelerate toward the price, and the moment price touches a dot, the trend is considered officially over.</p>
        <h3>2. Practical Strategy</h3>
        <p>Use SAR primarily as a trailing stop-loss. It forces you to lock in gains by keeping your exit point just behind the action. In a vertical bull run, it’s the best way to squeeze maximum profit without guessing the top.</p>
        <h3>3. Critical Warning</h3>
        <p>In a choppy, sideways market, SAR will "whipsaw" frequently, leading to small losses. Use it ONLY when the ADX indicates a strong trend is underway.</p>
      `
    }
  },
  {
    id: 'vwap',
    category: 'overlay',
    ko: {
      name: 'VWAP (거래량 가중 평균 가격)',
      title: 'VWAP: 일일 매매의 절대적 벤치마크',
      description: '당일 거래된 모든 물량의 평균 단가를 계산하여 "진짜 가치"를 보여줍니다.',
      content: `
        <h3>1. 개요</h3>
        <p>데이트레이더에게 VWAP는 종교와 같습니다. 시간 흐름보다 '실제 거래된 대금'에 집중하여 오늘 시장의 균형 가격이 어디인지를 보여줍니다.</p>
        <h3>2. 핵심 활용 비법</h3>
        <ul>
          <li><strong>가치 분석:</strong> 가격이 VWAP 위에 있다면 현재 시장은 '과대평가(Premium)', 아래에 있으면 '저평가(Discount)' 상태입니다.</li>
          <li><strong>기관의 시각:</strong> 대형 기관들은 대량 주문을 넣을 때 VWAP 이하 가격에서 체결시키려 노력합니다. 따라서 가격이 VWAP로 돌아올 때 지지나 저항이 강력하게 일어납니다.</li>
        </ul>
        <h3>3. 전략 예시</h3>
        <p>장 초반 가격이 VWAP를 강하게 돌파하고 안착할 때 '롱(Long)' 포지션에 진입하는 것이 전형적인 성공 모델입니다.</p>
      `
    },
    en: {
      name: 'VWAP (Volume Weighted Average Price)',
      title: 'VWAP: The True Value Benchmark for Intraday Traders',
      description: 'Calculates the real average price paid by all market participants throughout the day.',
      content: `
        <h3>1. Overview</h3>
        <p>VWAP is the single most important tool for intraday session analysis. Unlike simple averages, it calculates total dollars traded divided by total shares/contracts, revealing the true balance of power.</p>
        <h3>2. Institutional Context</h3>
        <p>Smart money uses VWAP as a benchmark for execution. If they buy below VWAP, they are considered successful. This makes the VWAP line a magnetic zone of high-volume support and resistance.</p>
        <h3>3. Trading Tactics</h3>
        <p>Watch for the "VWAP Rejection." If price attempts to cross the VWAP and fails on high volume, it confirms that the dominant trend is still firmly in control. Use it as a pivot for your daily trading bias.</p>
      `
    }
  },
  {
    id: 'pivot',
    category: 'overlay',
    ko: {
      name: 'Pivot Points (피봇 포인트)',
      title: '피봇 포인트: 전통적인 지지와 저항의 지도',
      description: '전일 데이터를 바탕으로 오늘의 심리적 마지노선을 그어줍니다.',
      content: `
        <h3>1. 개요</h3>
        <p>피봇 포인트는 전일의 고가, 저가, 종가를 산술 평균하여 구하는 '수학적 지지/저항선'입니다. 차트 분석이 불가능했던 시절부터 플로어 트레이더들이 사용해온 정통 방식입니다.</p>
        <h3>2. 지지/저항 구조</h3>
        <p>중심 피봇(P)을 기준으로 상단에는 저항선(R1, R2, R3), 하단에는 지지선(S1, S2, S3)이 형성됩니다.</p>
        <h3>3. 실전 활용</h3>
        <ul>
          <li><strong>오늘의 온도 측정:</strong> 가격이 P선 위에서 시작하면 오늘은 상승 우위 장세로 봅니다.</li>
          <li><strong>목표가 설정:</strong> 매수 진입 시 R1이나 R2를 1차, 2차 익절 목표가로 설정하는 것이 매우 과학적인 방법입니다.</li>
        </ul>
      `
    },
    en: {
      name: 'Pivot Points',
      title: 'Pivot Points: The Mathematical Map of S/R',
      description: 'Derives potential support and resistance zones based on previous period performance.',
      content: `
        <h3>1. Overview</h3>
        <p>Pivot Points are static levels of significance calculated using previous high, low, and close data. They provide a predictable framework for price movement throughout the day.</p>
        <h3>2. Interpretation</h3>
        <p>The Central Pivot (P) is the main balance line. Resistance levels (R1, R2, R3) act as ceilings, while Support levels (S1, S2, S3) act as floors.</p>
        <h3>3. Strategy Logic</h3>
        <p>Price breaking R1 with heavy volume suggests a run toward R2. Conversely, price struggling at the Pivot early in the session indicates a bearish bias. These levels are self-fulfilling prophecies due to their widespread use by institutional algorithms.</p>
      `
    }
  },
  {
    id: 'mcginley',
    category: 'overlay',
    ko: {
      name: 'McGinley Dynamic',
      title: '맥긴리 다이나믹: 시장의 속도에 적응하는 평균선',
      description: '시장이 너무 빠르면 같이 빨라지고, 느려지면 같이 느려지는 지능형 지표입니다.',
      content: `<p>존 맥긴리가 개발한 이 지표는 전통적인 이동평균이 가격을 제대로 못 따라가는 문제를 해결하기 위한 특수 수식을 사용합니다. 변동성이 급증할 때 지연 시간을 스스로 단축하므로, 가격과의 괴리감을 최소화합니다. '스무딩(Smoothing)'과 '반응성(Responsiveness)' 두 마리 토끼를 다 잡은 수작입니다.</p>`
    },
    en: {
      name: 'McGinley Dynamic',
      title: 'McGinley Dynamic: Adaptive Averaging for Real-World Markets',
      description: 'A dynamic average that automatically adjusts its speed based on market volatility.',
      content: `<p>Standard moving averages fail when price speed accelerates. The McGinley Dynamic formula incorporates an adaptive filter that speeds up during volatility and slows down during calm periods. The result is a line that "hugs" the price more accurately than any SMA or EMA.</p>`
    }
  },
  {
    id: 'fractals',
    category: 'overlay',
    ko: {
      name: 'Williams Fractals (프랙탈)',
      title: '윌리엄스 프랙탈: 반복되는 파동의 뼈대 탐지',
      description: '캔들 패턴 속에서 가격의 상단과 하단이 고정되는 지점을 포착합니다.',
      content: `<p>빌 윌리엄스가 정립한 이 기법은 5개의 연속된 캔들 중 가운데가 가장 높거나 낮을 때 생성됩니다. 프랙탈이 생성되었다는 것은 '단기 변곡점'이 형성되었음을 의미합니다. 여러 프랙탈 고점들을 선으로 이으면 강력한 추세 저항선이 완성됩니다.</p>`
    },
    en: {
      name: 'Williams Fractals',
      title: 'Williams Fractals: Identifying the Skeletal Structure of Price Action',
      description: 'Markers that highlight potential pivot points using a 5-candle pattern logic.',
      content: `<p>Fractals identify the peak or trough of a specific market mini-cycle. A bullish fractal occurs when there is a low preceded and followed by two higher lows. They are essential for recognizing market structure and identifying target zones for Alligator trading strategies.</p>`
    }
  },
  {
    id: 'zigzag',
    category: 'overlay',
    ko: {
      name: 'Zig Zag High Low',
      title: '지그재그: 소음을 제거한 순수한 파동의 흐름',
      description: '잔파동을 모두 무시하고 굵직한 추세의 변동만 연결하여 보여줍니다.',
      content: `<p>지그재그 지표는 시각적 가독성을 높이기 위한 최고의 필터입니다. 가격이 일정 비율(예: 5%) 이상 변동할 때만 선을 긋습니다. 엘리어트 파동 이론이나 ABCD 패턴을 분석할 때 미세한 노이즈에 휘둘리지 않고 파동의 진짜 끝과 시작을 찾는 데 사용됩니다.</p>`
    },
    en: {
      name: 'Zig Zag',
      title: 'Zig Zag: Purifying Market Structure by Removing Noise',
      description: 'Connects the major peaks and troughs of price while ignoring minor volatility.',
      content: `<p>Zig Zag is not a predictive tool but a retrospective one. It focuses only on significant price moves, making the macro-market structure visible. It’s the perfect companion for wave counters and those hunting for large chart patterns like Head and Shoulders.</p>`
    }
  },

  // --- OSCILLATORS (21) ---
  {
    id: 'rsi',
    category: 'oscillator',
    ko: {
      name: 'RSI (상대 강도 지수)',
      title: 'RSI: 정통 오실레이터의 교과서',
      description: '상승폭과 하락폭을 비교하여 현재 시장의 과열 여부를 판단하는 필수 지표입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>RSI는 웰레스 와일더가 개발한 지표로, 일정 기간 동안 주가가 전일 가격에 비해 상승한 변화량과 하락한 변화량의 평균값을 구하여, 상승한 변화량이 크면 과매수로, 하락한 변화량이 크면 과매도로 판단하는 방식입니다.</p>
        <h3>2. 핵심 구간 해석</h3>
        <ul>
          <li><strong>70 이상 (과매수):</strong> 매수 세력이 지친 상태입니다. 가격 조정이 임박했을 확률이 높으므로 매수를 자제하고 매도 타이밍을 노려야 합니다.</li>
          <li><strong>30 이하 (과매도):</strong> 매도 세력이 극에 달해 추가 하락 여력이 부족합니다. 반등의 가능성이 매우 높으므로 분할 매수로 접근하기 좋습니다.</li>
        </ul>
        <h3>3. 실전 필승 전략: 다이버전스</h3>
        <p>가격은 고점을 갱신하며 계속 오르는데 RSI 지표는 고점을 낮추며 하락한다면, 이는 '상승 에너지의 고갈'을 의미합니다(하락 다이버전스). 이 신호는 단순 과매수 진입보다 훨씬 강력한 하락 반전 신호가 됩니다.</p>
      `
    },
    en: {
      name: 'RSI (Relative Strength Index)',
      title: 'RSI: The Gold Standard of Momentum',
      description: 'The industry standard for overbought and oversold analysis, comparing the magnitude of recent gains and losses.',
      content: `
        <h3>1. Overview</h3>
        <p>Developed by J. Welles Wilder, the Relative Strength Index (RSI) measures the speed and change of price movements. It operates on a scale of 0 to 100 and is the most widely used oscillator in the world.</p>
        <h3>2. Key Zones</h3>
        <ul>
          <li><strong>Overbought (>70):</strong> The asset may be overvalued and is a candidate for a pullback or trend reversal.</li>
          <li><strong>Oversold (<30):</strong> The asset may be undervalued, signaling a potential buying opportunity as sellers are exhausted.</li>
        </ul>
        <h3>3. The Power of Divergence</h3>
        <p>When price makes a new high but RSI fails to surpass its previous high, it creates a "Bearish Divergence." This is a leading indicator that the uptrend is losing steam, often preceding a significant correction.</p>
      `
    }
  },
  {
    id: 'macd',
    category: 'oscillator',
    ko: {
      name: 'MACD (이동평균 수렴확산 지수)',
      title: 'MACD: 추세의 방향과 에너지를 동시에 읽다',
      description: '가장 신뢰도 높은 두 이동평균선의 관계를 통해 중장기 추세의 변화를 포착합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>MACD는 단기 이동평균(12)과 장기 이동평균(26)의 차이를 이용해 추세(Trend)와 모멘텀(Momentum)을 동시에 파악하는 지표입니다. 여기에 시그널 선(9)을 더해 매매 타이밍을 정교하게 다듬었습니다.</p>
        <h3>2. 구성 요소 해석</h3>
        <ul>
          <li><strong>MACD선:</strong> 0선 위에 있으면 상승 추세, 아래에 있으면 하락 추세입니다.</li>
          <li><strong>시그널선 교차:</strong> MACD선이 시그널선을 위로 뚫으면 '골든크로스(매수)', 아래로 뚫으면 '데드크로스(매도)'입니다.</li>
          <li><strong>히스토그램:</strong> 두 선의 간격을 막대그래프로 표현한 것으로, 막대가 줄어들기 시작하면 추세의 힘이 약해지고 있다는 뜻입니다.</li>
        </ul>
        <h3>3. 트레이딩 팁</h3>
        <p>0선 아래 깊은 곳에서 발생하는 골든크로스는 바닥권 탈출 신호로 매우 신뢰도가 높습니다. 반대로 높은 곳에서의 데드크로스는 폭락의 전조일 수 있습니다.</p>
      `
    },
    en: {
      name: 'MACD (Moving Average Convergence Divergence)',
      title: 'MACD: The King of Trend Following',
      description: 'A trend-following momentum indicator that shows the relationship between two moving averages of a security’s price.',
      content: `
        <h3>1. Overview</h3>
        <p>MACD turns two trend-following indicators, moving averages, into a momentum oscillator by subtracting the longer moving average from the shorter one. It is unparalleled in identifying the start and end of trends.</p>
        <h3>2. How to Read</h3>
        <ul>
          <li><strong>Centerline Crossover:</strong> Crossing above zero is bullish; below zero is bearish.</li>
          <li><strong>Signal Line Crossover:</strong> When the MACD line crosses above the Signal line, it produces a buy signal. The reverse indicates a sell signal.</li>
          <li><strong>Histogram:</strong> Visualizes the distance between MACD and Signal. A shrinking histogram suggests momentum is fading.</li>
        </ul>
        <h3>3. Trading Tip</h3>
        <p>Watch for a "MACD Hook," where the signal line attempts to cross but bounces off instead. This often signals a continuation of the current trend with renewed vigor.</p>
      `
    }
  },
  {
    id: 'stoch',
    category: 'oscillator',
    ko: {
      name: 'Stochastic (스토캐스틱)',
      title: '스토캐스틱: 박스권 장세의 지배자',
      description: '현재 가격이 일정 기간의 가격 변동폭 중 어디에 위치하는지를 백분율로 나타냅니다.',
      content: `
        <h3>1. 개요</h3>
        <p>조지 레인이 개발한 스토캐스틱은 "상승장에서는 종가가 고가 근처에서 끝나고, 하락장에서는 저가 근처에서 끝난다"는 원리를 이용합니다. 추세가 없는 횡보장(Box Range)에서 타의 추종을 불허하는 정확도를 가집니다.</p>
        <h3>2. Fast vs Slow</h3>
        <p>기본 패스트 스토캐스틱은 너무 민감해서 노이즈가 많습니다. 따라서 이를 평활화(Smoothing)한 '슬로우 스토캐스틱(Slow Stochastic)'을 사용하는 것이 일반적이며, 신뢰도가 훨씬 높습니다.</p>
        <h3>3. 매매 전략</h3>
        <p>과매도 구간(20 이하)에서 %K선이 %D선을 상향 돌파할 때 매수하고, 과매수 구간(80 이상)에서 하향 돌파할 때 매도합니다. 횡보장에서는 이 규칙만 지켜도 훌륭한 수익을 낼 수 있습니다.</p>
      `
    },
    en: {
      name: 'Stochastic Oscillator',
      title: 'Stochastic: Master of the Range-Bound Market',
      description: 'Determines where the current price sits relative to its recent high-low range.',
      content: `
        <h3>1. Overview</h3>
        <p>Developed by George Lane, the Stochastic Oscillator is based on the observation that as prices increase, closing prices tend to accumulate continuously closer to the highs of the period. It excels in non-trending, chopping markets.</p>
        <h3>2. Fast vs. Slow</h3>
        <p>The raw "Fast" Stochastic is often too jagged. Traders prefer the "Slow" Stochastic, which applies a moving average to smooth the data, reducing false signals.</p>
        <h3>3. Trading Strategy</h3>
        <p>Look for entry signals when the %K line crosses above the %D line in the oversold zone (below 20). It’s a classic "buy low, sell high" tool perfect for sideways price action.</p>
      `
    }
  },
  {
    id: 'stoch_rsi',
    category: 'oscillator',
    ko: {
      name: 'Stochastic RSI',
      title: '스토캐스틱 RSI: 극강의 민감도와 속도',
      description: 'RSI 지표에 스토캐스틱 공식을 대입하여 속도를 극한으로 끌어올린 지표입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>일반 RSI가 30/70 구간에 도달하지 않고 중간에서 머무는 단점을 보완하기 위해 만들어졌습니다. "지표의 지표"라고 불리며, 가격이 아닌 RSI 값을 기준으로 스토캐스틱을 계산합니다.</p>
        <h3>2. 특징 및 활용</h3>
        <p>매우 민감하게 반응하여 과매수/과매도 구간을 자주 터치합니다. 따라서 짧은 주기의 스캘핑이나 데이트레이딩에서 진입 타점을 잡는 데 유용합니다.</p>
        <h3>3. 주의사항</h3>
        <p>신호가 너무 자주 발생하므로(Whipsaw), 반드시 추세 지표(이동평균선 등)가 가리키는 방향으로만 진입 신호를 채택하세요. 역추세 진입용으로 썼다간 잦은 손절을 부를 수 있습니다.</p>
      `
    },
    en: {
      name: 'Stochastic RSI',
      title: 'Stochastic RSI: High Velocity Precision',
      description: 'Applies Stochastic logic to the RSI indicator to create a highly sensitive oscillator.',
      content: `
        <h3>1. Overview</h3>
        <p>StochRSI measures the level of RSI relative to its high-low range over a set period. It is an "indicator of an indicator," designed to generate more frequent overbought/oversold signals than standard RSI.</p>
        <h3>2. Usage</h3>
        <p>Because it moves between 0 and 100 very rapidly, it is excellent for spotting short-term setups within a larger trend. Traders use it to "fine-tune" their entry point once a general bias is established.</p>
        <h3>3. Caution</h3>
        <p>High sensitivity comes with high noise. During strong trends, StochRSI can stay overbought for a long time. Use it strictly for entries on pullbacks rather than predicting tops or bottoms.</p>
      `
    }
  },
  {
    id: 'atr',
    category: 'oscillator',
    ko: {
      name: 'ATR (평균 실질 변동폭)',
      title: 'ATR: 리스크 관리의 핵심 척도',
      description: '시장의 방향이 아닌 "변동성의 크기"를 측정하여 손절과 익절 폭을 계산합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>J. Welles Wilder가 개발한 ATR(Average True Range)은 갭상승/갭하락까지 포함한 '진짜 가격 범위(True Range)'를 평균 낸 값입니다. 투기적 거품이 꼈는지, 시장이 침체기인지 알려줍니다.</p>
        <h3>2. 핵심 활용: 샹들리에 청산</h3>
        <p>ATR은 매매 진입 신호보다는 '자금 관리'에 쓰입니다. 예를 들어 "매수가에서 2 * ATR만큼 떨어지면 손절하겠다"는 식으로, 현재 시장의 변동성에 맞춰 유연한 손절 라인을 설정할 때 필수적입니다.</p>
        <h3>3. 해석</h3>
        <p>ATR 수치가 급격히 높아지면 바닥이나 천장일 확률이 높습니다. 패닉 셀링(투매)이 나올 때 ATR은 최고치를 찍습니다.</p>
      `
    },
    en: {
      name: 'ATR (Average True Range)',
      title: 'ATR: The Yardstick of Market Volatility',
      description: 'Measures the intensity of price movements, regardless of direction. Essential for position sizing.',
      content: `
        <h3>1. Overview</h3>
        <p>ATR doesn't tell you where the price is going, but how fast it's getting there. It accounts for gaps and limits moves to show the true volatility of an asset.</p>
        <h3>2. Best Use: Risk Management</h3>
        <p>Smart traders use ATR to set dynamic stop-losses (e.g., 2x ATR). This prevents getting stopped out by normal market noise while protecting you from abnormal moves.</p>
        <h3>3. Interpretation</h3>
        <p>Low ATR values indicate a consolidation phase, often preceding a breakout. High ATR values typically mark the climax of a trend or a panic event.</p>
      `
    }
  },
  {
    id: 'cci',
    category: 'oscillator',
    ko: {
      name: 'CCI (상품 채널 지수)',
      title: 'CCI: 추세의 시작과 끝을 탐지하다',
      description: '가격이 이동평균으로부터 얼마나 멀리 떨어져 있는지를 측정하여 통계적 과열을 진단합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>도널드 램버트가 상품(Commodity) 시장의 주기적 흐름을 파악하기 위해 개발했습니다. 현재 가격이 평균통계적 오차범위 내에 있는지, 아니면 이례적인 급등락인지 알려줍니다.</p>
        <h3>2. 해석 방법</h3>
        <ul>
          <li><strong>+100 상향 돌파:</strong> 강력한 상승 추세의 시작으로 봅니다. 매수 관점입니다.</li>
          <li><strong>-100 하향 돌파:</strong> 강력한 하락 추세의 시작입니다. 매도 혹은 숏 포지션 관점입니다.</li>
          <li><strong>0선 교차:</strong> 단기적인 추세의 중심이 바뀌는 신호로 봅니다.</li>
        </ul>
        <h3>3. 팁</h3>
        <p>RSI와 비슷해 보이지만, CCI는 상/하단 제한이 없습니다. 따라서 +200, +300과 같이 극단적인 수치가 나올수록 추세 가속도가 붙었다는 뜻입니다.</p>
      `
    },
    en: {
      name: 'CCI (Commodity Channel Index)',
      title: 'CCI: Unbounded Momentum Detection',
      description: 'Measures the current price level relative to an average price level over a given period of time.',
      content: `
        <h3>1. Overview</h3>
        <p>Originally for commodities, CCI is now used for all assets. It assumes that prices move in cycles and compares the current price to the average price over a specific timeframe.</p>
        <h3>2. Trading Signals</h3>
        <ul>
          <li><strong>The +100 Breakout:</strong> When CCI moves above +100, it indicates a new, strong uptrend is emerging. It's a "Go" signal for momentum traders.</li>
          <li><strong>The -100 Breakdown:</strong> Conversely, dropping below -100 signals the start of a bearish leg.</li>
        </ul>
        <h3>3. Distinction</h3>
        <p>Unlike RSI which is capped at 100, CCI can go indefinitely higher. This makes it superior for analyzing parabolic moves where RSI would flatline at "Overbought".</p>
      `
    }
  },
  {
    id: 'adx',
    category: 'oscillator',
    ko: {
      name: 'ADX (평균 방향성 지수)',
      title: 'ADX: 추세의 "진짜 강도" 감별사',
      description: '시장의 방향이 아닌, 추세가 얼마나 강력한지를 수치(0~100)로 보여줍니다.',
      content: `
        <h3>1. 개요</h3>
        <p>ADX는 상승이나 하락의 방향을 알려주지 않습니다. 오직 "지금 추세가 살아있는가?"를 알려줍니다. 윌레스 와일더가 개발한 지표 중 가장 독창적인 도구입니다.</p>
        <h3>2. 핵심 기준값 25</h3>
        <ul>
          <li><strong>25 미만:</strong> 비추세(Non-trending) 시장입니다. 이동평균선 매매를 하면 손해를 볼 확률이 높으니 박스권 매매(스토캐스틱 등)를 하십시오.</li>
          <li><strong>25 이상:</strong> 강력한 추세장입니다. 눌림목마다 매매해야 하며, 절대 역추세 매매를 해서는 안 됩니다.</li>
        </ul>
        <h3>3. 다이버전스</h3>
        <p>가격은 고점을 갱신하는데 ADX가 고점을 낮춘다면, 추세의 힘이 빠지고 있다는 강력한 경고입니다. 조만간 추세 반전이나 횡보가 시작될 것입니다.</p>
      `
    },
    en: {
      name: 'ADX (Average Directional Index)',
      title: 'ADX: The Truth Detector for Trends',
      description: 'Quantifies the strength of a trend regardless of direction. Tells you IF you should trade the trend.',
      content: `
        <h3>1. Overview</h3>
        <p>ADX is the ultimate filter. It answers the question: "Is the market trending or sleeping?" It consists of the ADX line itself and two directional indicators (+DI and -DI).</p>
        <h3>2. The Magic Number 25</h3>
        <ul>
          <li><strong>Below 25:</strong> The market is aimless or consolidating. Trend-following strategies will fail here.</li>
          <li><strong>Above 25:</strong> A strong trend is underway. Use moving averages or bollinger bands to ride the wave.</li>
        </ul>
        <h3>3. Interpretation</h3>
        <p>A rising ADX means the trend is gaining strength. A falling ADX means the trend is losing momentum, even if prices are still moving in the same direction. It acts as an early warning system for consolidation.</p>
      `
    }
  },
  {
    id: 'aroon',
    category: 'oscillator',
    ko: {
      name: 'Aroon (아룬)',
      title: '아룬: 새로운 추세의 탄생 감지',
      description: '신고가나 신저가가 발생한 시간을 추적하여 추세 시작을 알립니다.',
      content: `
        <h3>1. 개요</h3>
        <p>투샤르 찬데가 개발한 아룬 지표는 "시간"에 초점을 맞춥니다. 단순히 가격이 높은 것뿐만 아니라, '얼마나 최근에' 최고가를 경신했는지를 점수화(0~100)하여 추세의 신선도를 측정합니다.</p>
        <h3>2. 구성 요소</h3>
        <ul>
          <li><strong>Aroon Up:</strong> 최근 25일 중 며칠 전에 최고가가 나왔는가? (100에 가까울수록 상승세 강함)</li>
          <li><strong>Aroon Down:</strong> 최근 25일 중 며칠 전에 최저가가 나왔는가? (100에 가까울수록 하락세 강함)</li>
        </ul>
        <h3>3. 실전 전략</h3>
        <p>Aroon Up이 100을 찍고 Aroon Down이 0을 찍는 '크로스' 현상이 발생하면, 이는 단순히 강한 것이 아니라 '새로운 대세 상승장'이 시작되었음을 알리는 가장 강력한 신호입니다.</p>
      `
    },
    en: {
      name: 'Aroon',
      title: 'Aroon: Detecting New Trend Emergencies',
      description: 'Tracks the time elapsed since new highs and lows were reached.',
      content: `
        <h3>1. Overview</h3>
        <p>Developed by Tushar Chande, Aroon focuses on the "age" of the trend. It calculates how many periods have passed since the last N-day high or low.</p>
        <h3>2. Components</h3>
        <ul>
          <li><strong>Aroon Up:</strong> Measures strength of the uptrend. Closest to 100 means a new high was just made.</li>
          <li><strong>Aroon Down:</strong> Measures strength of the downtrend. Closest to 100 means a new low was just made.</li>
        </ul>
        <h3>3. Trading Strategy</h3>
        <p>A "Golden Cross" in Aroon (Up crossing above Down) is often more reliable than a Moving Average cross because it factors in the *recency* of the price extreme. Use it to catch the very beginning of a breakout.</p>
      `
    }
  },
  {
    id: 'obv',
    category: 'oscillator',
    ko: {
      name: 'OBV (거래량 균형 지표)',
      title: 'OBV: 거래량은 거짓말을 하지 않는다',
      description: '가격 변동과 거래량을 합산하여 매집과 분산을 추적합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>조 그랜빌의 "거래량은 시세에 선행한다"는 철학을 담은 지표입니다. 주가가 상승한 날의 거래량은 더하고, 하락한 날의 거래량은 빼서 누적합니다. 이 누적된 선의 방향이 곧 세력의 의도입니다.</p>
        <h3>2. 핵심 해석: 다이버전스</h3>
        <p>주가는 계속 횡보하거나 하락하는데 OBV 선만 계속 상승하고 있다면? 이는 거대 자본이 몰래 물량을 매집(Accumulation)하고 있다는 확실한 증거입니다. 곧 폭발적인 상승이 나올 것입니다.</p>
        <h3>3. 팁</h3>
        <p>OBV는 절대적인 수치보다 '추세의 방향'과 '전고점 돌파 여부'가 중요합니다. OBV가 직전 고점을 뚫으면 주가도 곧 고점을 뚫게 됩니다.</p>
      `
    },
    en: {
      name: 'OBV (On Balance Volume)',
      title: 'OBV: Volume Precedes Price',
      description: 'Relates volume to price change to track smart money flow.',
      content: `
        <h3>1. Overview</h3>
        <p>Based on Joe Granville's theory that "Volume precedes Price." OBV adds volume on up-days and subtracts it on down-days. It reveals the hidden buying or selling pressure behind the price action.</p>
        <h3>2. Core Insight: Divergence</h3>
        <p>If price is flat or falling but OBV is rising, it signals "Smart Money Accumulation." Institutions are buying the dip, and a breakout is imminent.</p>
        <h3>3. Pro Tip</h3>
        <p>Draw trendlines on the OBV line itself. An OBV trendline breakout often happens *before* the price trendline breakout, giving you an early entry advantage.</p>
      `
    }
  },
  {
    id: 'mfi',
    category: 'oscillator',
    ko: {
      name: 'MFI (자금 흐름 지수)',
      title: 'MFI: 거래량이 포함된 RSI',
      description: 'RSI의 계산 방식에 거래량을 추가하여 신뢰도를 높인 지표입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>Money Flow Index는 '거래량 가중 RSI'라고도 불립니다. RSI는 가격만 보지만, MFI는 그 가격 움직임에 얼마나 많은 돈이 실렸는지를 함께 봅니다. 따라서 RSI보다 속임수 신호가 적습니다.</p>
        <h3>2. 해석 방법</h3>
        <ul>
          <li><strong>80 이상 (과열):</strong> 강력한 매수세가 들어왔으나 과열권입니다. 거래량이 줄어들며 MFI가 꺾이면 매도 타이밍입니다.</li>
          <li><strong>20 이하 (침체):</strong> 공포에 의한 투매가 나왔습니다. 저점 매수의 기회입니다.</li>
        </ul>
        <h3>3. 전략</h3>
        <p>주가는 계속 오르는데 MFI는 고점이 낮아지는 하락 다이버전스가 발생하면, '거래량이 동반되지 않은 허수 상승'이므로 곧 추세가 붕괴됩니다.</p>
      `
    },
    en: {
      name: 'MFI (Money Flow Index)',
      title: 'MFI: Volume-Weighted Momentum',
      description: 'Often called volume-weighted RSI for its dual-input logic.',
      content: `
        <h3>1. Overview</h3>
        <p>MFI improves on the RSI by incorporating Volume. It measures the intensity of money flowing in and out of an asset. It answers: "Is the price move backed by real conviction?"</p>
        <h3>2. Interpretation</h3>
        <ul>
          <li><strong>Over 80 (Overbought):</strong> Suggests unsustainable buying pressure. Watch for a reversal if volume drops.</li>
          <li><strong>Under 20 (Oversold):</strong> Indicates panic selling. Often marks a capitulation bottom.</li>
        </ul>
        <h3>3. Strategy</h3>
        <p>MFI Divergence is one of the most reliable reversal signals in crypto. If price hits a higher high but MFI hits a lower high, it means the "smart money" is not supporting the new high—Get out.</p>
      `
    }
  },
  {
    id: 'wpr',
    category: 'oscillator',
    ko: {
      name: 'Williams %R',
      title: '윌리엄스 %R: 반전 지점의 미립자 분석',
      description: '스토캐스틱의 역산 버전으로 고점에서 얼마나 떨어졌는지 보여줍니다.',
      content: `
        <h3>1. 개요</h3>
        <p>래리 윌리엄스가 개발한 이 지표는 현재 종가가 최근 N일간의 가격 범위 중 '어디'에 위치하는지를 측정합니다. 스토캐스틱과 달리 범위가 0에서 -100으로 표시되며, 반응 속도가 매우 빠릅니다.</p>
        <h3>2. 구간 해석</h3>
        <ul>
          <li><strong>-20 이상 (0~-20):</strong> 강력한 과매수 상태입니다. 하지만 추세장에서는 계속 이 구간에 머물며 상승할 수 있습니다.</li>
          <li><strong>-80 이하 (-80~-100):</strong> 과매도 상태입니다. 반등이 임박했습니다.</li>
        </ul>
        <h3>3. 실패 스윙 전략</h3>
        <p>과매도 구간을 벗어났다가 다시 과매도 구간으로 진입하지 않고 위로 턴할 때(Failure Swing), 가장 안전하고 확실한 매수 타점이 됩니다.</p>
      `
    },
    en: {
      name: 'Williams %R',
      title: 'Williams %R: Precision Reversal Tracking',
      description: 'Measures how close current price is to the period high.',
      content: `
        <h3>1. Overview</h3>
        <p>Developed by Larry Williams, this momentum indicator works like a fast Stochastic but plots on a scale of 0 to -100. It is exceptional at identifying market tops and bottoms.</p>
        <h3>2. Zone Analysis</h3>
        <ul>
          <li><strong>Above -20:</strong> Overbought power zone. In a strong bull market, price can hug this line for weeks.</li>
          <li><strong>Below -80:</strong> Oversold zone. Look for "bullish refusal" patterns here.</li>
        </ul>
        <h3>3. Failure Swing Strategy</h3>
        <p>Wait for the indicator to exit the oversold zone, pull back slightly without re-entering it, and then break higher. This "Failure Swing" confirms that sellers have lost control.</p>
      `
    }
  },
  {
    id: 'awesome',
    category: 'oscillator',
    ko: {
      name: 'Awesome Oscillator (AO)',
      title: '어썸 오실레이터: 시장 모멘텀의 마법',
      description: '두 이동평균의 차이를 히스토그램으로 나타낸 빌 윌리엄스의 지표입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>AO는 34일 이동평균과 5일 이동평균의 차이를 계산하여 시장의 모멘텀 변화를 시각화합니다. 이름처럼 '놀라운' 적중률을 보여준다고 하여 Awesome이라 불립니다.</p>
        <h3>2. 색상의 의미</h3>
        <p>막대가 녹색이면 모멘텀이 전일보다 강해진 것이고, 적색이면 약해진 것입니다. 0선 위에서 녹색이 지속되면 강력한 상승장입니다.</p>
        <h3>3. 트윈 픽 (Twin Peaks) 전략</h3>
        <p>0선 아래에서 두 개의 바닥(W형태)을 만드는데, 두 번째 바닥이 첫 번째 바닥보다 높다면? 이는 무조건적인 강력 매수 신호입니다.</p>
      `
    },
    en: {
      name: 'Awesome Oscillator',
      title: 'AO: Mastering Market Momentum',
      description: 'A histogram showing the difference between two simple moving averages.',
      content: `
        <h3>1. Overview</h3>
        <p>Created by Bill Williams, the Awesome Oscillator (AO) calculates the difference between a 34-period and 5-period SMA. It simplifies the chaos of the market into clear momentum bars.</p>
        <h3>2. Color Coding</h3>
        <p>Green bars indicate rising momentum; Red bars indicate falling momentum. It provides instant visual confirmation of trend strength.</p>
        <h3>3. Twin Peaks Strategy</h3>
        <p>Look for two lows below the zero line. If the second low is higher (closer to zero) than the first, and followed by a green bar, it is a high-probability "Saucer" buy signal.</p>
      `
    }
  },
  {
    id: 'mom',
    category: 'oscillator',
    ko: {
      name: 'Momentum (모멘텀)',
      title: '모멘텀: 시장의 속도 측정기',
      description: '현재 가격과 과거 일정 시점의 가격 차이를 직접 계산합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>가장 단순하고 원초적인 오실레이터입니다. "오늘 종가 - N일 전 종가"를 계산하여 추세가 가속화되는지 둔화되는지를 봅니다.</p>
        <h3>2. 해석</h3>
        <p>모멘텀 지표가 0선 위에서 계속 상승한다면 추세가 점점 강해지고 있다는 뜻입니다. 가격은 오르는데 모멘텀 선이 꺾인다면, 상승 동력이 다해가고 있다는 조기 경보입니다.</p>
        <h3>3. 100선 교차 전략</h3>
        <p>100(또는 0) 기준선을 상향 돌파하면 매수, 하향 돌파하면 매도하는 전략이 횡보장에서 유효합니다.</p>
      `
    },
    en: {
      name: 'Momentum',
      title: 'Momentum: Measuring Price Velocity',
      description: 'Tracks the speed of price changes over a specific interval.',
      content: `
        <h3>1. Overview</h3>
        <p>The grandfather of oscillators. It simply measures the change in price over a set period. It answers: "Are we moving faster or slower than before?"</p>
        <h3>2. Interpretation</h3>
        <p>Rising momentum indicates an accelerating trend. Falling momentum during a price rise indicates exhaustion (divergence). Use it to time your exits before the actual reversal happens.</p>
        <h3>3. Crossover Strategy</h3>
        <p>Use the zero line (or 100 line depending on calculation) as a trigger. A cross from below to above is a signal that bullish velocity has taken control.</p>
      `
    }
  },
  {
    id: 'chaikin',
    category: 'oscillator',
    ko: {
      name: 'Chaikin Volatility',
      title: '차이킨 변동성: 가격 편차의 동학',
      description: '고가와 저가의 거리 변화를 통해 변동성 급증을 포착합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>마크 차이킨이 개발한 이 지표는 고가(High)와 저가(Low)의 차이, 즉 스프레드의 변화율을 측정합니다. ATR과 비슷해 보이지만, 변동성의 '증가율'에 더 초점을 맞춥니다.</p>
        <h3>2. 해석과 예측</h3>
        <p>변동성은 순환합니다. 차이킨 변동성 수치가 바닥을 기고 있다면, 곧 큰 변동성(추세)이 터질 것이라는 예고입니다. 반대로 수치가 고점에서 꺾인다면 추세가 진정되고 횡보장에 들어선다는 뜻입니다.</p>
        <h3>3. 활용 팁</h3>
        <p>지표가 급상승할 때 가격이 박스권을 돌파한다면, 이는 매우 신뢰도 높은 '진성 돌파'입니다.</p>
      `
    },
    en: {
      name: 'Chaikin Volatility',
      title: 'Chaikin Volatility: Understanding Range Expansion',
      description: 'Uses the spread between high and low prices to detect volatility.',
      content: `
        <h3>1. Overview</h3>
        <p>Marc Chaikin’s Volatility indicator looks at the rate of change of the trading range (High - Low). It identifies periods where the market range is expanding or contracting.</p>
        <h3>2. Cycle Analysis</h3>
        <p>Low volatility is always followed by high volatility. Use this indicator to spot "the calm before the storm." A sharp rise in indicator values confirms that a breakout has genuine momentum behind it.</p>
        <h3>3. Trading Tip</h3>
        <p>Do not use this for direction. Use it to confirm if a price move is significant enough to trade. A breakout with flat Chaikin Volatility is likely a fake-out.</p>
      `
    }
  },
  {
    id: 'vortex',
    category: 'oscillator',
    ko: {
      name: 'Vortex Indicator (VI)',
      title: '보텍스: 추세의 소용돌이 에너지',
      description: '상승(VI+)과 하락(VI-) 파동의 힘을 비교하여 새로운 추세의 시작점을 포착합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>물의 소용돌이 원리에서 영감을 받은 이 지표는 두 개의 선(VI+, VI-)으로 구성됩니다. 이 두 선이 서로 교차할 때, 기존의 에너지 흐름이 뒤집히며 새로운 추세가 탄생한다고 봅니다.</p>
        <h3>2. 해석</h3>
        <ul>
          <li><strong>골든 크로스:</strong> VI+ 선이 VI- 선을 뚫고 올라가면 매수 신호입니다.</li>
          <li><strong>데드 크로스:</strong> VI- 선이 VI+ 선을 뚫고 올라가면 매도 신호입니다.</li>
        </ul>
        <h3>3. 트레이딩 팁</h3>
        <p>보텍스는 추세 추종형 지표이므로, 횡보장에서는 신호가 잦습니다. 따라서 ADX나 이동평균선과 함께 사용하여 '추세장'임이 확인되었을 때 나오는 신호만 취하는 것이 승률을 높이는 방법입니다.</p>
      `
    },
    en: {
      name: 'Vortex Indicator',
      title: 'Vortex: Harnessing Trend Energy',
      description: 'Compares the strength of positive and negative trend movements to identify new trend starts.',
      content: `
        <h3>1. Overview</h3>
        <p>Inspired by the flow of water, the Vortex Indicator consists of two oscillating lines (VI+ and VI-). The intersection of these lines represents a reversal in the flow of market energy.</p>
        <h3>2. Signal Logic</h3>
        <ul>
          <li><strong>Bullish Cross:</strong> When VI+ crosses above VI-, it signals the start of an uptrend.</li>
          <li><strong>Bearish Cross:</strong> When VI- crosses above VI+, it signals the start of a downtrend.</li>
        </ul>
        <h3>3. Pro Tip</h3>
        <p>Since Vortex is a trend-following tool, it is prone to whipsaws in choppy markets. Filter its signals by ensuring the price is also above the 200-day Moving Average for long trades.</p>
      `
    }
  },
  {
    id: 'ppo',
    category: 'oscillator',
    ko: {
      name: 'Percentage Price Oscillator (PPO)',
      title: 'PPO: 비율로 보는 MACD의 진화',
      description: '가격이 아닌 등락률(%)을 기반으로 하여 서로 다른 자산 간의 모멘텀을 비교할 수 있습니다.',
      content: `
        <h3>1. 개요</h3>
        <p>MACD와 원리는 같지만, 절대 가격 대신 '비율(Percentage)'로 계산한다는 점이 다릅니다. 이 특성 덕분에 가격대가 100달러인 주식과 1000달러인 주식의 추세 강도를 직접 비교할 수 있습니다.</p>
        <h3>2. 활용법</h3>
        <p>PPO 히스토그램이 0선을 돌파하는 것은 장단기 이평선의 골든크로스와 동일한 의미입니다. 특히 장기 투자 관점에서 주봉(Weekly) 차트의 PPO 교차는 매우 신뢰도 높은 대세 상승 신호입니다.</p>
        <h3>3. MACD와의 차이</h3>
        <p>MACD는 가격이 오르면 지표 값도 같이 커지지만, PPO는 비율이므로 과거 데이터와 현재 데이터의 '강도'를 1:1로 비교 분석하기에 훨씬 유리합니다.</p>
      `
    },
    en: {
      name: 'PPO (Percentage Price Oscillator)',
      title: 'PPO: The Normalized Momentum Tool',
      description: 'A percentage-based version of MACD that allows for comparison across different assets and price levels.',
      content: `
        <h3>1. Overview</h3>
        <p>While MACD uses absolute price differences, PPO calculates the percentage difference between moving averages. This makes it independent of the asset's price, allowing for direct comparison between Bitcoin and Ethereum, for example.</p>
        <h3>2. Strategy</h3>
        <p>Use the PPO Centerline Crossover as a confirmation of long-term trend change. A weekly PPO buy signal is extensively used by institutional investors to time market entries.</p>
        <h3>3. Why use PPO?</h3>
        <p>It’s better for long-term historical analysis. A MACD value of 10 might be huge when a stock is $50, but tiny when the stock is $500. PPO solves this scaling issue completely.</p>
      `
    }
  },
  {
    id: 'smi',
    category: 'oscillator',
    ko: {
      name: 'SMI Ergodic',
      title: 'SMI 에르고딕: 노이즈를 제거한 순수 모멘텀',
      description: 'TSI(True Strength Index)를 개량하여 거짓 신호를 줄이고 추세의 본질만 남겼습니다.',
      content: `
        <h3>1. 개요</h3>
        <p>SMI(Stochastic Momentum Index) Ergodic은 이중 이동평균을 사용하여 가격의 잡음(Noise)을 걸러냅니다. MACD보다 반응이 빠르면서도 속임수가 적은 것이 특징입니다.</p>
        <h3>2. 시그널 해석</h3>
        <p>메인 선(SMI)이 시그널 선을 상향 돌파하면 매수, 하향 돌파하면 매도입니다. 특히 0선 아래 깊은 곳에서 발생하는 교차 신호는 강력한 바닥 탈출 의미를 가집니다.</p>
        <h3>3. 팁</h3>
        <p>단기 매매보다는 스윙 트레이딩에 적합합니다. 추세가 한 번 잡히면 꽤 오랫동안 신호가 유지되는 경향이 있어 '추세 타기'에 최적화되어 있습니다.</p>
      `
    },
    en: {
      name: 'SMI Ergodic',
      title: 'SMI Ergodic: Noise-Free Momentum',
      description: 'An evolution of the TSI designed to provide cleaner, more reliable trend signals.',
      content: `
        <h3>1. Overview</h3>
        <p>The SMI Ergodic Indicator essentially acts as a double-smoothed True Strength Index (TSI). It excels at filtering out market noise to show the "true" direction of the momentum flow.</p>
        <h3>2. Signal Logic</h3>
        <p>Look for the Signal Line crossover. A bullish cross (SMI crossing above Signal) confirms upward momentum. It is particularly powerful when used to spot divergences at market tops or bottoms.</p>
        <h3>3. Best Use</h3>
        <p>Ideal for Swing Traders. Unlike the jagged lines of a raw Stochastic, the SMI produces smooth waves, helping you stay in the trade longer without getting shaken out by minor volatility.</p>
      `
    }
  },
  {
    id: 'mass',
    category: 'oscillator',
    ko: {
      name: 'Mass Index',
      title: '매스 인덱스: 반전의 정점 포착',
      description: '고가와 저가의 변동폭(Range)이 팽창했다가 수축하는 패턴을 통해 추세 반전을 예고합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>도널드 도시가 개발한 매스 인덱스는 "가격 범위의 확장은 추세의 반전을 암시한다"는 이론을 바탕으로 합니다. 특정 수치(27)를 넘겼다가 떨어질 때를 '반전 팽창(Reversal Bulge)'이라고 부릅니다.</p>
        <h3>2. 핵심 전략: 반전 팽창</h3>
        <p>지표가 27선 위로 올라갔다가 26.5 아래로 떨어지는 순간이 바로 매매 타이밍입니다. 이는 시장의 에너지가 과도하게 팽창했다가 터지기 직전임을 의미합니다.</p>
        <h3>3. 주의사항</h3>
        <p>매스 인덱스는 방향을 알려주지 않습니다. 오직 '곧 반전이 일어날 것임'을 알려줍니다. 따라서 방향성 판단은 이동평균선이나 추세선을 통해 별도로 해야 합니다.</p>
      `
    },
    en: {
      name: 'Mass Index',
      title: 'Mass Index: Spotting the Reversal Bulge',
      description: 'Predicts trend reversals by analyzing the expansion and contraction of trading ranges.',
      content: `
        <h3>1. Overview</h3>
        <p>Developed by Donald Dorsey, the Mass Index doesn't look at price direction, but at range volatility. It is built on the premise that range expansion often precedes a reversal.</p>
        <h3>2. The Reversal Bulge</h3>
        <p>The primary signal is the "Reversal Bulge." This occurs when the 25-day Mass Index rises above 27.0 and then drops below 26.5. This specific pattern has a high probability of signaling a major trend change.</p>
        <h3>3. Direction Context</h3>
        <p>Since the Mass Index has no directional bias, use it alongside a 9-period EMA. If the "Reversal Bulge" triggers and price breaks the EMA, take the trade in the direction of the break.</p>
      `
    }
  },
  {
    id: 'trix',
    category: 'oscillator',
    ko: {
      name: 'TRIX (Triple Exponential)',
      title: 'TRIX: 노이즈가 제거된 순수 추세',
      description: '지수 이동평균을 세 번이나 계산하여 미세한 파동을 모두 제거한 장기 추세 지표입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>TRIX는 종가에 대해 3중으로 지수 이동평균(EMA)을 취한 뒤, 그 변화율(ROC)을 계산합니다. 번거로운 계산을 거치는 이유는 오직 하나, "속임수(Whipsaw)를 없애기 위해서"입니다.</p>
        <h3>2. 해석</h3>
        <p>0선(Zero Line)을 돌파하는 것이 가장 기본적인 신호입니다. 0선 위는 상승세, 아래는 하락세입니다. 워낙 필터링이 강해서 신호가 늦게 나오지만, 한 번 나온 신호는 매우 묵직하고 신뢰도가 높습니다.</p>
        <h3>3. 활용</h3>
        <p>단타 매매에는 부적합하며, 주식이나 코인의 대세 상승기를 길게 가져가려는 중장기 투자자에게 최고의 나침반이 됩니다.</p>
      `
    },
    en: {
      name: 'TRIX (Triple Exponential Average)',
      title: 'TRIX: The Noise Killer',
      description: 'Displays the percent rate of change of a triple exponentially smoothed moving average.',
      content: `
        <h3>1. Overview</h3>
        <p>TRIX acts as an impulse indicator that filters out insignificant price movements. By smoothing the data three times (Triple EMA), it eliminates almost all short-term noise.</p>
        <h3>2. Interpretation</h3>
        <p>The Zero Line crossover is the main trigger. Crossing above zero suggests a sustainable bull run. Because of the heavy smoothing, TRIX is a lagging indicator, but excellent for keeping you in a trade during a major trend without getting shaken out.</p>
        <h3>3. Divergence</h3>
        <p>Like MACD, divergence on TRIX is a potent signal. If price hits a new high but TRIX does not, the momentum is hollow and a reversal is likely.</p>
      `
    }
  },
  {
    id: 'coppock',
    category: 'oscillator',
    ko: {
      name: 'Coppock Curve',
      title: '코폭 커브: 대세 상승장의 시작점',
      description: '장기 투자자를 위해 개발된 지표로, 시장의 침체가 끝나고 새로운 강세장이 시작됨을 알립니다.',
      content: `
        <h3>1. 개요</h3>
        <p>에드워드 코폭이 교회 신도들의 장기 투자를 돕기 위해 개발했습니다. 11개월과 14개월의 변화율을 합산한 뒤 10개월 가중 이동평균을 하여 구합니다. 월봉(Monthly) 차트에서 가장 강력합니다.</p>
        <h3>2. 매수 신호</h3>
        <p>지표가 0선 아래 깊은 곳에서 놀다가 상승 반전하며 0선을 향해 고개를 들 때가 매수 시점입니다. 이는 수년에 한 번 오는 '대바닥'일 확률이 높습니다.</p>
        <h3>3. 특징</h3>
        <p>매도 신호는 제공하지 않습니다. 오직 '매수'를 위해 설계된 지표입니다. 하락장에서 멘탈이 흔들릴 때, 코폭 커브가 돌아서기 전까지는 매수 버튼을 누르지 마십시오.</p>
      `
    },
    en: {
      name: 'Coppock Curve',
      title: 'Coppock Curve: The Bottom-Detector',
      description: 'A long-term momentum indicator designed specifically to identify the start of a new bull market.',
      content: `
        <h3>1. Overview</h3>
        <p>Created by Edwin Coppock, this indicator was originally designed for monthly charts to help long-term investors enter the market safely. It effectively filters out short-term corrections.</p>
        <h3>2. The Buy Signal</h3>
        <p>A buy signal is generated when the curve turns up from a deep trough below the zero line. It captures the psychological shift from despair to accumulation.</p>
        <h3>3. Usage Note</h3>
        <p>It is strictly a buy-side tool. Do not use it for shorting. Think of it as a "Green Light" for long-term investment portfolios. If the curve is falling, cash is king.</p>
      `
    }
  },
  {
    id: 'chop',
    category: 'oscillator',
    ko: {
      name: 'Choppiness Index',
      title: '초피니스 인덱스: 횡보장의 경고등',
      description: '시장의 방향이 아니라 "혼잡도(Choppiness)"를 측정합니다. 추세 매매를 해도 되는지 판단하는 필터입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>빌 드렉이 개발한 이 지표는 0에서 100 사이의 값을 가집니다. 값이 높을수록 시장이 방향 없이 위아래로 흔들리고 있음(Choppy)을 의미하고, 값이 낮을수록 일정한 방향으로 뻗어나가고 있음(Trend)을 의미합니다.</p>
        <h3>2. 기준값 해석</h3>
        <ul>
          <li><strong>61.8 이상:</strong> 극도로 혼란스러운 횡보장입니다. 추세 추종 전략(이동평균 등)을 쓰면 손실만 쌓입니다. 매매를 쉬거나 박스권 전략을 쓰세요.</li>
          <li><strong>38.2 이하:</strong> 강력한 원웨이 추세장입니다. 눌림목 매매나 돌파 매매를 적극적으로 해야 할 때입니다.</li>
        </ul>
        <h3>3. 팁</h3>
        <p>이 지표는 매수/매도 타이밍을 알려주지 않습니다. "어떤 전략을 쓸 것인가?"를 결정하는 환경 판단 도구로 쓰십시오.</p>
      `
    },
    en: {
      name: 'Choppiness Index',
      title: 'Choppiness Index: Trend vs. Consolidation',
      description: 'Determines if the market is choppiness (trading sideways) or trending. Critical for strategy selection.',
      content: `
        <h3>1. Overview</h3>
        <p>The Choppiness Index (CHOP) is an "anti-trend" oscillator. It quantifies the lack of trend. Higher values = More sideways chaos. Lower values = Stronger directional trend.</p>
        <h3>2. Key Thresholds</h3>
        <ul>
          <li><strong>Above 61.8:</strong> The market is consolidating. Trend trading systems (like MACD crosses) will likely fail here. Stay out or trade the range.</li>
          <li><strong>Below 38.2:</strong> The market has broken out and is trending. It’s time to deploy trend-following strategies.</li>
        </ul>
        <h3>3. Usage</h3>
        <p>Use CHOP as a filter. Before taking a trend trade, check if CHOP is below 50. If CHOP is peaking near 60+, ignore the breakout signal as it's likely a trap.</p>
      `
    }
  },

  // --- PREMIUMS (10) ---
  {
    id: 'sp01_cvd',
    category: 'premium',
    ko: {
      name: 'CVD (Cumulative Volume Delta)',
      title: 'CVD: 고래의 발자국을 추적하다',
      description: '단순 거래량이 아닌 매수와 매도의 "체결 강도 차이"를 누적하여 세력의 의도를 파악합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>CVD(Cumulative Volume Delta)는 시장가 매수(Aggressive Buy)와 시장가 매도(Aggressive Sell)의 차이를 누적한 데이터입니다. 가격은 거짓말을 해도, 실제로 체결된 돈의 흐름인 CVD는 거짓말을 하지 못합니다.</p>
        <h3>2. 핵심 해석: 흡수(Absorption)</h3>
        <p>가격은 중요한 저항선에 도달하여 하락하지 않고 버티고 있는데, CVD는 계속 하락한다면? 이는 누군가가 시장가 매도를 모두 '지정과 매수'로 받아내고(흡수하고) 있다는 뜻입니다. 조만간 가격 폭등이 일어날 강력한 신호입니다.</p>
        <h3>3. 다이버전스 전략</h3>
        <p>가격이 신저점을 갱신했는데 CVD는 저점을 높인다면, 매도 압력이 바닥났다는 뜻입니다. 이는 V자 반등의 전조 현상으로, 공격적인 롱 포지션 진입 근거가 됩니다.</p>
      `
    },
    en: {
      name: 'CVD (Cumulative Volume Delta)',
      title: 'CVD: Tracking Whale Footprints',
      description: 'Reveals the aggressive buying and selling pressure behind price moves. The ultimate tool for spotting manipulation.',
      content: `
        <h3>1. Overview</h3>
        <p>CVD tracks the cumulative difference between market buys and market sells. It shows who is more aggressive: the buyers or the sellers. It is the X-ray vision of order flow trading.</p>
        <h3>2. Absorption Logic</h3>
        <p>If price is stuck at resistance but CVD keeps skyrocketing, it means sellers are using limit orders to "absorb" all the buying aggression. This "Limit Wall" often leads to a sharp reversal down once buyers are exhausted.</p>
        <h3>3. Divergence Strategy</h3>
        <p>Price making a higher high while CVD makes a lower high is the classic "Fake-out" signal. It indicates that the price push lacks real capital commitment and is likely a trap set by market makers.</p>
      `
    }
  },
  {
    id: 'sp02_fvg',
    category: 'premium',
    ko: {
      name: 'FVG (Fair Value Gap)',
      title: 'FVG: 시장 불균형의 귀소 본능',
      description: '기관의 급격한 주문으로 인해 체결되지 않고 넘어간 가격 공백을 찾아냅니다.',
      content: `
        <h3>1. 개요</h3>
        <p>ICT(Inner Circle Trader) 이론의 핵심인 FVG는 강력한 캔들 하나가 발생했을 때, 이전 캔들의 고가와 다음 캔들의 저가 사이에 생기는 '빈 공간'입니다. 시장은 이 불균형을 해소하기 위해 반드시 해당 구간으로 되돌아옵니다.</p>
        <h3>2. 실전 매매: 되돌림 진입</h3>
        <p>가격이 상승하다가 FVG 구간까지 떨어지면, 그곳은 강력한 지지 구간이 됩니다. FVG의 절반(50%) 정도를 채우고 다시 상승하는 경우가 가장 많습니다.</p>
        <h3>3. 목표가 설정</h3>
        <p>반대로, 현재 가격 아래에 방치된 FVG는 가격을 끌어당기는 '자석' 역할을 합니다. 숏 포지션의 목표가를 설정할 때 하단의 FVG를 타겟으로 잡으십시오.</p>
      `
    },
    en: {
      name: 'FVG (Fair Value Gap)',
      title: 'FVG: The Market\'s Magnetic Void',
      description: 'Identifies price inefficiencies caused by sudden institutional volatility. Price often returns to fill these gaps.',
      content: `
        <h3>1. Overview</h3>
        <p>A Fair Value Gap (FVG) is a three-candle pattern where the market moves too fast, leaving a specific price range trading only in one direction. It represents an imbalance that the market algorithm seeks to "rebalance."</p>
        <h3>2. The Rebalance Strategy</h3>
        <p>Wait for price to retrace into a bullish FVG. This serves as a high-probability entry zone. The midpoint (Consequent Encroachment) of the gap is often the precise reversal point.</p>
        <h3>3. Target Selection</h3>
        <p>Unfilled FVGs act as magnets. If you are long, look for bearish FVGs above as your take-profit zones, as price will likely surge to fill them before reversing.</p>
      `
    }
  },
  {
    id: 'sp03_ob',
    category: 'premium',
    ko: {
      name: 'Order Blocks (오더 블록)',
      title: '오더 블록: 스마트 머니의 발사대',
      description: '기관 투자자들이 물량을 모으기 위해 인위적으로 만든 마지막 하락(혹은 상승) 캔들입니다.',
      content: `
        <h3>1. 개요</h3>
        <p>강한 상승 추세가 시작되기 직전의 '마지막 음봉'을 오더 블록이라고 부릅니다. 세력들은 이곳에 엄청난 매수 대기 물량을 걸어놓고 가격을 방어합니다.</p>
        <h3>2. 지지/저항과의 차이</h3>
        <p>일반적인 지지선은 여러 번 닿을수록 약해지지만, 오더 블록은 '아직 체결되지 않은 주문'이 남아있는 곳이므로 처음 닿을 때 가장 강력하게 반등합니다.</p>
        <h3>3. 활용 전략</h3>
        <p>가격이 오더 블록 상단에 닿는 순간(Touch) 진입하고, 오더 블록 하단이 뚫리면 즉시 손절하는 방식으로 매우 손익비 좋은 매매가 가능합니다.</p>
      `
    },
    en: {
      name: 'Order Block (SMC)',
      title: 'Order Block: The Institutional Footprint',
      description: 'Identifies the specific candles where smart money accumulated their positions before a major move.',
      content: `
        <h3>1. Overview</h3>
        <p>In Smart Money Concepts (SMC), a Bullish Order Block is the last down-candle before a strong upward move that breaks market structure. It represents the "cost basis" for institutions.</p>
        <h3>2. Distinctive Feature</h3>
        <p>Unlike standard support, Order Blocks are specific zones where large limit orders are waiting. The first retest of an Order Block has a high probability of a violent reaction.</p>
        <h3>3. Precision Entry</h3>
        <p>Place your limit buy orders at the top edge (proximal line) of the Bullish Order Block. This minimizes drawdown and allows for tight stop-losses just below the block.</p>
      `
    }
  },
  {
    id: 'sp04_zscore',
    category: 'premium',
    ko: {
      name: 'Z-Score Analysis',
      title: 'Z-스코어: 통계적 정규분포의 끝자락',
      description: '현재 가격이 평균으로부터 얼마나 비정상적으로(표준편차 배수) 떨어져 있는지 계산합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>가격 데이터도 결국 정규분포를 따릅니다. Z-Score가 2.0이라는 것은 상위 95% 구간을 벗어났다는 뜻으로, 통계적으로 곧 평균 회귀(Mean Reversion)가 일어날 확률이 매우 높음을 시사합니다.</p>
        <h3>2. 해석 기준</h3>
        <ul>
          <li><strong>Z-Score > 2:</strong> 과도한 고평가 상태. 숏 포지션 관심 구간.</li>
          <li><strong>Z-Score < -2:</strong> 과도한 저평가 상태. 롱 포지션 관심 구간.</li>
        </ul>
        <h3>3. 팁</h3>
        <p>볼린저 밴드와 원리는 비슷하지만, Z-Score는 이를 하나의 선으로 압축하여 훨씬 직관적인 과열 분석을 제공합니다. 스캘핑 시 역추세 매매의 기준으로 삼기에 좋습니다.</p>
      `
    },
    en: {
      name: 'Z-Score Analysis',
      title: 'Z-Score: Statistical Mean Reversion',
      description: 'Measures standard deviations from the mean to identify statistically extreme price levels.',
      content: `
        <h3>1. Overview</h3>
        <p>Markets tend to revert to the mean. The Z-Score quantifies exactly how "stretched" the rubber band is. A high Z-Score indicates an unsustainable move that statistically must correct.</p>
        <h3>2. Key Levels</h3>
        <ul>
          <li><strong>Above +2.0:</strong> Statistically significant overextension. High probability of a pullback.</li>
          <li><strong>Below -2.0:</strong> Panic territory. Often marks the mathematical bottom of a dump.</li>
        </ul>
        <h3>3. Trading Application</h3>
        <p>Z-Score is perfect for automated or algorithmic trading strategies. Combine it with RSI; if Z-Score is > 2 and RSI is > 70, the sell signal is incredibly robust.</p>
      `
    }
  },
  {
    id: 'sp05_squeeze',
    category: 'premium',
    ko: {
      name: 'Squeeze Momentum (스퀴즈)',
      title: '스퀴즈 모멘텀: 폭발적인 시세 분출의 전조',
      description: '볼린저 밴드가 켈트너 채널 안으로 들어가는 \'수축\' 현상을 포착하여 곧 있을 대폭발을 예고합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>존 카터(John Carter)가 개발한 전설적인 지표입니다. 시장은 '폭발(Expansion)'과 '휴식(Contraction)'을 반복합니다. 이 지표는 휴식기(검은 점/빨간 점)를 찾아내어 다음 폭발을 미리 준비하게 해줍니다.</p>
        <h3>2. 해석 방법</h3>
        <p>중앙선에 붉은색 점들이 찍히면 '스퀴즈(Squeeze)' 상태로, 에너지가 응축되고 있는 것입니다. 점이 녹색으로 바뀌는 순간이 바로 에너지가 터져 나오는 '발사(Fire)' 시점입니다.</p>
        <h3>3. 실전 전략</h3>
        <p>스퀴즈가 풀릴 때(녹색 점 발생), 히스토그램이 상승하면 매수, 하락하면 매도하십시오. 비트코인이나 나스닥 같은 추세장에서 인생 역전급 수익을 안겨주는 패턴입니다.</p>
      `
    },
    en: {
      name: 'Squeeze Momentum',
      title: 'Squeeze Momentum: Catching the Big Move',
      description: 'Identifies periods of extremely low volatility that serve as launching pads for massive trends.',
      content: `
        <h3>1. Overview</h3>
        <p>Famousized by John Carter, this indicator identifies when Bollinger Bands contract inside Keltner Channels. This "Squeeze" indicates that volatility has died down and energy is building up for a massive move.</p>
        <h3>2. Signals</h3>
        <p><strong>Red Dots:</strong> The Squeeze is ON. Do not trade yet. Prepare for volatility.<br><strong>Green Dots:</strong> The Squeeze has FIRED. The expansion phase has begun.</p>
        <h3>3. Strategy</h3>
        <p>When the dots turn green, enter in the direction of the momentum histogram. This is widely considered one of the best tools for catching the start of a new bull run or crash.</p>
      `
    }
  },
  {
    id: 'sp06_liq',
    category: 'premium',
    ko: {
      name: 'Liquidation HeatMap (청산 히트맵)',
      title: '청산 히트맵: 유동성 사냥의 지도',
      description: '레버리지 트레이더들의 강제 청산 물량이 몰려있는 가격대를 시각화하여 지지/저항을 예측합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>세력(기관)들은 자신들의 거대한 물량을 체결시키기 위해 '유동성(Liquidity)'이 필요합니다. 그 유동성이 가장 풍부한 곳이 바로 개인 투자자들의 '손절 및 청산 라인'입니다. 히트맵은 이 청산 물량이 어디에 쌓여있는지를 보여줍니다.</p>
        <h3>2. 핵심 활용: 유동성 스윕(Sweep)</h3>
        <p>가격이 히트맵의 진한 구간(청산 밀집 지역)을 찌르고 급반등하는 패턴이 자주 나옵니다. 이를 '청산 헌팅'이라고 합니다. 이 지점에서 진입하면 세력과 같은 평단가를 가질 수 있습니다.</p>
        <h3>3. 주의사항</h3>
        <p>청산 맵은 '자석'입니다. 가격은 청산 맵을 향해 움직이지만, 그곳을 뚫을지 찍고 반등할지는 CVD나 거래량을 보고 판단해야 합니다.</p>
      `
    },
    en: {
      name: 'Liquidation HeatMap',
      title: 'Liquidation HeatMap: Hunting Liquidity',
      description: 'Visualizes where over-leveraged traders have their liquidation prices. These zones act as magnets for price action.',
      content: `
        <h3>1. Overview</h3>
        <p>Institutions need liquidity to fill their massive orders. The best source of liquidity is the stop-loss and liquidation clusters of retail traders. This tool reveals exactly where those clusters are hiding.</p>
        <h3>2. The "Stop Hunt" Strategy</h3>
        <p>Wait for price to dive into a bright yellow/red zone on the HeatMap and then quickly reverse. This is a classic "Liquidity Sweep." Enter the trade immediately after the reversal to ride the institutional wave.</p>
        <h3>3. Magnetic Zones</h3>
        <p>Price is naturally attracted to these liquidity pools. If you see a dense cluster above the current price, it is a high-probability target for a long trade.</p>
      `
    }
  },
  {
    id: 'sp07_funding',
    category: 'premium',
    ko: {
      name: 'Funding Rate & OI (펀딩비/미결제약정)',
      title: 'Funding Rate & OI: 선물 시장의 심리 나침반',
      description: '선물 시장의 과열 여부(펀딩비)와 자금 유입 여부(미결제약정)를 통해 추세 지속성을 판별합니다.',
      content: `
        <h3>1. 펀딩비(Funding Rate) 해석</h3>
        <p>양수(+)면 롱 우세, 음수(-)면 숏 우세입니다. 하지만 펀딩비가 극단적으로 높으면 '롱 스퀴즈(폭락)', 극단적으로 낮으면 '숏 스퀴즈(폭등)'가 나올 확률이 높습니다. 대중과 반대로 배팅하는 역추세 지표로 활용됩니다.</p>
        <h3>2. 미결제약정(Open Interest)</h3>
        <ul>
          <li><strong>가격 상승 + OI 상승:</strong> "찐반"입니다. 신규 자금이 들어오며 추세를 밀어올리는 것입니다.</li>
          <li><strong>가격 상승 + OI 하락:</strong> "숏커버링"입니다. 매수세가 강한 게 아니라 공매도 포기 물량이 나오는 것이므로 곧 추세가 꺾일 가능성이 큽니다.</li>
        </ul>
      `
    },
    en: {
      name: 'Funding Rate & Open Interest',
      title: 'Funding & OI: The Sentiment Decoder',
      description: 'Analyzes the cost of holding positions (Funding) and the total capital in the market (OI) to predict squeeze risks.',
      content: `
        <h3>1. Funding Rate Logic</h3>
        <p>Extremely high positive funding means everyone is Long, making the market heavy and prone to a "Long Squeeze" crash. Negative funding often precedes a massive "Short Squeeze" rally.</p>
        <h3>2. Open Interest (OI) Secrets</h3>
        <p>OI tells you if a move is real. <br><strong>Rising Price + Rising OI:</strong> Bullish confidence. Confirm Longs.<br><strong>Rising Price + Falling OI:</strong> Short Covering. Weak rally. Prepare to Short.</p>
      `
    }
  },
  {
    id: 'sp08_adr',
    category: 'premium',
    ko: {
      name: 'ADR Projections (일일 변동폭 예측)',
      title: 'ADR: 오늘 어디까지 갈까?',
      description: '과거 데이터를 기반으로 오늘의 예상 고점(High)과 저점(Low)을 확률적으로 계산합니다.',
      content: `
        <h3>1. 개요</h3>
        <p>ADR(Average Daily Range)은 해당 종목이 하루 평균 얼마나 움직이는지를 보여줍니다. 이를 통해 "오늘 더 이상 오르긴 힘들다"거나 "아직 갈 자리가 남았다"는 것을 판단할 수 있습니다.</p>
        <h3>2. 실전 활용</h3>
        <p>가격이 ADR 상단 타겟에 도달했다면, 추가 상승보다는 조정이 나올 확률이 80% 이상입니다. 무리한 추격 매수를 멈추고 익절(Take Profit)을 해야 하는 구간입니다.</p>
        <h3>3. 확장 타겟</h3>
        <p>만약 ADR 100% 구간을 강한 거래량으로 돌파한다면, 그 날은 '특이점(Outlier)'이 발생한 날입니다. 이 경우 다음 타겟은 ADR 150%나 200% 구간으로 자동 상향 조정해야 합니다.</p>
      `
    },
    en: {
      name: 'ADR Projections',
      title: 'ADR: The Daily Roadmap',
      description: 'Calculates the statistical maximum and minimum price targets for the day based on historical volatility.',
      content: `
        <h3>1. Overview</h3>
        <p>The Average Daily Range (ADR) projection answers the question: "Is the gas tank empty?" It projects likely turning points for the current session.</p>
        <h3>2. Profit Taking</h3>
        <p>If price hits the ADR High target, the statistical probability of further upside drops significantly. It is the disciplined trader's signal to book profits.</p>
        <h3>3. Outlier Days</h3>
        <p>A forceful break of the ADR zone indicates a "Trend Day." In such rare cases, hold the runner and target the 1.5x or 2.0x expansion levels.</p>
      `
    }
  },
  {
    id: 'sp09_vp',
    category: 'premium',
    ko: {
      name: 'Volume Profile (매물대)',
      title: '매물대(Volume Profile): 보이지 않는 벽',
      description: '특정 가격대에서 얼마나 많은 거래가 일어났는지를 가로 막대그래프로 보여줍니다. 진짜 지지와 저항을 찾는 도구입니다.',
      content: `
        <h3>1. 핵심 용어</h3>
        <ul>
          <li><strong>POC (Point of Control):</strong> 가장 거래가 많이 일어난 가격. 가격을 끌어당기는 자석이자 강력한 지지/저항선입니다.</li>
          <li><strong>VA (Value Area):</strong> 전체 거래량의 70%가 발생한 '합리적 가격 구간'입니다.</li>
        </ul>
        <h3>2. 매매 전략</h3>
        <p>가격이 VA(가치 구간)를 벗어났다가 다시 들어오면, 반대편 VA 끝까지 이동하려는 성질이 있습니다. 이를 '80% 룰'이라고 합니다. 이 구간 내에서는 추세 매매보다는 박스권 매매가 유리합니다.</p>
        <h3>3. LVN (Low Volume Node)</h3>
        <p>거래량이 거의 없는 진공 구간입니다. 가격이 이 구간에 진입하면 저항 없이 고속도로처럼 빠르게 통과합니다.</p>
      `
    },
    en: {
      name: 'Volume Profile (VPVR)',
      title: 'Volume Profile: Roughly Right vs Precisely Wrong',
      description: 'Displays trading activity at specific price levels. Unlike time-based volume, this shows where the "Value" is.',
      content: `
        <h3>1. Key Concepts</h3>
        <ul>
          <li><strong>POC (Point of Control):</strong> The price level with the highest traded volume. It acts as the "Fair Price" that the market agrees on.</li>
          <li><strong>Value Area (VA):</strong> The range containing 70% of the volume.</li>
        </ul>
        <h3>2. Strategy: The 80% Rule</h3>
        <p>If price opens outside the Value Area and then re-enters it, there is an 80% probability it will travel to the other side of the Value Area. This is a high-confidence scalp setup.</p>
        <h3>3. The Void (LVN)</h3>
        <p>Low Volume Nodes represent price rejection. When price enters an LVN, it typically moves through it very quickly, seeking the next high-volume area.</p>
      `
    }
  },
  {
    id: 'sp10_div',
    category: 'premium',
    ko: {
      name: 'Divergence Engine (다이버전스 엔진)',
      title: '다이버전스 엔진: 모든 반전을 탐지하다',
      description: 'RSI, MACD, OBV 등 주요 지표의 다이버전스를 실시간으로 자동 스캔하여 알림을 줍니다.',
      content: `
        <h3>1. 개요</h3>
        <p>사람의 눈으로 모든 지표의 다이버전스를 실시간으로 체크하는 것은 불가능합니다. 이 엔진은 5가지 이상의 지표를 동시에 감시하여 상승/하락 다이버전스가 발생하면 즉시 차트에 표시합니다.</p>
        <h3>2. 일반 vs 히든</h3>
        <ul>
          <li><strong>일반(Regular) 다이버전스:</strong> 추세 '반전' 신호입니다. (예: 쌍봉, 쌍바닥)</li>
          <li><strong>히든(Hidden) 다이버전스:</strong> 추세 '지속' 신호입니다. 눌림목에서 발생하며 승률이 더 높습니다.</li>
        </ul>
        <h3>3. 트레이딩 팁</h3>
        <p>단일 지표의 다이버전스보다, RSI와 MACD에서 동시에 다이버전스가 뜨는 '중첩 신호'를 노리십시오. 신뢰도가 비약적으로 상승합니다.</p>
      `
    },
    en: {
      name: 'Divergence Engine',
      title: 'Divergence Engine: Automated Reversal Scanner',
      description: 'Automatically detects Regular and Hidden divergences across multiple oscillators simultaneously.',
      content: `
        <h3>1. Overview</h3>
        <p>Manual divergence hunting is tedious and prone to error. This engine scans RSI, MACD, OBV, and Stochastics in real-time to plot reversal signals directly on your chart.</p>
        <h3>2. Types</h3>
        <ul>
          <li><strong>Regular Divergence:</strong> Signals a trend reversal. Use for counter-trend entries.</li>
          <li><strong>Hidden Divergence:</strong> Signals a trend continuation. Use this to enter on pullbacks during a strong trend.</li>
        </ul>
        <h3>3. Confluence Strategy</h3>
        <p>Wait for a Divergence signal that aligns with a Key Support Level or an Order Block. Blindly trading every divergence is risky; context is king.</p>
      `
    }
  }
];
