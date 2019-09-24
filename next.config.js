const withOffline = require("next-offline");

const nextConfig = {
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
  };

module.exports = withOffline(nextConfig);
