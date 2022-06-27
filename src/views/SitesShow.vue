<script>
import axios from "axios";
export default {
  data: function () {
    return {
      site: {},
      services: [],
    };
  },
  created: function () {
    axios.get("/sites/" + this.$route.params.id + ".json").then((response) => {
      console.log(response.data);
      this.site = response.data;
      this.services = this.site.services;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <h1>{{ site.name }}</h1>
      <div v-for="service in services" v-bind:key="service.id">
        <h3>{{ service.name }}</h3>
        <p>Price: {{ service.price }}</p>
        <p>Frequency: {{ service.frequency }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
