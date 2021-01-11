<template>
  <b-container>
    <b-row class="mt-50 mb-50">
      <div class="col-lg-3 col-sm-12 author-position d-none d-sm-block">
        <div class="author-heading">
          <h2>কাস্টমার রিভিউ</h2>
          <p>
            ডিমান্ট বাটনে ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে র্ফম র্পূণ করে ডিমান্ট
            পোষ্ট করুন
          </p>
        </div>
      </div>
      <div class="col-lg-7 col-sm-12 offset-lg-2">
        <div class="testimonial-author text-center">
          <div class="author">
            <img
              src="~/assets/images/testimonial/1.jpg"
              class="img-fluid"
              alt="author"
            />
          </div>
          <div class="content">
            <p>{{ ratings[currentIndex].content }}</p>
          </div>
          <div class="slider-nav">
            <a href="" @click.prevent="previousIndex" class="prev">
              <i class="fas fa-angle-left"></i>
            </a>
            <a href="" @click.prevent="nextIndex" class="next">
              <i class="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      ratings: [
        {
          id: 1,
          customer_name: "আরিফ খান",
          content:
            "1 ডিমান্ট বাটনে ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে র্ফম র্পূণ করে ডিমান্ট পোষ্ট করুন ডিমান্ট বাটনে ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে র্ফম র্পূণ করে ডিমান্ট পোষ্ট  করুনডিমান্ট বাটনে ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে র্ফম র্পূণ করে ডিমান্ট পোষ্ট করুনডিমান্ট বাটনে ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে র্ফম র্পূণ করে ডিমান্ট পোষ্ট করুন",
          image: "image.jpeg",
        },
        {
          id: 2,
          customer_name: "ইমরান এক্সনি",
          content:
            "2 ডিমান্ট বাটনে ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে র্ফম র্পূণ করে ডিমান্ট পোষ্ট করুন ডিমান্ট বাটনে ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে র্ফম র্পূণ করে ডিমান্ট পোষ্ট  করুন ",
          image: "image.jpeg",
        },

        {
          id: 3,
          customer_name: "সাঈদ এক্সনি",
          content:
            "3 ইনপুট সরঞ্জামগুলি ওয়েবে যেকোনো স্থানে আপনার পছন্দের ভাষা টাইপ করা আরো সহজ করে তোলে৷ আরো জানুন এটি ব্যবহার করে দেখতে, নীচে আপনার ভাষা এবং ইনপুট সরঞ্জাম চয়ন করুন এবং টাইপ করা শুরু করুন৷  ",
          image: "image.jpeg",
        },
      ],
    };
  },
  methods: {
    previousIndex() {
      let totalRating = this.ratings.length;
      if (totalRating <= 0) {
        return false;
      }
      if (this.currentIndex <= 0) {
        this.currentIndex = totalRating - 1;
      } else {
        this.currentIndex -= 1;
      }
    },
    nextIndex() {
      let totalRating = this.ratings.length;
      if (totalRating <= 0) {
        return false;
      }
      if (this.currentIndex >= totalRating - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
    },
  },
};
</script>
