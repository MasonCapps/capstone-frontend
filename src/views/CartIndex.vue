<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Cart",
      carted_services: [],
      site: {},
      newSiteParams: {},
      siteId: localStorage.site_id,
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
    deleteCartedService: function (carted_service) {
      axios.delete(`/sites/${carted_service.site_id}/carted_services/${carted_service.id}`).then((response) => {
        console.log(response.data);
        var deletedCartedServiceId = carted_service.id;
        this.carted_services = this.carted_services.filter(
          (carted_service) => carted_service.id !== deletedCartedServiceId
        );
      });
    },
    createOrder: function () {
      axios.post(`/sites/${localStorage.site_id}/orders.json`).then((response) => {
        console.log(response.data);
        this.$router.push("/orders-history");
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1 class="py-4 text-gray-900">{{ message }}</h1>
    <div class="col-lg-12" style="margin: 45px; margin-top: -10px">
      <div class="row" style="margin: 10px">
        <div
          style="margin: 10px"
          class="row card shadow py-3 mb-4 col-lg-5"
          v-for="carted_service in carted_services"
          v-bind:key="carted_service.id"
        >
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">{{ carted_service.service.name }}</h6>
          </div>
          <div class="card-body">
            <div>Scheduled Date: {{ carted_service.scheduled_date }}</div>
            <div>Price: ${{ carted_service.service.price }}</div>
            <div>Frequency: {{ carted_service.service.frequency }}</div>
            <hr />
            <div>
              <button class="py-2 btn btn-sm btn-danger mb-3 col-8" v-on:click="deleteCartedService(carted_service)">
                Remove From Cart
              </button>
            </div>
          </div>
        </div>
        <button
          style="margin: 10px"
          class="py-2 btn btn-sm btn-primary mb-3 col-lg-2"
          v-on:click="this.$router.push(`/sites/${this.siteId}`)"
        >
          Back To Site
        </button>
        <button
          style="margin: 10px; margin-left: 413px"
          class="py-2 btn btn-sm btn-primary mb-3 col-lg-2"
          v-on:click="createOrder()"
        >
          Checkout
        </button>
      </div>
    </div>
    <!-- <div v-for="carted_service in carted_services" v-bind:key="carted_service.id">
      <h2>{{ carted_service.service.name }}</h2>
      <h2>{{ carted_service.scheduled_date }}</h2>
      <h2>{{ carted_service.service.price }}</h2>
      <h2>{{ carted_service.service.frequency }}</h2>
      <button v-on:click="deleteCartedService(carted_service)">Delete From Cart</button>
    </div>
    <button v-on:click="this.$router.push(`/sites/${this.siteId}`)">Back To Site</button>
    <button v-on:click="createOrder()">Checkout</button> -->
  </div>
</template>

<style></style>
