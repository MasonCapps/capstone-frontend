<script>
import axios from "axios";

export default {
  data: function () {
    return {
      site: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/sites/" + this.$route.params.id + ".json").then((response) => {
      console.log(response.data);
      this.site = response.data;
    });
  },
  methods: {
    sitesUpdate: function () {
      axios
        .patch("/sites/" + this.site.id + ".json", this.site)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/sites`);
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
                <h1 class="h4 text-gray-900 mb-4">Change Site Name</h1>
              </div>
              <form v-on:submit.prevent="sitesUpdate()" class="user">
                <div class="form-group row">
                  <div class="col-sm-12 mb-3 mb-sm-0">
                    <input
                      type="text"
                      v-model="site.name"
                      class="form-control form-control-user"
                      id="exampleFirstName"
                      placeholder="Site Name"
                    />
                  </div>
                </div>
                <hr />
                <input type="submit" value="Save" href="/sites" class="btn btn-primary btn-user btn-block" />
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
    <form v-on:submit.prevent="sitesUpdate()">
      <h1>Edit Site</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="site.name" />
      </div>
      <button v-on:click="$router.push(`/sites`)">Back To Sites</button>
      <input type="submit" value="Submit" />
    </form>
  </div> -->
</template>
