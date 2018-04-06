<template>
  <div class="hello">
    <input
      v-model="msg"
      type="text">
    <h1 v-if="hasMessage">
      {{ msg }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '',
    };
  },
  computed: {
    hasMessage() {
      return this.msg !== '';
    }
  },
}
</script>
