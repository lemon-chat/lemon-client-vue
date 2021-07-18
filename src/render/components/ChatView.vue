<template>
  <div className="scrollable-container special-cursor">
    <div v-for="item in chatData" :key="item.id" class="message-line">
      <chat-message-text v-if="item.type=='text'" :avatar="item.avatar" :side="item.side" :message="item.message"/>
      <chat-message-time v-if="item.type=='time'" :time="item.time"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatMessageText from "./ChatMessageText.vue";
import ChatMessageTime from "./ChatMessageTime.vue";
@Options({
  components: {
    ChatMessageText,
    ChatMessageTime,
  },
})
export default class ChatView extends Vue {
  chatData = [
    {
      id: "8d6f0265-38c3-4a86-943d-d55c16b2a41f",
      type: "time",
      time: "11:30",
    },
    {
      id: "58c7cb11-ada7-4cae-99e0-b9b9490715a1",
      type: "text",
      avatar: "https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg",
      message: [
        {
          type: "image",
          url: "https://i.loli.net/2021/07/18/GKBaSsEcV8munYq.jpg",
          size: 64
        },
        {
          type: "text",
          text: "你好，我是夏幻",
        }
      ],
      side: "left",
    },
    {
      id: "e53b148a-7dd9-46fc-a9b1-bb680a17dd85",
      type: "text",
      avatar: "https://i.loli.net/2021/04/02/sNiK3VIt6GBmP4U.jpg",
      message: [
        {
          type: "text",
          text: "你好，我也是夏幻",
        }
      ],
      side: "right",
    },
    {
      id: "f460f6bd-f65f-4d18-93f1-c74e6c7a910c",
      type: "text",
      avatar: "https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg",
      message: [
        {
          type: "text",
          text: "真巧啊",
        }
      ],
      side: "left",
    }
  ];
}
</script>

<style scoped>
.chat-list {
    height: 100%;
}

.message-line {
  height: auto;
}

.scrollable-container {
    height: 100%;
    overflow: auto;
    padding: 10px 20px;
}

/* width */
.scrollable-container::-webkit-scrollbar {
    width: 10px;
}

/* Track */
.scrollable-container::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.scrollable-container::-webkit-scrollbar-thumb {
    background: #0000;
    border-radius: 5px;
}

/* Handle on hover */
.scrollable-container::-webkit-scrollbar-thumb:hover {
    background: #d5d5d5;
}
</style>
