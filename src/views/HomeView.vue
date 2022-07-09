<script>
export default {
  data: function () {
    return {
      message: "Welcome to Servify!",
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
    <br />
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Basic Card Example</h6>
      </div>
      <div class="card-body">
        The styling for this basic card example is created by using default Bootstrap utility classes. By using utility
        classes, the style of the card component can be easily modified with no need for any custom CSS!
        <p></p>
        <a href="/signup" class="btn btn-primary col-lg-4">
          <span class="icon text-white-50">
            <!-- <i class="fas fa-flag"></i> -->
          </span>
          <span class="text">Get Started</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  text-align: center;
}
</style>
