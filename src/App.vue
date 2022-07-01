<script>
export default {
  props: ["siteId"],
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
  created: function () {
    console.log(this.siteId);
  },
};
</script>

<template>
  <nav v-if="this.$route.path === '/sites/1'">
    <router-link to="/carted_services">Cart</router-link>
    |
    <div v-if="!isLoggedIn">
      <router-link to="/signup-customer">Signup</router-link>
      |
      <router-link to="/login-customer">Login</router-link>
    </div>
    <router-link to="/logout-customer" v-if="isLoggedIn">Logout</router-link>
  </nav>
  <nav
    v-if="
      this.$route.path.slice(0, this.$route.path.lastIndexOf('/')) === '/sites/dashboard' ||
      this.$route.path === '/orders' ||
      this.$route.path === '/schedule'
    "
  >
    <router-link to="/sites">Sites</router-link>
    |
    <router-link :to="`/sites/dashboard/${siteId}`">Dashboard</router-link>
    |
    <router-link to="/orders">Orders</router-link>
    |
    <router-link to="/schedule">Schedule</router-link>
    |
    <router-link to="/logout">Logout</router-link>
  </nav>
  <nav
    v-if="
      this.$route.path.slice(0, this.$route.path.lastIndexOf('/')) !== '/sites/dashboard' &&
      this.$route.path !== '/orders' &&
      this.$route.path !== '/schedule' &&
      this.$route.path !== '/sites/1' &&
      this.$route.path !== '/signup-customer' &&
      this.$route.path !== '/login-customer' &&
      this.$route.path !== '/carted_services'
    "
  >
    <router-link to="/">Home</router-link>
    |
    <router-link to="/sites">Sites</router-link>
    |
    <router-link to="/sites/:id">Show Site</router-link>
    |
    <router-link to="/sites/new">New Site</router-link>
    |
    <router-link to="/sites/dashboard">Dashboard</router-link>
    |
    <div v-if="!isLoggedIn">
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/login">Login</router-link>
    </div>
    <router-link to="/logout" v-if="isLoggedIn">Logout</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
