<template>
  <div>
    <p style="text-align: center">
      ~~!~~ <br>
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PoweredBy',

  data() {
    return {
      msg: "Powered by VuePress!!",
    };
  },
};
</script>
