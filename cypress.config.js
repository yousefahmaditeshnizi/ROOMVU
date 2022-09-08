let defineConfig;
({defineConfig} = require("cypress"));

module.exports = defineConfig({
  projectId: 'd1f9uv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
