<template>
  <p style="text-align: right">
    {{ msg }}
  </p>
  <h2>Subscription Form</h2>
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
        msg: 'Subscribe to receive our news letters'
      }
    }
  }
</script>
