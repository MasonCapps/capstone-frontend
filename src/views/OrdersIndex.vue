<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Orders",
      orders: [],
      newSiteParams: {},
      cartedServices: [],
    };
  },
  created: function () {
    this.ordersIndex();
    this.cartedServicesIndex();
  },
  methods: {
    ordersIndex: function () {
      axios.get(`/sites/${localStorage.creator_site}/orders.json`).then((response) => {
        console.log(response.data);
        this.orders = response.data;
      });
    },
    cartedServicesIndex: function () {
      axios.get(`/sites/${localStorage.creator_site}.json`).then((response) => {
        console.log(response.data);
        this.site = response.data;
        this.siteId = response.data.id;
        this.carted_services = this.site.carted_services;
        this.carted_services = this.carted_services.filter((service) => service.status === "purchased");
        console.log(this.carted_services);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="order in orders" v-bind:key="order.id">
      <h4>{{ order.first_name }} {{ order.last_name }}</h4>
      <h4>{{ order.phone_number }}</h4>
      <h4>{{ order.address }}</h4>
      <div v-for="(carted_service, index) in carted_services" v-bind:key="carted_service.id">
        <h4 v-if="index == 0">{{ carted_service.scheduled_date }}</h4>
      </div>
      <h4>{{ order.total }}</h4>
    </div>
  </div>
</template>

<style></style>
