import { Plugin } from 'chart.js';

export const initLegendMarginPlugin = (height: number): Plugin<'line'> => ({
  id: 'customLegendMargin',
  beforeInit({ legend }) {
    if (!legend) return;
    const originalFit = legend.fit;
    legend.fit = function () {
      originalFit.call(this);
      this.height += height;
    };
  },
});
