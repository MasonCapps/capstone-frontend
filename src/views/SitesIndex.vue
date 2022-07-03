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
    saveSiteId: function (site) {
      var siteId = site.id;
      this.$emit("site-id", siteId);
      this.$router.push(`/sites/dashboard/${site.id}`);
    },
    sitesDelete: function (site) {
      axios.delete(`/sites/${site.id}`).then((response) => {
        console.log(response.data);
        var deletedSiteId = site.id;
        this.sites = this.sites.filter((site) => site.id !== deletedSiteId);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="site in sites" v-bind:key="site.id">
      <button v-on:click="saveSiteId(site)">
        <h2>
          {{ site.name }}
        </h2>
      </button>
      <button v-on:click="$router.push(`/sites/${site.id}/edit`)">Change Name</button>
      <button v-on:click="sitesDelete(site)">Delete Site</button>
    </div>
    <router-link :to="{ path: '/sites/new' }"><button>Create Site</button></router-link>
  </div>
</template>

<style></style>
