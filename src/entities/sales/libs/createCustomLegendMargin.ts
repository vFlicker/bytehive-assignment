import { Plugin } from 'chart.js';

export const createCustomLegendMargin = (height: number): Plugin<'line'> => ({
  id: 'customLegendMargin',
  beforeInit({ legend }) {
    if (!legend) return;
    const originalFit = legend.fit;
    legend.fit = function extendedFit() {
      originalFit.call(this);
      this.height += height;
    };
  },
});
