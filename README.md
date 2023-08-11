# Vuepress Code Copy

### Code Copy Plugin For Vuepress2.X

[![NpmVersion](https://img.shields.io/npm/v/vuepress-code-copy.svg)](https://www.npmjs.com/package/vuepress-code-copy)
![npm](https://img.shields.io/npm/dw/vuepress-code-copy.svg)

### Example

[![vuepress-code-copy.png](https://i.postimg.cc/1Xg9gmb1/vuepress-code-copy.png)](https://postimg.cc/zHrm6rJx)

### Install

```bash
npm i vuepress-code-copy --save-dev
# or
yarn add vuepress-code-copy --save-dev
```

### Use

<b>.vuepress/config.ts</b>

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