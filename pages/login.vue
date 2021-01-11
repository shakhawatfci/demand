<template>
  <div>
    <b-container>
      <b-row class="mt-100 mb-100 mt-50-m mb-50-m">
        <div class="col-md-5 mr-auto mt-5 pl-0 text-center">
          <div class="demand-image float-left">
            <img src="~/assets/images/registation.svg" class="img-fluid mt-5" />
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <div class="title text-center">
            <h2 class="text-black">লগিন</h2>
            <p>খুলে যাক ব্যবসার সকল দুয়ার</p>
          </div>
          <hr class="w-50" />
          <div class="step step1 mt-50 mb-50" v-if="otpStatus == 0">
            <div class="form-group">
              <label class="font-600 mb-5" for="">আপনার মোবাইল নাম্বার দিন *</label>
              <input
                v-model="form.mobile_no"
                type="text"
                class="input-form form-control"
                placeholder="আপনার মোবাইল নাম্বার দিন  "
              />
            </div>
          </div>
          <div class="step step1 text-center" v-if="otpStatus == 1">
            <div class="form-group">
              <p for="">আপনার মোবাইল নাম্বারে পাঠানো ওটিপি কোড দিন *</p>
              <v-otp-input
                ref="otpInput"
                input-classes="form-control otp-control m5 text-center"
                separator="-"
                :num-inputs="4"
                :should-auto-focus="true"
                :is-input-num="true"
                @on-complete="setOtpCode"
                style="display: inline-flex"
              />
            </div>
            <div class="form-group">
              <a href="" v-if="countDown > 0">
                {{ replaceNumbersE2B(countDown) }} সেকেন্ডের মধ্যে কোড দিন</a
              >
              <a href="" v-else>আবার কোড পাঠান</a>
              <p>
                <a
                  class="color-dark-blue text-underline"
                  href=""
                  @click.prevent="otpStatus = 0"
                  >অথবা মোবাইল নাম্বার পৰিবৰ্তন করুন</a
                >
              </p>
            </div>
          </div>

          <div class="form-group">
            <a
              v-if="otpStatus == 0"
              class="btn button-small primary-button bid-button w-100"
              @click.prevent="sendOTP"
            >
              কন্টিনিউ <span v-if="sending_otp">....</span>
            </a>
            <button
              v-if="otpStatus == 1"
              @click="login"
              class="btn button-small primary-button bid-button w-100"
            >
              কন্টিনিউ
            </button>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  data() {
    return {
      form: {
        mobile_no: "",
        otp_code: "",
      },
      otpStatus: 0,
      countDown: 120,
      sending_otp: false,
    };
  },
  methods: {
    sendOTP() {
      // this.testMethod();
      this.sending_otp = true;
      this.$axios
        .$post("/login/otp", this.form)
        .then((response) => {
          this.sending_otp = false;
          if (response.status === "success") {
            this.otpStatus = 1;
            this.countDown = 120;
            this.form.otp_code = "";
            this.countDownTimer();
          }
        })
        .catch((error) => {});
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },

    setOtpCode(code) {
      this.form.otp_code = code;
    },

    async login() {
      try {
        let response = await this.$auth.loginWith("local", { data: this.form });
      } catch (err) {
        this.toastMessage(err.response.data);
        console.log(err.response.data.message);
      }
    },
  },
};
</script>

<style>
</style>


