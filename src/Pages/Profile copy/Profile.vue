<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="text-right mb-2">
      <b-button variant="success" v-b-modal.editModal>Edit Profile</b-button>
    </div>
    <div class="card p-3">
      <div class="text-center bg-sunny-morning p-3">
        <b-img class="rounded-pill w-100p text-center" :src="avatarUrl" alt=""></b-img>
        <h4 class="mb-0">{{profile.name.first}} {{profile.name.last}}</h4> 
        <h5 class="text-center mb-3">{{profile.email}}</h5> 
      </div>
      <b-row class="p-3 mb-1">
        <b-col md="4">
          <h6 class="font-weight-bold mb-0">First Name</h6>
          {{profile.name.first}}
        </b-col>
        <b-col md="4">
          <h6 class="font-weight-bold mb-0">Last Name</h6>
          {{profile.name.last}}
        </b-col>
        <b-col md="4">
          <h6 class="font-weight-bold mb-0">Sex</h6>
          {{profile.sex}}
        </b-col>
      </b-row>
      <b-row class="p-3 mb-1">
        <b-col md="4">
          <h6 class="font-weight-bold mb-0">Birthday</h6>
          {{profile.birthday}}
        </b-col>
        <b-col md="4">
          <h6 class="font-weight-bold mb-0">Phone</h6>
          {{profile.phone}}
        </b-col>
        <b-col md="4">
          <h6 class="font-weight-bold mb-0">Email</h6>
          {{profile.email}}
        </b-col>
      </b-row>
      <b-row class="p-3 mb-1">
        <b-col md="6">
          <h6 class="font-weight-bold mb-0">Current Address</h6>
          {{profile.address}}
        </b-col>
        <b-col md="6">
          <h6 class="font-weight-bold mb-0">Current Property</h6>
          {{profile.currentProperty}}
        </b-col>
      </b-row>
      <b-row class="p-3">
        <b-col md="12">
          <h6 class="font-weight-bold">Driver's Lecense No:  {{profile.license.no}}</h6>
          <div class="w-150p">
            <expandable-image
              :src="licenseUrl"
            />
          </div>
        </b-col>
      </b-row>
    </div>
     <b-modal size="lg" ref="editModal" id="editModal" hide-footer title="Edit profile" >
      <b-row>
        <b-col md="4" class="text-right">
          <p>First Name :</p>
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.name.first" placeholder="Enter the property"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p>Last Name :</p>
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.name.last" placeholder="Enter the property"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p>Select your avatar :</p>
        </b-col>
        <b-col md="8">
          <b-button @click="$refs.avatarInput.click()" class="btn-right mr-3">Select an image</b-button>
          <b-img v-if="avatarUrl" :src="avatarUrl" class="w-200p"></b-img>
          <input style="display: none" ref="avatarInput" type="file" @change="avatarSelected" enctype="multipart/form-data">
          <!-- <b-button variant="success" class="btn-right" @click="uploadImage" method="post">Upload image</b-button> -->
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p>Service Provider/Employee :</p>
        </b-col>
        <b-col md="4">
          <b-form-radio-group
              v-model="profile.sex"
              :options="sexOptions"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-radio-group>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Phone :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.phone" placeholder="Enter the property"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Email :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.email" placeholder="Enter the property"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Birthday :
        </b-col>
        <b-col md="8">
          <b-input-group class="mb-3">
            <b-form-input
              id="example-input"
              v-model="profile.birthday"
              type="text"
              placeholder="YYYY-MM-DD"
              autocomplete="off"
            ></b-form-input>
            <b-input-group-append>
              <b-form-datepicker
                v-model="profile.birthday"
                button-only
                right
                locale="en-US"
                aria-controls="example-input"
              ></b-form-datepicker>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Current Address :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.address" placeholder="Enter the property"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Current Property :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.currentProperty" placeholder="Enter the property"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          License Number :
        </b-col>
        <b-col md="8">
          <b-form-input class="mb-3" v-model="profile.license.no" placeholder="Enter the property"></b-form-input>
          <b-button @click="$refs.licenseInput.click()" class="btn-right mr-3">Select an image</b-button>
          <b-img v-if="licenseUrl" :src="licenseUrl" class="w-200p"></b-img>
          <input style="display: none" ref="licenseInput" type="file" @change="licenseSelected" enctype="multipart/form-data">
        </b-col>
      </b-row>
    
      <!-- <b-row class="pull-right p-4">
        <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button>
        <b-button class="w-100p" variant="success"  @click="AddProperty">Ok</b-button>
      </b-row> -->
    </b-modal>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
// import VuePerfectScrollbar from "vue-perfect-scrollbar";
// import chart1 from "./Management/chart1";

// import Trend from "vuetrend";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faAngleDown,
  faAngleUp,
  faDotCircle,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt, faAngleDown, faAngleUp, faDotCircle, faArrowLeft);

export default {
  components: {
    PageTitle,
    // VuePerfectScrollbar,
    // "font-awesome-icon": FontAwesomeIcon,
  },
  data: () => ({
    heading: "My Profile",
    subheading:
      "Can view and edit my profile",
    icon: "pe-7s-user  icon-gradient bg-mean-fruit",
    profile: {
      name: {first: 'Mary', last: 'Brian', avatar: '3'},
      sex: 'female',
      phone: '+12345678987',
      birthday: '1987-12-16',
      email: 'maryshow@email.com',
      companyName: 'Carsters Co',
      address: 'Moscow Russian Federation',
      currentProperty: 'Property10',
      license: {
        no: '2515520',
        image: 'abstract1'
      }
    },
    image: null,
    avatarUrl: null,
    licenseUrl: null,
    sexOptions: [
      { item: 'male', name: 'male' },
      { item: 'female', name: 'female' },
    ],
  }),
  mounted(){
    this.avatarUrl = this.getImgUrl(this.profile.name.avatar, 'avatar')
    this.licenseUrl = this.getImgUrl(this.profile.license.image, 'license')
  },
  methods: {
    getImgUrl(pet, type) {
      var images;
      if(type === 'avatar') {
        images = require.context('@/assets/images/avatars/', false, /\.jpg$/)
        return images('./' + pet + ".jpg");
      } else if(type === 'license') {
        images = require.context('@/assets/images/dropdown-header/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
      }
    },
     avatarSelected(e) {
      e.preventDefault()
      const file = e.target.files[0]
      this.image = file
      this.avatarUrl = URL.createObjectURL(file)
    },
     licenseSelected(e) {
      e.preventDefault()
      const file = e.target.files[0]
      this.image = file
      this.licenseUrl = URL.createObjectURL(file)
    },
  },
};
</script>
