// @ts-check
import { defineConfig } from "astro/config";

// Fully static output — deployed to both Vercel (root domain) and GitHub
// Pages (served under /Frank-s-website/, since the repo isn't a
// <user>.github.io repo). No adapter needed since there is no SSR; the
// contact form posts to a Google Apps Script endpoint from the client.
const ghPages = process.env.GH_PAGES === "true";

export default defineConfig({
  site: ghPages ? "https://frankzniu-bit.github.io" : "https://frank-s-website-nine.vercel.app",
  base: ghPages ? "/Frank-s-website/" : "/",
  prefetch: true,
});
