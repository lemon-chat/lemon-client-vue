<template>
  <div>
    This is an example, {{msg}}
    <n-button type="primary">naive-ui</n-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import { NButton } from 'naive-ui'

@Options({
  props: {
    msg: String
  },
  components: {
    NButton
  }
})
export default class Example extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
