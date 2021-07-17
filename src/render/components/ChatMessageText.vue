<template>
  <div v-if="side == 'left'">
    <div className="message-item">
      <div className="left-message-avatar">
        <img
          class="chat-message-avatar"
          :style="{ height: size + 'px' }"
          :src="avatar"
          alt="Load failure"
        />
      </div>
      <div className="left-message-bubble text-selectable">
        <div className="left-tri">
          <span></span>
        </div>
        <div className="left-message-text">{{ text }}</div>
      </div>
    </div>
  </div>

  <div v-if="side == 'right'">
    <div className="message-item">
      <div className="right-message-avatar">
        <img
          class="chat-message-avatar"
          :style="{ height: size + 'px' }"
          :src="avatar"
          alt="Load failure"
        />
      </div>
      <div className="right-message-bubble text-selectable">
        <div className="right-tri">
          <span></span>
        </div>
        <div className="right-message-text">{{text}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    size: {
      type: Number,
      default: 40,
    },
    type: {
      type: String,
      default: "text",
    },
    avatar: {
      type: String,
      default: "https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg",
    },
    text: {
      type: String,
      default: "message",
    },
    side: {
      type: String,
      default: "left",
    },
  },
})
export default class ChatMessageText extends Vue {
  height?: number;
  type?: string;
  avatar?: string;
  text?: string;
  side?: string;
  mounted() {
  }
}
</script>

<style lang="less" scoped>
.message-item {
  position: relative;
  display: block;
  width: 100%;
}

.left-message-avatar {
  position: relative;
  float: left;
  display: block;
  height: 40px;
  margin: 5px 10px 5px 20px;
  cursor: pointer;
}

.left-message-bubble {
  position: relative;
  float: left;
  display: block;
  max-width: calc(100% - 80px);
}

.left-message-bubble:hover {
  .left-message-text {
    background-color: darken(rgb(255, 255, 255), 5%);
  }

  .left-tri span {
    border-right-color: darken(rgb(255, 255, 255), 5%);
  }
}

.left-message-text {
  position: relative;
  display: inline-block;
  left: 0px;
  top: 0px;
  margin: 5px 5px 5px 0px;
  padding: 6px;
  width: 100%;

  color: #24292e;
  background-color: rgb(255, 255, 255);
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  cursor: text;
}

.left-tri {
  width: 0;
  height: 0;
  display: inline-block;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #e1e4e8;
  border-top: 6px solid transparent;
  position: absolute;
  margin: 10px auto;
  left: -5px;
  top: 5px;
}

.left-tri span {
  display: block;
  width: 0;
  height: 0;
  border-bottom: 4px solid transparent;
  border-right: 4px solid rgb(255, 255, 255);
  border-top: 4px solid transparent;
  position: absolute;
  left: 2px;
  top: -4px;
  z-index: 1;
}

.right-message-avatar {
  position: relative;
  float: right;
  display: block;
  height: 40px;
  margin: 5px 20px 5px 10px;
  cursor: pointer;
}

.right-message-bubble {
  position: relative;
  float: right;
  display: block;
  max-width: calc(100% - 80px);
}

.right-message-bubble:hover {
  .right-message-text {
    background-color: darken(rgb(158, 234, 106), 5%);
  }

  .right-tri span {
    border-left-color: darken(rgb(158, 234, 106), 5%);
  }
}

.right-message-text {
  position: relative;
  display: inline-block;
  left: 0px;
  top: 0px;
  margin: 5px 5px 5px 0px;
  padding: 6px;
  width: 100%;

  color: #24292e;
  background-color: rgb(158, 234, 106);
  border: 1px solid #e1e4e8;
  border-radius: 6px;
}

.right-tri {
  width: 0;
  height: 0;
  display: inline-block;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #e1e4e8;
  border-top: 6px solid transparent;
  position: absolute;
  margin: 10px auto;
  right: -5px;
  top: 5px;
}

.right-tri span {
  display: block;
  width: 0;
  height: 0;
  border-bottom: 4px solid transparent;
  border-left: 4px solid rgb(158, 234, 106);
  border-top: 4px solid transparent;
  position: absolute;
  right: 2px;
  top: -4px;
  z-index: 1;
}
</style>
