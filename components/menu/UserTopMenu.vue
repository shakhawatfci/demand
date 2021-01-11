<template >
  <div>
    <b-container fluid>
      <b-row>
        <b-navbar
          class="header-main-menu mb-30"
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

          <b-collapse class="usertopmenu" id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <img src="~/assets/images/user/1.jpg" class="img-fluid">
                  <em class="text-white"
                    ><span v-if="$auth.loggedIn">{{ $auth.user.name }}</span>
                    <span v-else>Guest</span></em>
                </template>
                
                <template #button-content1>
                    <img src="~/assets/images/user/1.jpg" class="img-fluid">
                  <em class="text-white"
                    ><span v-if="$auth.loggedIn">{{ $auth.user.name }}</span>
                    <span v-else>Guest</span></em>
                </template>

                <b-dropdown-item v-if="$auth.loggedIn" to="/dashboard"
                  >প্রোফাইল</b-dropdown-item
                >
                <b-dropdown-item  to="/dashboard/mybid"
                  >Mybid</b-dropdown-item
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
  </div>
</template>


<script>
export default {

}
</script>

<style scoped>
.header-main-menu {
    position: inherit !important;
    top: 0;
    z-index: 10;
    width: 100%;
    background: rgba(222,32,106);
}
.usertopmenu img{
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%
}
</style>