<template>
    <b-container fluid>
      <b-row>
        <b-navbar
          class="header-main-menu"
          toggleable="lg"
          type="light"
        >
        sadfsd
        </b-navbar>
      </b-row>
    </b-container>          
        </template>


<!-- 
        <div
          class="col-md-3 mt-2 mb-2"
          v-for="(product, ind) in value.category_product"
          :key="'pr' + ind">  
          <div class="post-list">
            <div class="post-user">
              <div class="row">

                <div class="col-3">
                  <a href="">
                    <img
                      class="img-fluid rounded-circle"
                      src="https://construction.limmexbd.com/images/team-member/332c4652e41607cd1d48fe9b6e880e0e.jpg"
                      alt="User Avatar"
                    />
                  </a>
                </div>

                <div class="col-9">
                  <a href="" title="শাখাওয়াত  হোসেন" class="post-user-name"
                    >শাখাওয়াত হোসেন
                    <span
                      ><img
                        title="Verified Buyer"
                        class="img-responsive badge-image"
                        src="~/assets/images/category/1.jpg" alt="image">
                        </span
                  ></a>
                </div>
              </div>
              <hr />
            </div>
            <div class="post-list-image-box">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/0dcd422d2f63-6.png"
                class="img-fluid post-list-image"
              />
            </div>
            <div class="post-list-title text-center">
              <h5>আমার এই ব্যাগটি লাগবে</h5>
            </div>

            <div class="post-price-qty text-center">
              <div class="qty-title">
                <p>
                  {{ replaceNumbersE2B(Math.floor(Math.random() * 20)) }} পিস
                </p>
              </div>
              <div class="price-title">
                <p>
                  বাজেট:
                  <strong style="color: red">{{
                    replaceNumbersE2B(Math.floor(Math.random() * 2902))
                  }}</strong>
                  টাকা
                </p>
              </div>
            </div>
            <div class="demand-section text-center">
              <NuxtLink
                class="btn button-small primary-button bid-button"
                to="/"
              >
                বিড করুন
              </NuxtLink>
            </div>
          </div>
        </div> -->


      </b-row>

</template>



    
    <!-- <b-container>
        <b-row v-for="(value,index) in persons" :key="'person'+index">
            <div class="col-md-12 text-center" style="border-bottom : 1xp solid #fff">
            <h1 :style="{'color' : value.isAdmin ? 'green' : 'red' }">Name : {{ value.name }}</h1> <br>
            <button @click="toggleAdmin(index)" class="btn btn-success">
                <span v-if="value.isAdmin">Release</span>
                 <span v-else>Make Admin</span>
                 </button>
            <h1>Age :{{ value.age }}</h1> <br>
            <ul class="">
            <li v-for="(hobby,hobby_index) in value.hobby" :key="'hobby'+hobby_index">{{ hobby }}</li>
            </ul>
            </div>
    
        </b-row>
        
    </b-container>

</template> -->

<!-- <script> -->

<!-- export default {
    data() {
        return {
          persons : [
            {
            name : 'shakhwat',
            age : 20,
            isAdmin : true,
            hobby : ['cricket','football']
            } ,
            {
            name : 'jony',
            age : 25,
            isAdmin : false,
            hobby : ['badminton','cricket','football']
            } ,
            {
            name : 'arif',
            age : 35,
            isAdmin : true,
            hobby : ['bolyboll','cricket','football']
            } 
          ]
          
        }
    },

    methods : {
        toggleAdmin(index)
        {
            this.persons[index].isAdmin = !this.persons[index].isAdmin;
        }
    }
} -->
<!-- </script> -->
