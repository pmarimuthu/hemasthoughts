<template>
  <p style="text-align: right">
    {{ msg }}
  </p>
</template>

<script>
  export default {
    setup() {
      const count = ref(0)

      watchEffect(() => {
        console.log(count.value)
      })
    },

    data() {
      return {
        msg: 'Powered by VuePress + Vue.js'
      }
    }
  }
</script>
