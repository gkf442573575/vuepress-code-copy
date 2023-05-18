import CodeCopyPulgin from "vuepress-code-copy";
import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: process.env.NODE_ENV === "development" ? "/" : "/vuepress-code-copy/",
  title: "CodeCopy",
  description: "Code Copy Plugin For Vuepress2.X",
  theme: defaultTheme({
    repo: "https://github.com/gkf442573575/vuepress-code-copy.git",
  }),
  plugins: [CodeCopyPulgin()],
});
