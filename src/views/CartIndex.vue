<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Cart",
      carted_services: [],
      site: {},
      newSiteParams: {},
    };
  },
  created: function () {
    this.cartedServicesIndex();
  },
  methods: {
    cartedServicesIndex: function () {
      axios.get("/sites/" + localStorage.site_id + "/carted_services.json").then((response) => {
        console.log(response.data);
        this.carted_services = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="carted_service in carted_services" v-bind:key="carted_service.id">
      <h2>{{ carted_service.service.name }}</h2>
      <h2>{{ carted_service.scheduled_date }}</h2>
      <h2>{{ carted_service.service.price }}</h2>
      <h2>{{ carted_service.service.frequency }}</h2>
      <button>Delete From Cart</button>
    </div>
    <button v-on:click="createOrder()">Checkout</button>
  </div>
</template>

<style></style>
