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
    <div class="py-4">
      <h1 class="py-2 text-gray-900">{{ message }}</h1>
      <h6>
        <pre
          style="font-family: Helvetica, Arial, sans-serif; margin-left: 50px"
          class="text-primary col-lg-10 container-custom text-gray-900"
        >
          The first <span style="color: #4e73df">business facing</span> and <span style="color: #4e73df">consumer facing</span> platform built directly for <span style="color: #4e73df">service businesses.</span>
        </pre>
      </h6>
    </div>
    <br />
    <div class="container py-3 card shadow mb-4 col-lg-10">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Mission</h6>
      </div>
      <div class="card-body">
        The biggest leap for a service business to make in order to scale to the size of their dreams is to grow a
        virtual consumer base that requires less hands on maintenance. Our goal is to help service businesses take that
        leap by allowing them to quickly create an online marketplace showcasing their services. Our hope is that this
        tool will finally grant service business owners the power they need to take that next step into the world of
        digital marketing.
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
.container-custom {
  display: flex;
  justify-content: center;
}
</style>
