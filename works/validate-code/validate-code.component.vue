<template>
  <v-ons-button modifier="material" style="width:106px;" @click="timeStart" :disabled="disabled">{{getText}}</v-ons-button>
</template>
<script>
export default {
  data: function() {
    return {
      text: "获取验证码",
      time: 60,
      phtime: 60,
      disabled: false
    };
  },
  props: ["propText", "propTime"],
  computed: {
    getText() {
      if (this.time === this.phtime) {
        return this.text;
      } else {
        return this.time + "s";
      }
    }
  },
  methods: {
    timeStart() {
      this.time--;
      this.disabled = !this.disabled;
      let timer = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          this.time = this.phtime;
          this.disabled = !this.disabled;
          clearInterval(timer);
        }
      }, 1000);
      this.$emit("transmit");
    }
  },
  beforeMount() {
    if (this.propTime !== undefined) this.time = this.phtime = this.propTime;
    if (this.propText !== undefined) this.text = this.propText;
  }
};
/* 
  可以传入 text 和 propTime 默认属性
  <validate-code text="获取授权码" :propTime="60" v-on:transmit="search" />

  search 为父组件的 执行方法， 必须
*/
</script>
