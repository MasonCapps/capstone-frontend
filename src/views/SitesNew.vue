<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newSiteParams: {},
      newServiceParams: {},
      errors: [],
      checker: false,
    };
  },
  created: function () {},
  methods: {
    sitesCreate: function () {
      axios
        .post("/sites.json", this.newSiteParams)
        .then((response) => {
          console.log(response.data);
          axios.post(`/sites/${response.data.id}/services`, this.newServiceParams).then((response) => {
            console.log(response.data);
            this.$router.push("/sites");
          });
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
    <h1>Create Site</h1>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <div>
      <label>Site Name:</label>
      <input type="text" v-model="newSiteParams.name" />
    </div>
    <h1>Add Primary Service</h1>
    <div>
      <div>
        <label>Service Name:</label>
        <input type="text" v-model="newServiceParams.name" />
      </div>
      <div>
        <label>Price in Dollars:</label>
        <input type="text" v-model="newServiceParams.price" />
      </div>
      <div>
        <label>Frequency:</label>
        <input type="text" v-model="newServiceParams.frequency" />
      </div>
    </div>
    <button v-on:click="this.$router.push('/sites')">Cancel</button>
    <button v-on:click="sitesCreate()">Create Site</button>
  </div>
</template>

<style></style>
