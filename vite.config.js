import { defineConfig } from "vite";
import webExtension from "vite-plugin-web-extension";
import fs from "fs";

// Custom plugin to update manifest.json version
function updateManifestVersion() {
  return {
    name: "update-manifest-version",
    buildStart() {
      const packageJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
      const manifestPath = "src/manifest.json";
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

      manifest.version = packageJson.version;

      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    },
  };
}

export default defineConfig({
  plugins: [
    webExtension({
      manifest: "src/manifest.json",
    }),
    updateManifestVersion(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: true,
    minify: false,
  },
});
