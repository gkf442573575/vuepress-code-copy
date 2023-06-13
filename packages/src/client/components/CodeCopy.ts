import { usePageData } from '@vuepress/client'
import { useClipboard, useEventListener } from '@vueuse/core'
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { copiedText, copyText, pageDelay, selector, color } from '../define.js'

export const CodeCopy = defineComponent({
  name: 'CodeCopy',
  setup(props, ctx) {
    const page = usePageData()
    const { copy } = useClipboard()
    const timeId = ref<number>(0)
    const copyHandler = async (
      codeContent: HTMLPreElement,
      el: HTMLElement
    ) => {
      let { innerText: text = '' } = codeContent
      text = text.replace(/^ *(\$|>) /gm, '')
      try {
        await copy(text)
        const dataExt = el.getAttribute('data-ext') || ''
        el.innerText = dataExt ? `${copiedText} | ${dataExt}` : copiedText
        timeId.value = window.setTimeout(() => {
          el.innerText = dataExt ? `${copyText} | ${dataExt}` : copyText
        }, 500)
      } catch (error) {
        console.log('copy error', error)
      }
    }

    const insertButton = async () => {
      await nextTick()
      setTimeout(() => {
        const allCodeHtml = document.querySelectorAll<HTMLElement>(selector)
        for (let i = 0; i < allCodeHtml.length; i++) {
          const parent = allCodeHtml[i]
          const dataExt = parent.getAttribute('data-ext') || ''
          // 如果有选项提出
          if (parent.querySelector('.code-copy-btn')) {
            continue
          }
          const copyHtml = document.createElement('span')
          copyHtml.className = 'code-copy-btn'
          copyHtml.innerText = dataExt ? `${copyText} | ${dataExt}` : copyText
          // 设置文字颜色
          copyHtml.style.color = color
          copyHtml.setAttribute('data-ext', dataExt)
          parent.appendChild(copyHtml)
        }
      }, pageDelay | 300)
    }

    onMounted(() => {
      insertButton()

      useEventListener('click', (event: Event) => {
        const el = event.target as HTMLElement
        if (el.matches(`${selector} > span.code-copy-btn`)) {
          // 点击复制按钮
          const parentHtml = <HTMLElement | null>el.parentElement
          const preHtml = <HTMLPreElement | null>(
            parentHtml?.querySelector('pre')
          )
          if (timeId.value) {
            clearTimeout(timeId.value)
          }
          if (el.innerText === copiedText) {
            // 如果当前是已复制状态
            return
          }
          if (preHtml) {
            copyHandler(preHtml, el)
          }
        }
      })
    })

    watch(
      () => page.value.path,
      (val) => {
        insertButton()
      }
    )
  },
})

export default CodeCopy
