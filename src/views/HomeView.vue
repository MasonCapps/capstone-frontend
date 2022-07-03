<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {
    signupRedirect: function () {
      this.$router.push("/signup");
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <button v-on:click="signupRedirect">Get Started</button>
  </div>
</template>

<style></style>
