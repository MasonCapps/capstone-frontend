<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Sites",
      sites: [],
      newSiteParams: {},
    };
  },
  created: function () {
    this.sitesIndex();
  },
  methods: {
    sitesIndex: function () {
      axios.get("/sites.json").then((response) => {
        console.log(response.data);
        this.sites = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="site in sites" v-bind:key="site.id">
      <h2>{{ site.name }}</h2>
      <button v-on:click="$router.push(`/sites/${site.id}/edit`)">Edit Site</button>
    </div>
    <router-link :to="{ path: '/sites/new' }"><button>Create Site</button></router-link>
  </div>
</template>

<style></style>
