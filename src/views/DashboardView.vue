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
  },
};
</script>

<template>
  <div class="home">
    <h3>Site URL: localhost:8080{{ `/sites/${this.siteId}` }}</h3>
    <h1>{{ message }}</h1>
    <div>
      <h1>{{ site.name }}</h1>
      <button v-on:click="addModalService()">Add Service</button>
      <div v-for="service in services" v-bind:key="service.id">
        <h3>{{ service.name }}</h3>
        <p>Price: ${{ service.price }}</p>
        <p>Frequency: {{ service.frequency }}</p>
        <button v-on:click="editModalService(service)">Edit Service</button>
      </div>
    </div>
  </div>

  <dialog id="service-add">
    <form method="dialog">
      <div>
        <h1><u>Create Service</u></h1>
        <div>
          <label>Service Name:</label>
          <input type="text" v-model="this.newServiceParams.name" />
        </div>
        <div>
          <label>Price in Dollars:</label>
          <input type="text" v-model="this.newServiceParams.price" />
        </div>
        <div>
          <label>Frequency:</label>
          <input type="text" v-model="this.newServiceParams.frequency" />
        </div>
        <br />
        <div>
          <button>Cancel</button>
          <button v-on:click="createService()">Create</button>
        </div>
      </div>
    </form>
  </dialog>

  <dialog id="service-edit">
    <form method="dialog">
      <h1><u>Edit Service</u></h1>
      <div>
        <div>
          <label>Service Name:</label>
          <input type="text" v-model="this.currentService.name" />
        </div>
        <div>
          <label>Price in Dollars:</label>
          <input type="text" v-model="this.currentService.price" />
        </div>
        <div>
          <label>Frequency:</label>
          <input type="text" v-model="this.currentService.frequency" />
        </div>
      </div>
      <br />
      <div>
        <button>Cancel</button>
        <button v-on:click="updateService(currentService)">Save</button>
      </div>
    </form>
  </dialog>
</template>

<style></style>
