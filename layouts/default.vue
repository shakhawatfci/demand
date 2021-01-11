<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-navbar
          class="header-main-menu"
          toggleable="lg"
          type="light"
        >
          <!-- <b-navbar-brand> -->
          <NuxtLink to="/">
            <img
              src="~/assets/images/logo_white.png"
              class="img-fluid ml-50"
              alt="Demandear"
              style="width: 86px;"
          /></NuxtLink>
          <!-- </b-navbar-brand> -->

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em class="text-white"
                    ><span v-if="$auth.loggedIn">{{ getUser.name }}</span>
                    <span v-else>Guest</span></em
                  >
                </template>
                <b-dropdown-item v-if="$auth.loggedIn" to="/dashboard"
                  >প্রোফাইল</b-dropdown-item
                >
                <b-dropdown-item v-if="!$auth.loggedIn" to="/login"
                  >লগিন</b-dropdown-item
                >
                <b-dropdown-item v-if="!$auth.loggedIn" to="/signup"
                  >রেজিস্ট্রেশন
                </b-dropdown-item>
                <b-dropdown-item v-if="$auth.loggedIn" @click.prevent="logout"
                  >Logout
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-row>
    </b-container>
    <Nuxt />

    <footer class="pb-80 pt-50">
      <div class="footer-bg"></div>
      <div class="primary-footer">
        <b-container>
          <b-row>
            <div class="pb-100 pt-50">
              <div class="col-md-6">
                <div class="f-about-us mt-30-xs">
                  <img
                    src="~/assets/images/logo-footer.png"
                    class="img-fluid"
                    alt="logo"
                  />
                  <p class="des">
                    ডিমান্ট বাটনে ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে র্ফম র্পূণ করে
                    ডিমান্ট পোষ্ট করুন ডিমান্ট বাটনে ক্লিক করে প্রয়োজনীয় তথ্য
                    দিয়ে র্ফম র্পূণ করে ডিমান্ট পোষ্ট করুনডিমান্ট বাটনে ক্লিক
                    করে প্রয়োজনীয় তথ্য দিয়ে
                  </p>
                  <div class="f-social">
                    <ul>
                      <li>
                        <a href="#"><i class="fb fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="lk fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="yt fab fa-youtube"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="ir fab fa-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="footer-menu mt-30-xs">
                  <h4>Product</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">What We Do?</a></li>
                    <li><a href="#">Who It Work?</a></li>
                    <li><a href="#">Consulting</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <div class="footer-menu mt-30-xs">
                  <h4>Product</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">What We Do?</a></li>
                    <li><a href="#">Who It Work?</a></li>
                    <li><a href="#">Consulting</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <div class="footer-menu mt-30-xs">
                  <h4>Product</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">What We Do?</a></li>
                    <li><a href="#">Who It Work?</a></li>
                    <li><a href="#">Consulting</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </b-row>

          <b-row>
            <div class="col-md-12">
              <div class="secondary-footer text-center pb-30">
                <a href="">@2021 rights resered by Limmex Automation</a>
              </div>
            </div>
          </b-row>
        </b-container>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  computed: {
    getUser() {
      return this.$store.state.auth.user;
    },
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>


<style >
</style>
