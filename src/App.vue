<template>
  <div id="root">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// 自定义css
html,
body,
#root, #app {
  margin: 0;
  padding: 0;
  font-family: Apple System, "Microsoft YaHei", "SF Pro SC", "SF Pro Display",
    "Helvetica Neue", "Arial", "PingFang SC", "Hiragino Sans GB", "STHeiti",
    "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC",
    "Source Han Sans CN", sans-serif;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

// 禁止文本选择
:not(input):not(textarea),
:not(input):not(textarea)::after,
:not(input):not(textarea)::before {
  -webkit-user-select: none;
  user-select: none;
}

// 允许文本选择
.text-selectable > div {
  user-select: text !important;
  cursor: text !important;
}

// 禁止按钮描边
input,
button,
textarea,
:focus {
  outline: none;
}

// 禁止图片拖动
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

:not(.special-cursor *):not(input):not(textarea),
:not(.special-cursor *):not(input):not(textarea)::after,
:not(.special-cursor *):not(input):not(textarea)::before{
  cursor: default !important;
}

// 提示 Toaster
.gui-toaster {
  top: 4% !important;
}

// 隐藏显示组件
.component-hidden {
  display: none;
}

.component-visible {
  display: block;
}

// 垂直布局
div.vertical-aliment-container {
  display: flex;
  align-items: center;
}
</style>
