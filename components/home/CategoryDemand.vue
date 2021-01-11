{<template>
  <b-container>
    <div v-for="(value, index) in category_post_list" :key="'cat-post' + index">
      <b-row>
        <div class="col-md-12 mt-5">
          <div class="cate-heading">
            <div class="cate-title">
              <h3>{{ value.name }}</h3>
            </div>
            <div class="ca-btn float-r">
              <a href="" class="button button-xs bg-opacity-purple color-purple"
                >সব দেখুন</a
              >
            </div>
          </div>
          <hr />
        </div>
      </b-row>

      <b-row class="mb-30">
        <div
          class="col-md-3"
          v-for="(demand, ind) in value.latestDemand"
          :key="'pr' + ind"
        >
          <div class="category-list">
            <div class="post-author">
              <a href="#">
                <img
                  class="img-fluid rounded-circle author-img"
                  src="~/assets/images/testimonial/cate-author-1.png"
                  alt="User Avatar"
                />
              </a>
              <span>{{ demand.user.name.split(" ")[0] }}</span>
              <img
                class="img-fluid cate-badge"
                src="~/assets/images/badge/1.png"
                alt="author badge"
              />
              <img
                class="img-fluid cate-badge"
                src="~/assets/images/badge/2.png"
                alt="author badge"
              />
              <img
                class="img-fluid cate-badge"
                src="~/assets/images/badge/3.png"
                alt="author badge"
              />
            </div>
            <!-- end author -->
            <div class="post-image">
              <img
                class="img-fluid"
                :src="demand.image_one_medium"
                :alt="demand.title"
              />
            </div>
            <!-- post image -->
            <div class="content clearfix">
              <div class="title">
                <h3>{{ demand.title }}</h3>
              </div>
              <div class="price-item">
                <span class="item">
                  {{ replaceNumbersE2B(demand.quantity) }}
                  {{ demand.quantity_unit.name }}</span
                >
                <span class="price float-r" v-if="demand.budget_type">
                  {{ replaceNumbersE2B(demand.minimum_budget) }} -
                  {{ replaceNumbersE2B(demand.maximum_budget) }} ৳</span
                >
                <span class="price float-r" v-else> নেগেশিয়েবল </span>
              </div>
              <div class="cate-btn">
                <a href="" class="button button-sm color-purple w-100 bg-gray"
                  >বিড করুন
                </a>
              </div>
            </div>
          </div>
        </div>
      </b-row>
    </div>
    <div class="mt-3">
      <div class="row">
        <div class="col-12 text-center">
          <a
            href=""
            @click.prevent="loadMore()"
            class="btn button-small primary-button bid-button"
            >আরো লোড করুন
          </a>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      category_post_list: [],
    };
  },
  mounted() {
    this.getCategoryDemand();
  },
  methods: {
    getCategoryDemand(page = 1) {
      this.$axios.$get("/category-demand?page=" + page).then((response) => {
        this.category_post_list = response.data;
      });
    },
    // loadMore() {
    //   let randomIndex = Math.floor(Math.random() * 5);
    //   this.category_post_list.push(this.category_post_list[randomIndex]);
    // },
  },
};
</script>

