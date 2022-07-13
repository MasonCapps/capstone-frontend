<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Order History",
      orders: [],
      carted_services: [],
      site: {},
      siteId: "",
    };
  },
  created: function () {
    this.cartedServicesIndex();
    this.ordersIndex();
    console.log(this.orders);
    console.log(localStorage.user_id);
    console.log(localStorage.site_id);
  },
  methods: {
    cartedServicesIndex: function () {
      axios.get(`/sites/${localStorage.site_id}.json`).then((response) => {
        console.log(response.data);
        this.site = response.data;
        this.siteId = response.data.id;
        this.carted_services = this.site.carted_services;
        this.carted_services = this.carted_services.filter((service) => service.status === "purchased");
        this.carted_services = this.carted_services.filter((service) => service.user_id == localStorage.user_id);
        console.log(this.carted_services);
      });
    },
    ordersIndex: function () {
      axios.get(`/sites/${localStorage.site_id}/orders.json`).then((response) => {
        console.log(response.data);
        this.orders = response.data;
        this.orders = this.orders.filter((order) => order.user_id == localStorage.user_id);
        console.log(
          new Date(this.orders[0].created_at).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        );
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1 class="py-4 text-gray-900">{{ message }}</h1>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary" style="text-align: left">Previous Orders</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Purchase Date</th>
                <th>Scheduled Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(carted_service, index) in carted_services.reverse()" v-bind:key="carted_service.id">
                <td>
                  {{
                    new Date(this.orders[index].created_at).toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  }}
                </td>
                <td>{{ carted_service.scheduled_date }}</td>
                <td>{{ orders[index].total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <div v-for="(carted_service, index) in carted_services.reverse()" v-bind:key="carted_service.id">
      <h4>Scheduled Date: {{ carted_service.scheduled_date }}</h4>
      <h4>Created At: {{ orders[index].created_at }}</h4>
      <h4>Total: {{ orders[index].total }}</h4>
    </div> -->
    <button class="py-2 btn btn-sm btn-primary mb-3 col-5" v-on:click="this.$router.push(`/sites/${this.siteId}`)">
      Back To Site
    </button>
  </div>
</template>

<style></style>
