<template>
  <div>
    <transition name="fade" mode="out-in" appear>
      <div class="h-100">
        <b-row class="h-100 no-gutters">
          <b-col lg="4" class="d-none d-lg-block">
            <div class="slider-light">
              <slick ref="slick" :options="slickOptions6">
                <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate" >
                  <div class="slide-img-bg" />
                  <div class="slider-content text-light">
                    <h3>Perfect Balance</h3>
                    <p>ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified Vue Bootstrap Components and Elements.</p>
                  </div>
                </div>
                <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                  <div class="slide-img-bg" />
                  <div class="slider-content text-light">
                    <h3>Scalable, Modular, Consistent</h3>
                    <p>
                      Easily exclude the components you don't require. Lightweight, consistent
                      Bootstrap based styles across all elements and components
                    </p>
                  </div>
                </div>
                <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                  <div class="slide-img-bg opacity-6" />
                  <div class="slider-content text-light">
                    <h3>Complex, but lightweight</h3>
                    <p>
                      We've included a lot of components that cover almost all use cases for
                      any type of application.
                    </p>
                  </div>
                </div>
              </slick>
            </div>
          </b-col>
          <b-col lg="8" md="12" class="h-100 d-flex bg-white justify-content-center align-items-center">
            <b-col lg="9" md="10" sm="12" class="mx-auto app-login-box">
              <div class="app-logo" />
              <h4 class="mb-0">
                <div>Welcome back,</div>
                <span>Please sign in to your account.</span>
              </h4>
              <h6 class="mt-3">
                No account?
                <a href="javascript:void(0);" class="text-primary">Sign up now</a>
              </h6>
              <div class="divider" />
              <div>
                <Form>
                  <b-row form>
                    <b-col md="6">
                      <b-form-group>
                        <Label for="exampleEmail">Email</Label>
                        <b-form-input type="email"  name="email" id="exampleEmail" placeholder="Email here..." v-model="email"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group>
                        <Label for="examplePassword">Password</Label>
                        <b-form-input type="password" name="password" id="examplePassword" placeholder="Password here..." v-model="password"/>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-form-checkbox name="check" id="exampleCheck">Keep me logged in</b-form-checkbox>
                  <div class="divider" />
                  <div class="d-flex align-items-center">
                    <div class="ml-auto">
                      <a href="javascript:void(0);" class="btn-lg btn btn-link"> Recover Password </a>
                      <b-button variant="primary" size="lg" @click="Login">Login to Dashboard</b-button>
                    </div>
                  </div>
                </Form>
              </div>
            </b-col>
          </b-col>
        </b-row>
      </div>
    </transition>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      class="error-alert"
    >
    {{errorValue}}
    </b-alert>
  </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  components: {
    Slick
  },
  data: () => ({
    slickOptions6: {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      initialSlide: 0,
      autoplay: true,
      adaptiveHeight: true
    },

    slide: 0,
    sliding: null,
    email: '',
    password: '',
    dismissSecs: 10,
    dismissCountDown: 0,
    errorValue: ''
  }),

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    Login(){
      if(!this.email && !this.password){
        this.errorValue = "Input your Email and Password!"
        this.dismissCountDown = this.dismissSecs
      }else if(this.email == 'landlord@email.com' && this.password == 'landlord') {
        this.$store.state.admin = 'landlord';
        this.$store.state.authenticated = true;
        this.$router.push({ name: 'dashabord' })
      } else if (this.email == 'tenant@email.com' && this.password == 'tenant') {
        this.$store.state.admin = 'tenant';
        this.$store.state.authenticated = true;
        this.$router.push({ name: 'dashabord' })
      } else {
        this.errorValue = "Email or Password Error!"
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
};
</script>

<style scoped>
.error-alert {
    position: absolute;
    top: 0;
    right: 0;
    background: #de5228;
    color: white;
    border-color: #d8ac2f;
    padding: 20px 30px;
    width: 300px;
}
</style>
