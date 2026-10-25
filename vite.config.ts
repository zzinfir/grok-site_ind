import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// @ts-expect-error JS plugin alongside the TS vite config
import { grokPwaPlugin } from "./scripts/grok-pwa-plugin.mjs";
// @ts-expect-error JS plugin alongside the TS vite config
import { appEnvPlugin } from "./scripts/app-env-plugin.mjs";

/**
 * Publish a static site only: HTML, CSS, and JS. No serverless function,
 * no SSR, no database. `serverDir: "./server"` is intentionally not wired —
 * this landing has no application server.
 */
function staticPublishPlugin(): Plugin {
  return {
    name: "app-builder:static-publish",
    apply: "build",
    closeBundle() {
      const output = join(process.cwd(), ".vercel/output");
      rmSync(join(output, "functions"), { recursive: true, force: true });
      rmSync(join(output, "nitro.json"), { force: true });
      mkdirSync(output, { recursive: true });
      writeFileSync(
        join(output, "config.json"),
        JSON.stringify({
          version: 3,
          routes: [{ handle: "filesystem" }, { src: "/(.*)", dest: "/index.html" }],
        }),
      );
    },
  };
}

// `0.0.0.0:8080` is the live-preview contract — don't change host/port.
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },
  build: {
    outDir: ".vercel/output/static",
    emptyOutDir: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [appEnvPlugin(), grokPwaPlugin(), tailwindcss(), viteReact(), staticPublishPlugin()],
});
