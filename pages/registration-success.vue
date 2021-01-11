<template>
  <div>
    <!-- import hero-area  -->
    <b-container fluid class="registration-hero-area">
      <b-row>
        <div
          class="col-md-10 mx-auto text-center"
          style="margin-top: 15%; margin-bottom: 15%"
        >
          <div class="top_div">
            <div>
              <h1 class="text-white">
                <strong>অভিনন্দন ! শাখাওয়াত হোসেন </strong>
              </h1>
              <h3 class="text-white mt-4">
                আপনার রেজিস্ট্রেশন সফল হয়েছে ধন্যবাদ আমাদের সাথে থাকুন
              </h3>
            </div>
            <div class="mt-5">
              <NuxtLink
                class="btn button-radious-50 button-big primary-button yallo-primary"
                to="/post-demand"
                >ডিমান্ড করুন</NuxtLink
              >
              <NuxtLink
                class="btn button-radious-50 button-big primary-button yallo-primary"
                to="/dashboard"
                >প্রোফাইল দেখুন
              </NuxtLink>

              <NuxtLink
                class="btn button-radious-50 button-big primary-button yallo-primary"
                to="/"
                >হোম পেজ
              </NuxtLink>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>
<style >
</style>
