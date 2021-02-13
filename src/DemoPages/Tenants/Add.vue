<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <div>
        <b-row>
        <b-col md="4" class="text-right">
          <p>First Name :</p>
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.name.first" ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p>Last Name :</p>
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.name.last" ></b-form-input>
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
          Phone :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.phone" ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Email :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.email" ></b-form-input>
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
          <b-form-input v-model="profile.address" ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Current Property :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="profile.currentProperty" ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          License Number :
        </b-col>
        <b-col md="8">
          <b-form-input class="mb-3" v-model="profile.license.no" ></b-form-input>
          <b-button @click="$refs.licenseInput.click()" class="btn-right mr-3">Select an image</b-button>
          <b-img v-if="licenseUrl" :src="licenseUrl" class="w-200p"></b-img>
          <input style="display: none" ref="licenseInput" type="file" @change="licenseSelected" enctype="multipart/form-data">
        </b-col>
      </b-row>
      <b-row class="pull-right mr-5 mb-3">
        <b-button variant="success" @click="addTenant" class="btn-lg"><i class="pe-7s-plus"></i> Add Tenant</b-button>
      </b-row>
    </div>


  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";


import PageTitle from "@/Layout/Components/PageTitle.vue";
import {
  faCog,
  faBusinessTime,
  faSearch,
  faStar
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import VuePerfectScrollbar from "vue-perfect-scrollbar";


library.add(faCog, faBusinessTime, faSearch, faStar);



export default {
    components: {
      PageTitle,
      // "font-awesome-icon": FontAwesomeIcon,
      // VuePerfectScrollbar
    },
    data: () => ({
        heading: "Tenants Add",
        subheading: "Can Add Tenants list and their profile, balance, latest transactions, chat box...",
        icon: "pe-7s-note2 icon-gradient bg-mixed-hopes",
        image: null,
        avatarUrl: null,
        licenseUrl: null,
        profile: {
          name: {},
          license: {}
        }
    }),

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
      addTenant() {
        alert(`FirstName: ${this.profile.name.first}, LastName: ${this.profile.name.last}, Avatar: ${this.avatarUrl}, phone: ${this.profile.phone}
        , Email: ${this.profile.email}, Birthday: ${this.profile.birthday}, currentAddress: ${this.profile.address}, currentProperty: ${this.profile.currentProperty},
        licenseNo: ${this.profile.license.no}, licenseImage: ${this.licenseUrl}`)
      }

      
    },
};
</script>

<style scoped>
.assigned {
  padding: 3px 6px;
  border-radius: 11px;
  background: #33c68b;
  color: white;
}

.unassigned{
  padding: 3px 6px;
  border-radius: 11px;
  background: #365b48;
  color: white;
}
</style>

