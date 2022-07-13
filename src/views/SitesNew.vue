<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newSiteParams: {},
      newServiceParams: {},
      errors: [],
      checker: false,
    };
  },
  created: function () {},
  methods: {
    sitesCreate: function () {
      axios
        .post("/sites.json", this.newSiteParams)
        .then((response) => {
          console.log(response.data);
          axios.post(`/sites/${response.data.id}/services`, this.newServiceParams).then((response) => {
            console.log(response.data);
            this.$router.push("/sites");
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <!-- <div class="col-lg-5 d-none d-lg-block bg-register-image"></div> -->
          <div class="col-lg-12">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create Site</h1>
              </div>
              <form v-on:submit.prevent="submit()" class="user">
                <div class="form-group row">
                  <div class="col-sm-12 mb-3 mb-sm-0">
                    <input
                      type="text"
                      v-model="newSiteParams.name"
                      class="form-control form-control-user"
                      id="exampleFirstName"
                      placeholder="Site Name"
                    />
                  </div>
                </div>
                <hr />
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Add Primary Service</h1>
                </div>
                <div class="form-group row">
                  <div class="col-sm-4">
                    <input
                      type="text"
                      v-model="newServiceParams.name"
                      class="form-control form-control-user"
                      id="exampleLastName"
                      placeholder="Service Name"
                    />
                  </div>
                  <input
                    type="email"
                    v-model="newServiceParams.price"
                    class="form-control form-control-user col-sm-4"
                    id="exampleInputEmail"
                    placeholder="Price in Dollars"
                  />
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <input
                      type="password"
                      v-model="newServiceParams.frequency"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Frequency"
                    />
                  </div>
                </div>
                <hr />
                <input type="submit" value="Create Site" href="/sites" class="btn btn-primary btn-user btn-block" />
                <br />
                <div class="text-center">
                  <a class="small" href="/sites">Back To Sites</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="signup">
    <h1>Create Site</h1>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <div>
      <label>Site Name:</label>
      <input type="text" v-model="newSiteParams.name" />
    </div>
    <h1>Add Primary Service</h1>
    <div>
      <div>
        <label>Service Name:</label>
        <input type="text" v-model="newServiceParams.name" />
      </div>
      <div>
        <label>Price in Dollars:</label>
        <input type="text" v-model="newServiceParams.price" />
      </div>
      <div>
        <label>Frequency:</label>
        <input type="text" v-model="newServiceParams.frequency" />
      </div>
    </div>
    <button v-on:click="this.$router.push('/sites')">Cancel</button>
    <button v-on:click="sitesCreate()">Create Site</button>
  </div> -->
</template>

<style></style>
