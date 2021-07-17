import '@src/common/patch'
import { createApp } from 'vue'
import App from './App.vue'
import fs = require('fs')
import { ipcRenderer } from 'electron'
import Store from 'electron-store'
import './index.css'

import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from "./routes"

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

setTimeout(() => {
  console.log('ipcRenderer:', ipcRenderer)
  // Configuration name causes hot updates to be slow | 传递 name 后会导致热更新很慢
  // console.log('electron-store', new Store({ name: 'electron-vue' })) 
  // https://github.com/caoxiemeihao/electron-vue-vite/issues/10
  console.log('electron-store', new Store())

  // new Store 会阻塞线程，导致 preload 动画卡顿
}, 2999)

const app = createApp(App)
app.use(router)
app.mount('#app').$nextTick(window.removeLoading)
