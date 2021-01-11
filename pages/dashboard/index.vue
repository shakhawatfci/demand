<template>
  <b-container class="deshboard ">
    <b-row class="mb-30">
      <div class="col-lg-3 col-sm-3 xs-mb15">
        <div class="list bg-green-op">
          <h1>10</h1>
          <span >Demand /Bid</span>
        </div>
      </div>
      <div class="col-lg-3 col-sm-3 xs-mb15">
        <div class="list bg-red-op">
        <h1>10</h1>
          <span >Total Demand / Bid</span>
        </div>
      </div>
      <div class="col-lg-3 col-sm-3 xs-mb15">
        <div class="list bg-purple-op">
        <h1>10</h1>
          <span >Demand / Bid</span>
        </div>
      </div>
      <div class="col-lg-3 col-sm-3 xs-mb15">
        <div class="list bg-blue-op">
          <h1>৳ 735</h1>
          <span >Total Credit</span>
        </div>
        </div>
      </b-row>
      <!-- end dashboard card -->
     <b-row cols="6">
           <b-col cols="5">
             <div class="bid-listing">
               <div class="title">
            Information
               </div>
            <div class="seller p20">
            <a href="#">
              <img
                class="img-fluid rounded-circle author-img"
                src="~/assets/images/testimonial/seller.jpg"
                alt="User Avatar"
              />
            </a>
            <div class="content">
              <h3 class="name">শাখাওয়াত হোসেন</h3>
              <span class="titl">শাখাওয়াত হোসেন </span>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
          </div>
           </b-col><!-- bid profile -->
           <b-col>
             <div class="title">
            Total Bid
               </div>
         </b-col>
            <b-col>
                  <div class="title">
            Shortlist
               </div>
           </b-col>
           <b-col>
                 <div class="title">
             Final List
               </div>
           </b-col>
            <b-col>
                  <div class="title">
               Reject
               </div>
           </b-col>
            <b-col>
                  <div class="title">
           Action
               </div>
           </b-col>
  </div>
     </b-row>
<br>
    <b-row>
      <div class="col-lg-12 col-sm-12">
        <div class="user-info table-responsive mt15">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col" colspan="2">User Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Name:</td>
                <td>Customers</td>
              </tr>
              <tr>
                <td scope="row">Email:</td>
                <td>customer@limmerz.com</td>
              </tr>
              <tr>
                <td scope="row">Phone:</td>
                <td>01301270204</td>
              </tr>
              <tr>
                <td scope="row">Address:</td>
                <td>lorem ispum odlor</td>
              </tr>
            </tbody>
          </table>
          <a
            href="http://limmerz.limmexbd.com/profile/update"
            class="button button-sm bg-dark2 color-white"
          >
            Edit</a
          >
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: "dashboard",

  computed: {
    // getUser() {
    //   return this.$store.state.auth.user;
    // },
  },
};
</script>

<style scoped>
.bid-listing .title{
     background-color: #e9ecef;
    padding: 5px;
}
</style>
