<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newSiteParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    sitesCreate: function () {
      axios
        .post("/sites.json", this.newSiteParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/sites");
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
    <form v-on:submit.prevent="sitesCreate()">
      <h1>Create Site</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newSiteParams.name" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style></style>
