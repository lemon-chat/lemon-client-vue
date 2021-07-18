<template>
  <div className="message-time-item">
    <div className="message-time-text">{{time}}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    time: {
      type: String,
      default: "00:00",
    },
  },
  components: {
  },
})
export default class ChatMessageTime extends Vue {
  time?: string;
}
</script>

<style lang="less" scoped>
.message-time-item {
    position: relative;
    display: inline-block;
    width: 100%;
    text-align:center;

    &>.message-time-text {
        display: inline;
        border: none;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(218, 218, 218);
        color: rgb(255, 255, 255);
        padding: 2px 5px;
    }
}
</style>
