import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",

    pool: "threads",
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },

    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});