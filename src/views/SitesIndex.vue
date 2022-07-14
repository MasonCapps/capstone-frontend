<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Companies",
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
      localStorage.setItem("creator_site", site.id);
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
  <div id="home">
    <row>
      <h1 class="company py-4 text-gray-900">
        {{ message }}
      </h1>
      <button v-on:click="this.$router.push('/sites/new')" class="create-button py-2 btn btn-sm btn-primary mb-3 col-2">
        Create New Site
      </button>
    </row>
    <div v-for="site in sites.reverse()" v-bind:key="site.id">
      <div class="container card shadow mb-4 col-lg-8">
        <!-- Card Header - Dropdown -->
        <div class="card-shadow py-3 d-flex flex-row align-items-center justify-content-between col-lg-12">
          <button v-on:click="saveSiteId(site)" class="btn btn-lg btn-primary col-lg-10">
            <h6 class="m-0 font-weight-bold text-white">{{ site.name }}</h6>
          </button>
          <div class="dropdown no-arrow">
            <a
              class="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-left shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
              <div class="dropdown-header">Actions</div>
              <a class="dropdown-item" v-bind:href="`/sites/${site.id}/edit`">Change Name</a>
              <!-- <div class="dropdown-divider"></div> -->
              <a class="dropdown-item" v-on:click="sitesDelete(site)">Delete Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.create-button {
  display: inline-block;
  margin-left: 225px;
}
.company {
  display: inline-block;
  margin-left: 140px;
}
</style>
