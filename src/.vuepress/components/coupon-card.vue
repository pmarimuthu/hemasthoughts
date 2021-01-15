<template>
  <div>
    <input type="text" v-model="couponTitle" />
    <p>Coupon Title: {{ couponTitle }}</p>
    <div class="flex">
      <label class="flex items-center">
        <t-checkbox name="options" value="a" checked />
        <span class="ml-2 text-sm">Option A</span>
      </label>
      <label class="flex items-center ml-2">
        <t-checkbox name="options" value="b" />
        <span class="ml-2 text-sm">Option B</span>
      </label>
    </div>
  </div>
</template>

<script>
import VueTailwind from "vue-tailwind";
import { TCheckbox } from 'vue-tailwind/dist/components'

export default {
  name: "CouponCard",
  beforeMount() {
    console.log("before mounted >>");
  },

  mounted() {
    console.log("mounted >>");
  },

  data() {
    return {
      couponTitle: "Hello World",
    };
  },
};

Vue.use(VueTailwind)

</script>