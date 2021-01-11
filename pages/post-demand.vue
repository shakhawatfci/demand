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
          <div class="step-progress mt-50 mb-50">
            <b-progress :max="3">
              <b-progress-bar
                :value="currentStep"
                :label="`${replaceNumbersE2B(
                  ((currentStep / 3) * 100).toFixed(0)
                )}%`"
              ></b-progress-bar>
            </b-progress>
          </div>
          <div class="step step1" v-if="currentStep == 1">
            <div class="form-group">
              <label class="font-600 mb-5" for=""
                >ক্যাটেগরি নির্বাচন করুন *</label
              >
              <multiselect
                v-model="form.category"
                :options="categories"
                :max="5"
                :custom-label="customCategoryLabel"
                placeholder="ক্যাটেগরি নির্বাচন করুন"
                selectedLabel="নির্বাচিত"
                track-by="id"
                class="select"
                @input="getQuantityUnit()"
              >
              </multiselect>
              <div class="text-danger" v-if="$v.form.category.$error">
                ডিম্যান্ড ক্যাটেগরি নির্বাচন করুন ! .
              </div>
            </div>
            <div class="form-group">
              <label class="font-600 mb-5" for=""
                >আপনার প্রয়োজন সংক্ষেপে (টাইটেল) লিখুন*</label
              >
              <input
                v-model="form.title"
                type="text"
                class="input-form form-control"
                placeholder="আপনার প্রয়োজন  লিখুন "
              />
              <div class="text-danger" v-if="!$v.form.title.maxLength">
                সর্বোচ্ছ ১০০ অক্ষর টাইটেল লিখতে পারবেন (বিস্তারিত লিখার
                টেক্সটবক্স পরবর্তী ধাপে পাবেন ) .
              </div>
              <div
                class="text-danger"
                v-if="$v.form.category.$error && !$v.form.title.required"
              >
                টাইটেল লিখুন .
              </div>
            </div>
          </div>
          <!-- step 1 -->
          <div v-if="currentStep == 2" class="step step2">
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label class="font-600 mb-5" for="">পরিমাণ *</label>
                  <input
                    type="number"
                    v-model="form.quantity"
                    step="any"
                    class="form-control input-form"
                    placeholder="পরিমাণ"
                  />
                  <div class="text-danger" v-if="$v.form.quantity.$error">
                    পরিমাণ উল্লেখ করুন ।
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="font-600 mb-5" for="">পরিমানের ধরণ *</label>
                  <select
                    v-model="form.quantity_unit"
                    name=""
                    id=""
                    class="input-form form-control"
                  >
                    <option value="">পরিমানের ধরণ</option>
                    <option
                      v-for="value in quantity_units"
                      :value="value.id"
                      :key="'qty' + value.id"
                    >
                      {{ form.quantity }} {{ value.name }}
                    </option>
                    <option value="0">অন্যান্য</option>
                  </select>
                  <div class="text-danger" v-if="$v.form.quantity_unit.$error">
                    পরিমাণের ধরণ সিলেক্ট করুন ।
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="font-600 mb-5" for="">বাজেট ? *</label>
              <br />
              <b-form-checkbox
                v-model="form.budget_type"
                name="check-button"
                switch
              >
                <b v-if="form.budget_type">হ্যাঁ</b>
                <b v-else>নেগেশিয়েবল</b>
              </b-form-checkbox>
            </div>
            <div v-if="form.budget_type" class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <label class="font-600 mb-5" for="">সর্বনিম্ন বাজেট *</label>
                  <input
                    type="number"
                    step="any"
                    class="form-control input-form"
                    placeholder="সর্বনিম্ন  বাজেট"
                    v-model="form.minimum_budget"
                  />
                  <div class="text-danger" v-if="$v.form.minimum_budget.$error">
                    সর্বনিম্ন বাজেত উল্লেখ করুন ।
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="font-600 mb-5" for="">সর্বোচ্চ বাজেট *</label>
                  <input
                    type="number"
                    step="any"
                    class="form-control input-form"
                    placeholder="সর্বোচ্চ বাজেট"
                    v-model="form.maximum_budget"
                  />
                  <div class="text-danger" v-if="$v.form.maximum_budget.$error">
                    সর্বোচ্চ বাজেট উল্লেখ করুন ।
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="step step3" v-if="currentStep == 3">
            <div class="form-group">
              <div class="row">
                <div class="col photo-upload">
                  <label class="font-600 mb-5">ফটো ১ (অপশনাল)</label>
                  <div class="files">
                    <div class="file-content">
                      <input
                        type="file"
                        class="p30"
                        @change="uploadImageOne($event)"
                      />
                      <img
                        v-if="form.image_one"
                        :src="form.image_one"
                        class="img img-fluid"
                      />
                      <img
                        v-else
                        src="~/assets/images/icon/image_demo_icon.svg"
                        class="img img-fluid"
                      />
                      <div class="file-display-table">
                        <div class="file-display-table-cell">
                          <h3 v-if="form.image_one">ছবি চেঞ্জ করুন</h3>
                          <h3 v-else>ছবি যোগ করুন</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- file upload -->
                <div class="col photo-upload">
                  <label class="font-600 mb-5">ফটো ১ (অপশনাল)</label>
                  <div class="files">
                    <div class="file-content">
                      <input
                        type="file"
                        class="p30"
                        @change="uploadImageTwo($event)"
                      />
                      <img
                        v-if="form.image_two"
                        :src="form.image_two"
                        class="img img-fluid"
                      />
                      <img
                        v-else
                        src="~/assets/images/icon/image_demo_icon.svg"
                        class="img img-fluid"
                      />
                      <div class="file-display-table">
                        <div class="file-display-table-cell">
                          <h3 v-if="form.image_two">ছবি চেঞ্জ করুন</h3>
                          <h3 v-else>ছবি যোগ করুন</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- file upload -->

                <div class="col photo-upload">
                  <label class="font-600 mb-5">ফটো ১ (অপশনাল)</label>
                  <div class="files">
                    <div class="file-content">
                      <input
                        type="file"
                        class="p30"
                        @change="uploadImageThree($event)"
                      />
                      <img
                        v-if="form.image_three"
                        :src="form.image_three"
                        class="img img-fluid"
                      />
                      <img
                        v-else
                        src="~/assets/images/icon/image_demo_icon.svg"
                        class="img img-fluid"
                      />
                      <div class="file-display-table">
                        <div class="file-display-table-cell">
                          <h3 v-if="form.image_three">ছবি চেঞ্জ করুন</h3>
                          <h3 v-else>ছবি যোগ করুন</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- file upload -->
              </div>
            </div>
            <div class="form-group">
              <label class="font-600 mb-5" for=""
                >ডিমান্ড বিস্তারিত বর্ণনা করুন (অপশনাল)</label
              >
              <vue-editor v-model="form.description"></vue-editor>
            </div>
            <div class="form-group">
              <label class="font-600 mb-5" for="">ডিমান্ড ডেটলাইন</label>
              <b-datepicker
                class="form-control"
                locale="en"
                :hide-header="true"
                v-model="form.expire_date"
                placeholder="ডেট সিলেক্ট করুন "
                style="line-height: 40px; opacity: 1"
              >
              </b-datepicker>
            </div>
          </div>

          <div class="form-group">
            <a
              class="btn button-small primary-button yallo-primary w-50"
              @click.prevent="previousStep"
              v-if="currentStep > 1"
            >
              আগের ধাপ
            </a>
            <a
              v-if="currentStep == 1"
              class="btn button-small primary-button bid-button w-50"
              @click.prevent="goToStepTwo()"
            >
              পরবর্তী ধাপ
            </a>
            <a
              v-if="currentStep == 2"
              class="btn button-small primary-button bid-button w-50"
              @click.prevent="goToStepThree()"
            >
              পরবর্তী ধাপ
            </a>
            <button
              type="submit"
              @click.prevent="store()"
              v-if="currentStep == 3"
              style=""
              class="btn button-small primary-button bid-button w-50"
            >
              <span v-if="formSubmiting"> প্রসেসিং </span>
              <span v-else> সাবমিট করুন </span>
              <b-spinner type="grow" v-if="formSubmiting"></b-spinner>
            </button>
          </div>
          <div class="step-progress mt-50 mb-50" v-if="formSubmiting">
            <b-progress :max="100">
              <b-progress-bar
                :value="uploadPercentage"
                :label="`${replaceNumbersE2B(uploadPercentage)}%`"
              ></b-progress-bar>
            </b-progress>
          </div>
          <!-- <p>{{ uploadPercentage }}</p> -->
        </div>
      </b-row>
      <b-row>
        <ErrorModal :errors="validation_errors"></ErrorModal>
      </b-row>
    </b-container>
  </div>
</template>

<script>
let VueEditor;

if (process.client) {
  VueEditor = require("vue2-editor").VueEditor;
}
import Multiselect from "vue-multiselect";
import { validationMixin } from "vuelidate";
const {
  required,
  requiredIf,
  minLength,
  maxLength,
} = require("vuelidate/lib/validators");
export default {
  mixins: [validationMixin],
  components: {
    VueEditor,
    Multiselect,
  },
  data() {
    return {
      form: {
        category: null,
        title: "",
        quantity: "",
        quantity_unit: "",
        minimum_budget: "",
        maximum_budget: "",
        total_price: "",
        budget_type: true,
        description: "",
        expire_date: "",
        image_one: "",
        image_two: "",
        image_three: "",
      },
      formSubmiting: false,
      validation_errors: null,
      currentStep: 1,
      uploadPercentage: 0,
      categories: [],
      quantity_units: [],
    };
  },
  validations: {
    form: {
      category: { required },
      title: { required, maxLength: maxLength(100) },
      quantity: { required },
      quantity_unit: { required },
      minimum_budget: {
        required: requiredIf(function () {
          return this.form.budget_type;
        }),
      },
      maximum_budget: {
        required: requiredIf(function () {
          return this.form.budget_type;
        }),
      },
    },
  },
  mounted() {
    this.getCategoryList();
  },

  methods: {
    // upload image
    uploadImageOne(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      let file = files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image_one = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    uploadImageTwo(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      let file = files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image_two = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    uploadImageThree(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      let file = files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image_three = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    getCategoryList() {
      this.$axios
        .$get("category-list?no_pagination=yes&status=1")
        .then((response) => {
          this.categories = response.data;
        });
    },

    getQuantityUnit() {
      if (this.form.category) {
        this.form.quantity_unit = "";
        this.$axios
          .$get("category-unit/" + this.form.category.id)
          .then((response) => {
            this.quantity_units = response;
          });
      }
    },

    goToStepTwo() {
      this.$v.form.category.$touch();
      this.$v.form.title.$touch();
      if (this.$v.form.category.$invalid || this.$v.form.title.$invalid) {
        return;
      }
      this.currentStep = 2;
    },
    goToStepThree() {
      this.$v.form.quantity.$touch();
      this.$v.form.quantity_unit.$touch();
      this.$v.form.minimum_budget.$touch();
      this.$v.form.maximum_budget.$touch();
      if (
        this.$v.form.quantity.$invalid ||
        this.$v.form.quantity_unit.$invalid ||
        this.$v.form.minimum_budget.$invalid ||
        this.$v.form.maximum_budget.$invalid
      ) {
        return;
      }
      this.currentStep = 3;
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
    },
    store() {
      this.formSubmiting = true;
      this.$nuxt.$loading.start();
      this.$axios
        .$post("/demand", this.form)
        .then((response) => {
          this.formSubmiting = false;
          this.$nuxt.$loading.finish();
          if (response.status == "success") {
            this.clearField();
            this.toastMessage(response);
            this.$router.push("/dashboard");
          }
        })
        .catch((error) => {
          this.formSubmiting = false;
          this.$nuxt.$loading.finish();
          if (error.response.status == 422) {
            this.validation_errors = error.response.data;
            console.log(error.response.data);
            this.$bvModal.show("errorModal");
          } else {
            this.modalMessage(error.response.data);
          }
        });
    },
    clearField() {
      this.form = {
        category: null,
        title: "",
        quantity: "",
        quantity_unit: "",
        minimum_budget: "",
        maximum_budget: "",
        total_price: "",
        budget_type: true,
        description: "",
        expire_date: "",
        image_one: "",
        image_two: "",
        image_three: "",
      };
      this.formSubmiting = false;
      this.validation_errors = null;
      this.currentStep = 1;
    },
    customCategoryLabel({ name, english_name }) {
      return `${name} — (${english_name})`;
    },
  },
};
</script>


<style scoped>
.header-main-menu {
  position: inherit !important;
  top: 0;
  z-index: 10;
  width: 100%;
  background: rgba(222, 32, 106);
}
/* .progress-bar {
  background-image: linear-gradient(to right, #fb589c, #b3034c);
} */
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>