<template>
  <b-container class="mt-50 mb-50">
    <b-row>
      <div class="col-md-12 text-center">
        <h1>কিভাবে আপনি আমাদের সার্ভিস ব্যাবহার করবেন ?</h1>
      </div>
    </b-row>

    <b-row class="mt-30">
      <div class="col-md-4 text-center">
        <div class="service">
          <div class="service-image bg-purple">
            <img src="~/assets/images/services/icon-1.png" alt="Demand" />
            
          </div>
          <div class="content">
            <h2>ডিমান্ড করুন</h2>
            <p>
              ডিমান্ড করুন বাটনে ক্লিক করে প্রয়জনিয় তথ্য দিয়ে ফর্ম পূর্ণ করে
              ডিমান্ড পোষ্ট করুন
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="service">
          <div class="service-image bg-blue">
            <img src="~/assets/images/services/icon-2.png" alt="Demand" />
            
          </div>
          <div class="content">
            <h2>ডিমান্ড করুন</h2>
            <p>
              ডিমান্ড করুন বাটনে ক্লিক করে প্রয়জনিয় তথ্য দিয়ে ফর্ম পূর্ণ করে
              ডিমান্ড পোষ্ট করুন
            </p>
          </div>
        </div>
      </div>
  <div class="col-md-4 text-center">
        <div class="service">
          <div class="service-image bg-red">
            <img src="~/assets/images/services/icon-3.png" alt="Demand" />
            
          </div>
          <div class="content">
            <h2>ডিমান্ড করুন</h2>
            <p>
              ডিমান্ড করুন বাটনে ক্লিক করে প্রয়জনিয় তথ্য দিয়ে ফর্ম পূর্ণ করে
              ডিমান্ড পোষ্ট করুন
            </p>
          </div>
        </div>
      </div>
    </b-row>
  </b-container>
</template>


<style>
.service{
  background:#fff;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0);
  padding: 70px 30px;
  transition: 1s ease all;
  border-radius: 10px;
}
.service:hover{
  box-shadow: 0px 34px 90px 0px rgba(0, 0, 0, 0.1);

}
.service .service-image{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    line-height: 100px;
    border-radius: 8px;   
}
.service-image.bg-purple{
    background-color: rgba(190,99,249, 0.1);
}
 .service-image.bg-blue{
    background-color: rgba(29,196,217, 0.1);
}
 .service-image.bg-red{
    background-color: rgba(249,91,91, 0.1);
}
.service .content{
  margin-top:30px;
}
</style>

