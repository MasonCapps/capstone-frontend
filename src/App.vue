/* eslint-disable prettier/prettier */
<script>
export default {
  props: ["siteId"],
  data: function () {
    return {
      isLoggedIn: false,
      currentSiteId: "",
      localStorageSiteId: "",
      localStorageCreatorSiteId: "",
    };
  },
  created: function () {
    this.localStorageSiteId = localStorage.site_id;
    console.log(this.localStorageSiteId);
    this.localStorageCreatorSiteId = localStorage.creator_site;
    localStorage.site;
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
  methods: {
    updateSiteId: function (siteId) {
      console.log(siteId);
      this.currentSiteId = siteId;
      localStorage.setItem("site", siteId);
      console.log(localStorage.site);
    },
  },
};
</script>

<template>
  <!-- <nav
    v-if="
      this.$route.path === `/sites/${this.localStorageSiteId}` ||
      this.$route.path === '/orders-history' ||
      this.$route.path === '/carted_services'
    "
  >
    <router-link :to="`/sites/${this.localStorageSiteId}`">Home</router-link>
    |
    <router-link to="/carted_services">Cart</router-link>
    |
    <router-link to="/orders-history">Order History</router-link>
    |
    <div v-if="!isLoggedIn">
      <router-link to="/signup-customer">Signup</router-link>
      |
      <router-link to="/login-customer">Login</router-link>
    </div>
    <router-link to="/logout-customer" v-if="isLoggedIn">Logout</router-link>
  </nav>
  <nav
    v-if="
      this.$route.path.slice(0, this.$route.path.lastIndexOf('/')) === '/sites/dashboard' ||
      this.$route.path === '/orders' ||
      this.$route.path === '/schedule'
    "
  >
    <router-link to="/sites">Sites</router-link>
    |
    <router-link :to="`/sites/dashboard/${this.currentSiteId}`">Dashboard</router-link>
    |
    <router-link to="/orders">Orders</router-link>
    |
    <router-link to="/schedule">Schedule</router-link>
    |
    <router-link to="/logout">Logout</router-link>
  </nav>
  <nav
    v-if="
      this.$route.path.slice(0, this.$route.path.lastIndexOf('/')) !== '/sites/dashboard' &&
      this.$route.path !== '/orders' &&
      this.$route.path !== '/schedule' &&
      this.$route.path !== '/sites/1' &&
      this.$route.path !== '/signup-customer' &&
      this.$route.path !== '/login-customer' &&
      this.$route.path !== '/carted_services'
    "
  >
    <div
      id="link"
      v-if="
        isLoggedIn && this.$route.path !== `/sites/${this.localStorageSiteId}` && this.$route.path !== '/orders-history'
      "
    >
      <router-link to="/sites">Sites</router-link>
      |
      <router-link to="/logout">Logout</router-link>
    </div>
    <div v-if="!isLoggedIn" id="link">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/login">Login</router-link>
    </div>
  </nav> -->
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">Servify</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li v-if="this.$route.path === '/sites'" class="nav-item active">
      <a v-if="isLoggedIn" class="nav-link" href="/sites">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Home</span>
      </a>
      <a v-if="!isLoggedIn" class="nav-link" href="/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Home</span>
      </a>
    </li>
    <li v-if="this.$route.path !== '/sites'" class="nav-item">
      <a v-if="isLoggedIn" class="nav-link" href="/sites">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Home</span>
      </a>
      <a v-if="!isLoggedIn" class="nav-link" href="/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Home</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- <div v-if="currentSiteId"> -->
    <!-- Heading -->
    <div class="sidebar-heading">Moderate</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li v-if="this.$route.path == `/sites/dashboard/${this.currentSiteId}`" class="nav-item active">
      <a class="nav-link" v-bind:href="`/sites/dashboard/${this.currentSiteId}`">
        <i class="fas fa-fw fa-cog"></i>
        <span>Dashboard</span>
      </a>
    </li>
    <li v-if="this.$route.path != `/sites/dashboard/${this.currentSiteId}`" class="nav-item">
      <a class="nav-link" v-bind:href="`/sites/dashboard/${this.currentSiteId}`">
        <i class="fas fa-fw fa-cog"></i>
        <span>Dashboard</span>
      </a>
    </li>

    <!-- Nav Item - Utilities Collapse Menu -->
    <li v-if="this.$route.path === `/sites/dashboard/${this.currentSiteId}/edit`" class="nav-item active">
      <a class="nav-link" v-bind:href="`/sites/dashboard/${this.currentSiteId}/edit`">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Edit Site</span>
      </a>
    </li>
    <li v-if="this.$route.path !== `/sites/dashboard/${this.currentSiteId}/edit`" class="nav-item">
      <a class="nav-link" v-bind:href="`/sites/dashboard/${this.currentSiteId}/edit`">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Edit Site</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />
    <!-- </div> -->

    <!-- Heading -->
    <div class="sidebar-heading">Account</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a v-if="!isLoggedIn" class="nav-link" href="/signup">
        <i class="fas fa-fw fa-folder"></i>
        <span>Register</span>
      </a>
      <!-- <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <a class="collapse-item" href="login.html">Login</a>
            <a class="collapse-item" href="register.html">Register</a>
            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <a class="collapse-item" href="404.html">404 Page</a>
            <a class="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div> -->
    </li>

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <a v-if="!isLoggedIn" class="nav-link" href="/login">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Login</span>
      </a>
    </li>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <a v-if="isLoggedIn" class="nav-link" href="/logout">
        <i class="fas fa-fw fa-table"></i>
        <span>Logout</span>
      </a>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    <!-- Sidebar Message -->
    <!-- <div class="sidebar-card d-none d-lg-flex">
      <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
      <p class="text-center mb-2">
        <strong>SB Admin Pro</strong>
        is packed with premium features, components, and more!
      </p>
      <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
    </div> -->
  </ul>
  <!-- End of Sidebar -->
  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <!-- Topbar -->
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <!-- Sidebar Toggle (Topbar) -->
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
          <i class="fa fa-bars"></i>
        </button>

        <!-- Topbar Search -->
        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <!-- Topbar Navbar -->
        <ul class="navbar-nav ml-auto">
          <!-- Nav Item - Search Dropdown (Visible Only XS) -->
          <!-- <li class="nav-item dropdown no-arrow d-sm-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-search fa-fw"></i>
            </a> -->
          <!-- Dropdown - Messages -->
          <!-- <div
              class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div> -->
          <!-- </li> -->

          <!-- Nav Item - Alerts -->
          <!-- <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-bell fa-fw"></i> -->
          <!-- Counter - Alerts -->
          <!-- <span class="badge badge-danger badge-counter">3+</span>
            </a> -->
          <!-- Dropdown - Alerts -->
          <!-- <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 class="dropdown-header">Alerts Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-primary">
                    <i class="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 12, 2019</div>
                  <span class="font-weight-bold">A new monthly report is ready to download!</span>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-success">
                    <i class="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-warning">
                    <i class="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your account.
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div>
          </li> -->

          <!-- Nav Item - Messages -->
          <!-- <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-envelope fa-fw"></i> -->
          <!-- Counter - Messages -->
          <!-- <span class="badge badge-danger badge-counter">7</span>
            </a> -->
          <!-- Dropdown - Messages -->
          <!-- <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 class="dropdown-header">Message Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="font-weight-bold">
                  <div class="text-truncate">
                    Hi there! I am wondering if you can help me with a problem I've been having.
                  </div>
                  <div class="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="img/undraw_profile_2.svg" alt="..." />
                  <div class="status-indicator"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    I have the photos that you ordered last month, how would you like them sent to you?
                  </div>
                  <div class="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="img/undraw_profile_3.svg" alt="..." />
                  <div class="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Last month's report looks great, I am very happy with the progress so far, keep up the good work!
                  </div>
                  <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even
                    if they aren't good...
                  </div>
                  <div class="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
            </div>
          </li> -->

          <div class="topbar-divider d-none d-sm-block"></div>

          <!-- Nav Item - User Information -->
          <div v-if="isLoggedIn">
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="mr-2 d-none d-lg-inline text-gray-600 small"></span>
                <img class="img-profile rounded-circle" src="img/undraw_profile.svg" />
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <!-- <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a> -->
                <!-- <div class="dropdown-divider"></div> -->
                <a
                  class="dropdown-item"
                  href="/logout"
                  data-toggle="modal"
                  data-target="#logoutModal"
                  v-on:click="this.$router.push('/logout')"
                >
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
          </div>
          <div v-if="!isLoggedIn">
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="mr-2 d-none d-lg-inline text-gray-600 small"></span>
                <img class="img-profile rounded-circle" src="img/undraw_profile.svg" />
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <!-- <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a> -->
                <!-- <div class="dropdown-divider"></div> -->
                <a
                  class="dropdown-item"
                  href="/login"
                  data-toggle="modal"
                  data-target="#logoutModal"
                  v-on:click="this.$router.push('/login')"
                >
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Login
                </a>
              </div>
            </li>
          </div>
        </ul>
      </nav>
      <!-- End of Topbar -->
      <div class="container-fluid">
        <router-view @site-id="updateSiteId" />
      </div>
    </div>
  </div>
</template>

<style></style>
