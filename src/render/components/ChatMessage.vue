<template>
  <chat-message-text v-if="type=='text'" :size="height" :avatar="avatar" :text="text" :side="side"/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatMessageText from "./ChatMessageText.vue";
@Options({
  props: {
    height: {
      type: Number,
      default: 32,
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
  components: {
    ChatMessageText,
  },
})
export default class ChatMessage extends Vue {
  height?: number;
  type?: string;
  avatar?: string;
  text?: string;
  side?: string;
  mounted() {
      console.log(this.type)
  }
}
</script>

<style scoped>
.chat-message-avatar {
  border-radius: 50%;
}
.chat-message {
}
</style>
