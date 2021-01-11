<template>
<b-container>
<b-row>
    <div class="col-md-12">
    <div class="category-form mt-50 mb-30">
      <b-form inline>
              <input
                v-model="form.categories"
                type="text"
                class="input-form form-control mr-10"
                placeholder="ক্যাটেগরি"
              />
              <input
              v-model="form.area"
              type="text"
              class="input-form form-control mr-10"
              placeholder="লোকেশন">
              <input
                v-model="form.categories"
                type="text"
                class="input-form form-control mr-10"
                placeholder="ক্যাটেগরি"
              />
              <input
              v-model="form.area"
              type="text"
              class="input-form form-control mr-10"
              placeholder="লোকেশন">
              </b-form>
              
     </div>


    </div>
</b-row>


    
<div v-for="(value, index) in category_post_list" :key="'cat-post' + index">
<b-row>
<div class="col-md-3 mb-15 mt-15"
      v-for="(product, ind) in value.category_product"
      :key="'pr' + ind"> 
<div class="category-list">
<div class="post-author">
<a href="#">
  <img
    class="img-fluid rounded-circle author-img"
      src="~/assets/images/testimonial/cate-author-1.png"
        alt="User Avatar"/>
              </a>
              <span>শাখাওয়াত হোসেন </span>
                <img
                  class="img-fluid cate-badge"
                  src="~/assets/images/badge/1.png" 
                  alt="author badge"/> 
                <img
                  class="img-fluid cate-badge"
                  src="~/assets/images/badge/2.png" 
                  alt="author badge"/>
                <img
                  class="img-fluid cate-badge"
                  src="~/assets/images/badge/3.png" 
                  alt="author badge"/>  
  </div>
        <!-- end author -->
  <div class="post-image">
    <img class="img-fluid" src="~/assets/images/category/3.jpg" alt="post image">
  </div>
  <!-- post image -->
  <div class="content clearfix">

    <div class="title">
      <h3>আমার এই ব্যাগটি লাগবে</h3>
    </div>
      <div class="price-item">
        <span class="item">
          {{replaceNumbersE2B(Math.floor(Math.random()* 8))}} পিস</span>
        <span class="price float-r"> 
          {{replaceNumbersE2B(Math.floor(Math.random() * 20))}}
            <img class="img-fluid" src="~/assets/images/taka-symbol.svg"></span>
      </div>
      <div class="cate-btn">
        <a href="" class="button button-sm color-purple w-100 bg-gray">বিড  করুন </a>
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
 form: {
    categories: "",
    area: "",
  },
  category_post_list: [
    {
      id: 1,
      category_product: [1, 2, 3, 4,5,6, 7, 8, 9, 10,11,12],
    },
  ],
};
},
methods: {
loadMore() {
  let randomIndex = Math.floor(Math.random() * 5);
  this.category_post_list.push(this.category_post_list[randomIndex]);
},
},
};
</script>

<style>
.header-main-menu {
    position: inherit !important;
    top: 0;
    z-index: 10;
    width: 100%;
    background: rgba(218, 47, 118);
}
</style>