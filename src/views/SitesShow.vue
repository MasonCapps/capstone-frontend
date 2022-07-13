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
      <h1 style="text-align: center" class="py-4 text-gray-900">{{ site.name }}</h1>
      <div class="col-lg-12" style="margin: 45px; margin-top: -10px">
        <div class="row" style="margin: 10px">
          <div
            style="margin: 10px"
            class="card shadow py-3 mb-4 col-lg-5"
            v-for="service in services"
            v-bind:key="service.id"
          >
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">{{ service.name }}</h6>
            </div>
            <div class="card-body">
              <p>Price: {{ service.price }}</p>
              <p>Frequency: {{ service.frequency }}</p>
              <div>
                Date of Service:
                <input class="col-6" type="text" v-model="newCartParams.scheduled_date" />
              </div>
              <hr />
              <button class="py-2 btn btn-sm btn-primary mb-3 col-6" v-on:click="createCartedService(service)">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-for="service in services" v-bind:key="service.id">
        <h3>{{ service.name }}</h3>
        <p>Price: {{ service.price }}</p>
        <p>Frequency: {{ service.frequency }}</p>
        <div>
          Date of Service:
          <input type="text" v-model="newCartParams.scheduled_date" />
        </div>
        <br />
        <button v-on:click="createCartedService(service)">Add To Cart</button>
      </div> -->
    </div>
  </div>
</template>

<style>
.create-button {
  display: inline-block;
}
.company {
  display: inline-block;
}
</style>
