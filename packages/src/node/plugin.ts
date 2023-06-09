import type { Plugin } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

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
   * 已复制字体
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

export const CodeCopyPulgin = ({
  copyText = 'Copy',
  copiedText = 'Copied',
  selector = 'div[class*="language-"]',
  pageDelay = 300,
  color = 'var(--code-ln-color)',
}: CopyPulginOptions = {}): Plugin => ({
  name: 'vuepress-code-copy',
  define: {
    __COPY_COPYTEXT__: copyText,
    __COPY_COPIEDTEXT__: copiedText,
    __COPY_SELECTOR__: selector,
    __COPY_PAGEDELAY__: pageDelay,
    __COPY_COLOR__: color,
  },
  clientConfigFile: path.resolve(__dirname, '../client/config.js'),
})
