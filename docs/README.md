---
home: true
title: Home
---

### Install

```bash
npm i vuepress-code-copy --save-dev
# or
yarn add vuepress-code-copy --save-dev
```

### Use
 
```ts
import CodeCopyPulgin from 'vuepress-code-copy'

export default defineUserConfig({
  //
  plugins:[
    CodeCopyPulgin(options: CopyPulginOptions),
  ]
})
```

### PulginOptions

```ts
export interface CopyPulginOptions {
  /**
   * copy btn text
   *
   * 复制按钮字体
   * @default 'Copy'
   */
  copyText?: string
  /**
   * copied text
   *
   * 复制成功字体
   * @default 'Copied'
   */
  copiedText?: string
  /**
   * code selector
   *
   * code的选择器
   * @default 'div[class*="language-"]'
   */
  selector?: string
  /**
   * page delay (ms)
   *
   * 页面的延时 (ms)
   * @default 300
   */
  pageDelay?: number
  /**
   * copy text color
   *
   * 字体颜色
   * @default 'var(--code-ln-color)'
   */
  color?: string
}
```