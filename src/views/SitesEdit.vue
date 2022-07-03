<script>
import axios from "axios";

export default {
  data: function () {
    return {
      site: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/sites/" + this.$route.params.id + ".json").then((response) => {
      console.log(response.data);
      this.site = response.data;
    });
  },
  methods: {
    sitesUpdate: function () {
      axios
        .patch("/sites/" + this.site.id + ".json", this.site)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/sites`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="sitesUpdate()">
      <h1>Edit Site</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="site.name" />
      </div>
      <button v-on:click="$router.push(`/sites`)">Back To Sites</button>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
