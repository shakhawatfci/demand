
<template>
  <div class="user-profile">
    <UserTopMenu />
    <b-container>
      <b-row>
        <div class="col-lg-3">
          <!-- components/user/usermenu  -->
          <UserMenu></UserMenu>
        </div>
        <div class="col-lg-9 col-sm-12">
          <Nuxt />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UserTopMenu from "~/components/menu/UserTopMenu.vue";

export default {
  middleware: "auth",
};
</script>


