<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Orders",
      orders: [],
      newSiteParams: {},
    };
  },
  created: function () {
    this.ordersIndex();
  },
  methods: {
    ordersIndex: function () {
      axios.get("/sites/1/orders.json").then((response) => {
        console.log(response.data);
        this.orders = response.data;
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
      <h4>{{ order.total }}</h4>
    </div>
  </div>
</template>

<style></style>
