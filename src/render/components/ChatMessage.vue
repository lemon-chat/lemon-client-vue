<template>
  <chat-message-text v-if="type=='text'" :size="height" :avatar="avatar" :text="text" :side="side"/>
  <chat-message-time v-if="type=='time'" :time="text"/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatMessageText from "./ChatMessageText.vue";
import ChatMessageTime from "./ChatMessageTime.vue";
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
    ChatMessageTime,
  },
})
export default class ChatMessage extends Vue {
  height?: number;
  type?: string;
  avatar?: string;
  text?: string;
  side?: string;
  mounted() {
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
