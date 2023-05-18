import { defineClientConfig } from '@vuepress/client'
import { CodeCopy } from './components/index.js'

import './styles/index.css'

export default defineClientConfig({
  rootComponents: [ CodeCopy ],
})
