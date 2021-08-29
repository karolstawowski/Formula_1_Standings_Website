const { resolve } = require("path");
const { defineConfig } = require("vite");

export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
});
