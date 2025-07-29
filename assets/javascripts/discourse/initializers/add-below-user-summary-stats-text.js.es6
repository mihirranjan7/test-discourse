import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "add-below-user-summary-stats-text",

  initialize() {
    withPluginApi("0.8.31", api => {
      api.decorateWidget('below-user-summary-stats:after', dec => {
        return dec.h('BelowUserSummaryStatsText');
      });
    });
  }
};
