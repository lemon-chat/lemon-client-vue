<template>
  <div style="height: 100vh, width: 100%">
        <div :style="{width: leftWidth + 'px'}" class="chat-sider">
            <ContactList></ContactList>
        </div>
        <div :style="{marginLeft: leftWidth + 'px'}" className="chat-right-panel">
            <div class="chat-header">
                <div className="chat-header-text special-cursor">
                    柠檬咕咕幼儿园
                    <span className="chat-header-icon-wrapper">
                        <EllipsisOutlined className="chat-inputarea-icon" style="fontSize: 28px"/>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import { NButton } from 'naive-ui'

@Options({
  components: {
    NButton
  }
})
export default class Chat extends Vue {
    leftWidth: number | null = null
    mounted () {
      this.leftWidth = 250
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../styles/main.less";
.chat-right-panel {
    float: left;
    position: relative;
    width: 100%;
    height: 100vh;
}

.chat-sider {
    background-color: #e6e5e5;
    position: fixed;
    top:0;
    left:0;
    bottom:0;
}

.chat-header {
    background-color: @medium-color;
    border-color: #e8e8e8;
    border-width: 1px;
    border-style: solid;
    height: 60px;
}

.chat-header-text {
    padding: 10px 10px 10px 30px;
    font-family: 'PingFang SC';
    font-size: 18px;
    font-weight: bold;
}

.chat-content-panel {
    position: relative;
    height: calc(100% - 64px);
    background-color: @medium-color;
    top: 0px;
    left: 0px;
    width: 100%;
}

.chat-input {
    position: relative;
    min-height: 50px;
    width: 100%;
    height: 100%;
}

.chat-input-panel {
    position: relative;
    min-height: 50px;
    width: 100%;
}

.chat-header-icon-wrapper {
    float: right;
    position: relative;
    padding: 5px;
    cursor: pointer;
}

.chat-header-icon-wrapper:hover>.chat-inputarea-icon * {
    color: #6a6a6a;
}
</style>
