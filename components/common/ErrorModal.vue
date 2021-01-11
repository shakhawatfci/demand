<template>
  <transition name="modal">
    <b-modal id="errorModal">
      <div class="error">
        <ul>
          <li class="text-danger" v-for="error in errors" :key="error[0]">
            {{ error[0] }}
          </li>
        </ul>
      </div>
    </b-modal>
  </transition>
</template>
<script>
export default {
  props: ["errors"],
};
</script>