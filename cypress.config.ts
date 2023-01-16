import { defineConfig } from "cypress";
import { TestFragment } from './utils'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:run', async () => {
        await TestFragment.killEvidences()
      })
    },
  },
});
