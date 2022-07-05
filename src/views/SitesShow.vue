<script>
import axios from "axios";
export default {
  data: function () {
    return {
      site: {},
      services: [],
      newCartParams: {},
    };
  },
  created: function () {
    axios.get("/sites/" + this.$route.params.id + ".json").then((response) => {
      console.log(response.data);
      this.site = response.data;
      this.services = this.site.services;
      localStorage.setItem("site_id", this.site.id);
    });
  },
  methods: {
    createCartedService: function (service) {
      this.newCartParams.service_id = service.id;
      this.newCartParams.user_id = 2;
      axios.post(`/sites/${this.site.id}/carted_services.json`, this.newCartParams).then((response) => {
        console.log(response.data);
        this.newCartParams = {};
      });
    },
  },
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
        <div>
          Date of Service:
          <input type="text" v-model="newCartParams.scheduled_date" />
        </div>
        <br />
        <button v-on:click="createCartedService(service)">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<style></style>
