<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Orders",
      orders: [],
      newSiteParams: {},
      cartedServices: [],
      ordersTotal: 0,
    };
  },
  mounted: function () {
    this.ordersIndex();
    this.cartedServicesIndex();
  },
  methods: {
    ordersIndex: function () {
      axios.get(`/sites/${localStorage.creator_site}/orders.json`).then((response) => {
        console.log(response.data);
        this.orders = response.data;
        // this.orders = this.orders.filter((order) => order.total > 0);
        for (let index = 0; index < this.orders.length; index++) {
          this.ordersTotal += parseInt(this.orders[index].total);
        }
        this.ordersTotal = this.ordersTotal.toFixed(2);
        console.log("test", this.ordersTotal);
      });
    },
    cartedServicesIndex: function () {
      axios.get(`/sites/${localStorage.creator_site}.json`).then((response) => {
        console.log(response.data);
        this.site = response.data;
        this.siteId = response.data.id;
        this.carted_services = this.site.carted_services;
        this.carted_services = this.carted_services.filter((service) => service.status === "purchased");
        this.carted_services = this.carted_services.reverse();
        console.log(this.carted_services);
      });
    },
  },
};
</script>

<template>
  <div id="content">
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i class="fas fa-download fa-sm text-white-50"></i>
          Generate Report
        </a> -->
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Total)</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">${{ ordersTotal }}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Orders (Total)</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{ orders.length }}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Row -->
      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Orders</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Service Name</th>
                  <th>Scheduled Date</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody v-for="order in orders" v-bind:key="order.id">
                <!-- <div v-for="service in order.services" v-bind:key="service.id"> -->
                <tr>
                  <td>{{ order.first_name }} {{ order.last_name }}</td>
                  <td>{{ order.address }}</td>
                  <td>{{ order.phone_number }}</td>
                  <!-- <td>{{ service.service }}</td> -->
                  <!-- <td>{{ service.scheduled_date }}</td> -->
                  <td>{{ order.total }}</td>
                </tr>
                <!-- </div> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
    <!-- End of Main Content -->
  </div>
</template>

<style></style>
