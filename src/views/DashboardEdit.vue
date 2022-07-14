<script>
import axios from "axios";
export default {
  props: ["siteId"],
  data: function () {
    return {
      site: {},
      services: [],
      currentService: {},
      newServiceParams: {},
    };
  },
  created: function () {
    axios.get("/sites/" + this.siteId + ".json").then((response) => {
      console.log(response.data);
      this.site = response.data;
      this.services = this.site.services;
    });
  },
  methods: {
    editModalService: function (service) {
      this.currentService = service;
      document.querySelector("#service-edit").showModal();
    },
    addModalService: function () {
      document.querySelector("#service-add").showModal();
    },
    updateService: function (currentService) {
      axios
        .patch(`/sites/${this.siteId}/services/${currentService.id}`, this.currentService)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    createService: function () {
      axios.post(`/sites/${this.siteId}/services`, this.newServiceParams).then((response) => {
        console.log(response.data);
        this.services.push(response.data);
        this.newServiceParams = {};
      });
    },
    deleteService: function (service) {
      axios.delete(`/sites/${this.siteId}/services/${service.id}`).then((response) => {
        console.log(response.data);
        var deletedServiceId = service.id;
        this.services = this.services.filter((service) => service.id !== deletedServiceId);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="col-xl-3 col-md-12 mb-4">
      <div class="card border-left-info shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="font-weight-bold text-info text-uppercase mb-1">Site URL:</div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">localhost:8080{{ `/sites/${this.siteId}` }}</div>
            </div>
            <div class="col-auto">
              <i class="fas fa-info-circle fa-2x i-button"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1>{{ message }}</h1>
    <div>
      <div class="col-lg-12" style="margin-left: -150px">
        <h1 class="company py-4 text-gray-900 col-4">
          {{ site.name }}
        </h1>
        <button
          style="margin-right: -100px"
          class="create-button py-2 btn btn-sm btn-primary mb-3 col-2"
          v-on:click="addModalService()"
        >
          Add Service
        </button>
      </div>
      <div class="col-lg-12" style="margin: 45px; margin-top: -10px">
        <div class="row" style="margin: 10px">
          <div
            style="margin: 10px"
            class="card shadow mb-4 col-lg-5 py-3 justify-content-between"
            v-for="service in services"
            v-bind:key="service.id"
          >
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">{{ service.name }}</h6>
            </div>
            <div class="card-body">
              <div>Price: ${{ service.price }}</div>
              <div>Frequency: {{ service.frequency }}</div>
              <hr />
              <div>
                <button
                  style="margin: 5px"
                  class="py-2 btn btn-sm btn-danger mb-3 col-5"
                  v-on:click="deleteService(service)"
                >
                  Delete Service
                </button>
                <button
                  style="margin: 5px"
                  class="py-2 btn btn-sm btn-primary mb-3 col-5"
                  v-on:click="editModalService(service)"
                >
                  Edit Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-for="service in services" v-bind:key="service.id">
        <h3>{{ service.name }}</h3>
        <p>Price: ${{ service.price }}</p>
        <p>Frequency: {{ service.frequency }}</p>
        <button v-on:click="editModalService(service)">Edit Service</button>
        <button v-on:click="deleteService(service)">Delete Service</button>
      </div> -->
    </div>
  </div>

  <dialog id="service-add" style="margin-left: 419px; width: 500px">
    <form method="dialog">
      <div>
        <h1 style="text-align: center">Create Service</h1>
        <div style="text-align: center">
          Service Name:
          <input type="text" v-model="this.newServiceParams.name" />
        </div>
        <div style="text-align: center">
          Price in Dollars:
          <input type="text" v-model="this.newServiceParams.price" />
        </div>
        <div style="text-align: center">
          Frequency:
          <input type="text" v-model="this.newServiceParams.frequency" />
        </div>
        <br />
        <div style="text-align: center">
          <button style="margin: 5px" class="py-2 btn btn-sm btn-danger mb-3 col-5">Cancel</button>
          <button style="margin: 5px" class="py-2 btn btn-sm btn-primary mb-3 col-5" v-on:click="createService()">
            Create
          </button>
        </div>
      </div>
    </form>
  </dialog>

  <dialog id="service-edit" style="margin-left: 419px; width: 500px">
    <form method="dialog">
      <h1 style="text-align: center">Edit Service</h1>
      <div>
        <div style="text-align: center">
          Service Name:
          <input type="text" v-model="this.currentService.name" />
        </div>
        <div style="text-align: center">
          Price in Dollars:
          <input type="text" v-model="this.currentService.price" />
        </div>
        <div style="text-align: center">
          Frequency:
          <input type="text" v-model="this.currentService.frequency" />
        </div>
      </div>
      <br />
      <div style="text-align: center">
        <button style="margin: 5px" class="py-2 btn btn-sm btn-danger mb-3 col-5">Cancel</button>
        <button
          style="margin: 5px"
          class="py-2 btn btn-sm btn-primary mb-3 col-5"
          v-on:click="updateService(currentService)"
        >
          Save
        </button>
      </div>
    </form>
  </dialog>
</template>

<style>
.i-button {
  color: #36b9cc;
}
.create-button {
  display: inline-block;
}
.company {
  display: inline-block;
}
</style>
