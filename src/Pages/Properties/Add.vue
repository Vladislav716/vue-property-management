<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <div class="row card p-5 w-80 m-auto">
      <b-row>
        <b-col md="4" class="text-right">
          <p>Property Images :</p>
        </b-col>
        <b-col md="8">
          <b-button @click="$refs.avatarInput.click()" class="btn-right mb-3">Select an image</b-button>
          <div v-if="item.imageUrls" class="flex flex-md-wrap">
            <div v-for="imageUrl in item.imageUrls" :key="imageUrl.url">
              <div  class="position-relative mr-1 mb-1" v-if="imageUrl.type === 'image'">
                <b-img :src="imageUrl.url" class="w-100p">
                </b-img>
                  <span class="del-image" @click="delImage(imageUrl.url)"><i class="pe-7s-close del-icon"></i></span>
              </div>
              <div  class="position-relative mr-1 mb-1" v-if="imageUrl.type === 'video'">
                <video :src="imageUrl.url" class="w-100p">
                </video>
                  <span class="del-image" @click="delImage(imageUrl.url)"><i class="pe-7s-close del-icon"></i></span>
              </div>
            </div>
          </div>
          <input style="display: none" ref="avatarInput" type="file" @change="imageSelected" enctype="multipart/form-data">
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p> Property Name :</p>
        </b-col>
        <b-col md="8">
          <b-form-input v-model="item.propertyName"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p> Address :</p>
        </b-col>
        <b-col md="8">
          <b-form-input v-model="item.address"></b-form-input>
          <!-- <vue-google-autocomplete
            id="map"
            classname="form-control"
            placeholder="Start typing"
            v-on:placechanged="getAddressData"
          >
          </vue-google-autocomplete> -->
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p> Unit :</p>
        </b-col>
        <b-col md="8">
          <b-form-input v-model="item.unit"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p> Price :</p>
        </b-col>
        <b-col md="8">
          <b-form-input type="number" v-model="item.price"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p> Utilities :</p>
        </b-col>
        <b-col md="8">
          <b-form-checkbox-group
            id="checkbox-group"
            v-model="item.utilities"
            name="flavour-2"
        >
          <b-form-checkbox value="parking" class="text-success">parking</b-form-checkbox>
          <b-form-checkbox value="heating" class="text-danger">heating</b-form-checkbox>
          <b-form-checkbox value="lights" class="text-warning">lights</b-form-checkbox>
          <b-form-checkbox value="water" class="text-info">water</b-form-checkbox>
        </b-form-checkbox-group>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p> Tenants :</p>
        </b-col>
        <b-col md="8">
          <multiselect
            v-model="item.tenanats"
            :options="tenantOption"
            :multiple="true">
          </multiselect>
        </b-col>
      </b-row> 
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p> Task List :</p>
        </b-col>
        <b-col md="8">
          <div class="mb-2 row pr-3 pl-3">
            <b-form-input placeholder="Task Name" class="mb-2 w-70" v-model="taskContent.taskName"></b-form-input>
            <b-textarea placeholder="Task Description" class="w-70 mb-2" v-model="taskContent.description"></b-textarea>
            <b-form-radio-group
              v-model="taskContent.status"
              :options="taskStatusOption"
              class="mb-2 w-70"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-radio-group>
            <b-button variant="danger" @click="AddTask"><i class="pe-7s-plus"></i> Add</b-button>
            <VuePerfectScrollbar class="app-sidebar-scroll h-180p w-70">
              <b-table bordered class="mb-0" striped hover :items="item.tasks" :fields="taskFields" >
                <template #cell(status)="row">
                  <div v-if="row.value == 0" class="badge badge-info ml-2">new</div>
                  <div v-if="row.value == 1" class="badge badge-success ml-2">completed</div>
                  <div v-if="row.value == 2" class="badge badge-danger ml-2">rejected</div>
                </template>
                <template #cell(index)="row">
                  <button class="border-0 btn-transition btn btn-outline-danger" @click="delTask(row)">
                    <i class="pe-7s-trash"></i>
                  </button>
                </template>
              </b-table>
            </VuePerfectScrollbar>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          <p> Total Income :</p>
        </b-col>
        <b-col md="8">
          <b-form-input type="number" v-model="item.income"></b-form-input>
          <b-button variant="success" class="mt-3" @click="AddProperty">
            <i class="pe-7s-plus"></i>
            {{$route.params.item ? 'Edit Property' : 'Add Property'}}
          </b-button>
        </b-col>
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
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Multiselect from 'vue-multiselect'




library.add(faCog, faBusinessTime, faSearch, faStar);



export default {
  components: {
    PageTitle,
    // Slick,
    // VueCircle,
    // "font-awesome-icon": FontAwesomeIcon,
    VuePerfectScrollbar,
    Multiselect
  },
  data: () => ({
    heading: "Properties Add",
    subheading: "Can Add Properies and their profile, total Income, address, rent...",
    icon: "pe-7s-culture icon-gradient bg-mixed-hopes",
    slickOptions2: {
      slidesToShow: 1,
      dots: true
    },
    item:{
      imageUrls: [],
      tasks: [],
      address: '',
      carousal: [],
      income: '',
      index: '',
      price: '',
      propertyName: '',
      tenants: [],
      unit: '',
      utilities: []
    },
    tenantOption: [
    'Michel Madrid', 'Ommition Gason', 'Dolphi Ruchel', 'Jason Alpil', 'Hymile Jhone', 'Lave Surry'
    ],
    taskContent: {},
    taskStatusOption: [
      { item: 0, name: 'New' },
      { item: 1, name: 'Complete' },
      { item: 2, name: 'Reject' },
    ],
     taskFields: [
       {
        key: "taskName",
        sortable: true
      },
      {
        key: "description",
        sortable: true
      },
      {
        key: "status",
        label: "Status",
        sortable: true
      },
      {
        key: "index",
        label: "action",
      }
    ],
    
  }),

  created() {
    if(this.$route.params.item){
      console.log(this.$route.params.item)
      this.item = this.$route.params.item;
    }
      
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context('@/assets/images/originals/', false, /\.jpg$/)
      return images('./' + pet + ".jpg");
    },
    getVideoUrl(pet){
      var videos = require.context('@/assets/video/', false, /\.mp4$/)
      return videos('./' + pet + ".mp4");
    },
    hideModal() {
      this.$refs['viewModal'].hide()
    },
    imageSelected(e) {
     e.preventDefault()
      const file = e.target.files[0]
      this.image = file
      console.log(file)
      if(file.type === 'video/mp4'){
        this.imageUrls.push({
          type: 'video',
          url: URL.createObjectURL(file)
        })  
      }else if(file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg'){
         this.item.imageUrls.push({
          type: 'image',
          url: URL.createObjectURL(file)
        }) 
      }
    },
    delImage(imageUrl) {
      this.item.imageUrls = this.item.imageUrls.filter(val => val.url !== imageUrl)
      console.log(this.item.imageUrls)
    },
    AddTask() {
      console.log(this.taskContent)
      this.item.tasks.push(this.taskContent)
      this.taskContent = {}
    },
    AddProperty() {
      console.log(this.item.tenants)
    },
    delTask(row) {
      console.log(row.index, this.item.tasks)
      this.item.tasks = this.item.tasks.filter((val, ind) => ind !== row.index)
    }
    
  },
 
}
</script>

<style scoped>

  .flex {
    display: flex;
  }

   .del-image{
    position: absolute;
    top: 0;
    right:0;
  }

  .del-icon {
    background: white;
    border-radius: 20px;
    color: red;
    font-weight: bold;
    font-size: 17px;
    border: 1px solid #464646;
    cursor: pointer;
  }

</style>
