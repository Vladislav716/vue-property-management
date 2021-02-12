<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-4" v-for="property in properties" :key="property.index" >
        <b-card class="main-card mb-3 property-list" >
          <div class="text-right">
            <b-button variant="success" class="mb-2 w-100p" @click="propertyEdit(property.index)">Edit</b-button>
          </div>
          <slick ref="slick" :options="slickOptions2" v-if="render">
            <div v-for="image in property.imageUrls" :key="image">
              <div class="m-0">
                <img :src="image" class="w-100 h-180p" alt />
              </div>
            </div>
          </slick>
          <h4 class="text-center indigo--text mt-3 mb-2">
            {{property.propertyName}}
          </h4>
          <h6 class="mt-3 mb-2"><i class="pe-7s-map-marker font-size-xlg bg-love-kiss icon-gradient"></i> 685 Market Street, San Fransisco, CA, USA</h6>
          <div class="unit-flex mt-3 mb-2">
            <div>
              <h6>Unit: {{property.unit}}</h6>
            </div>
            <div>
              <h5 class="font-weight-bold">$ {{property.price}}</h5>
            </div>
          </div>
          <div style="display: flex" class="mt-3 mb-2">
            <div v-for="detail in property.utilities" :key="detail.detail">
              <div :class="detail.col + ' mr-3' ">&bull; {{detail.detail}}</div>
            </div>
          </div>
          <div class="mt-3 mb-2">
            <i class="pe-7s-user fsize-3 bg-love-kiss icon-gradient"></i><i v-for="tenant in property.pastTenants" :key="tenant"> {{tenant}} ,</i>
          </div>
          <div class="mt-3 mb-2">
            <i class="pe-7s-server fsize-3 bg-love-kiss icon-gradient"></i> Task Lists
            <VuePerfectScrollbar class="app-sidebar-scroll h-180p" v-once>
              <ul class="todo-list-wrapper list-group list-group-flush">
                <li class="list-group-item" v-for="task in property.tasks" :key="task.index">
                  <div class="todo-indicator bg-warning"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox12" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox12">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">
                          {{task.taskName}}
                          <div v-if="task.status == 0" class="badge badge-info ml-2">new</div>
                          <div v-if="task.status == 1" class="badge badge-success ml-2">completed</div>
                          <div v-if="task.status == 2" class="badge badge-danger ml-2">rejected</div>
                        </div>
                        <div class="widget-subheading">
                          <i>{{task.description}}</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </VuePerfectScrollbar>
          </div>
          <div>
            <video class="w-100" controls :src="getVideoUrl(property.video)"></video>
          </div>
          <div class="border-top mt-3 flex justify-content-between align-items-center">
            <div>
              <h6 class="mt-3 ">Total Income</h6>
              <h5>$ {{property.income}}</h5>
            </div>
            <div class="pull-right">
              <div class="btn-actions-pane-right actions-icon-btn">
                <b-dropdown toggle-class="btn-icon btn-icon-only" variant="link" right>
                  <span slot="button-content">
                    Action
                  </span>
                  <div>
                    <button type="button" tabindex="0" class="dropdown-item">
                      <i class="dropdown-icon lnr-inbox"></i>
                      <span>Ad on Kijiji</span>
                    </button>
                    <button type="button" tabindex="0" class="dropdown-item">
                      <i class="dropdown-icon lnr-file-empty"></i>
                      <span>Ad on Facebook</span>
                    </button>
                  </div>
                </b-dropdown>
              </div>
            </div>
          </div>
        </b-card>
      </div>
    </div>
     <b-modal size="lg" ref="viewModal" id="viewModal" hide-footer>
      <div v-if="selectedProperty" class="p-3">
        <b-row>
          <b-col md="4" class="text-right">
            <p>Property Images :</p>
          </b-col>
          <b-col md="8">
            <b-button @click="$refs.avatarInput.click()" class="btn-right mb-3">Select an image</b-button>
            <div v-if="imageUrls" class="flex flex-md-wrap">
              <div v-for="imageUrl in imageUrls" :key="imageUrl" class="position-relative mr-1 mb-1">
                <b-img :src="imageUrl" class="w-100p">
                </b-img>
                  <span class="del-image" @click="delImage(imageUrl)"><i class="pe-7s-close del-icon"></i></span>
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
            <b-form-input v-model="selectedProperty.propertyName" placeholder="Enter the property"></b-form-input>
          </b-col>
        </b-row>
      </div>
      
      <!-- <b-row class="pull-right p-4">
        <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button>
      </b-row> -->
    </b-modal>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
// import VueCircle from "vue2-circle-progress";
import Slick from "vue-slick";

import PageTitle from "@/Layout/Components/PageTitle.vue";
import {
  faCog,
  faBusinessTime,
  faSearch,
  faStar
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VuePerfectScrollbar from "vue-perfect-scrollbar";



library.add(faCog, faBusinessTime, faSearch, faStar);



export default {
  components: {
    PageTitle,
    Slick,
    // VueCircle,
    // "font-awesome-icon": FontAwesomeIcon,
    VuePerfectScrollbar,
  },
  data: () => ({
    heading: "Properties List",
    subheading: "Can view Properies list and their profile, total Income, address, rent...",
    icon: "pe-7s-culture icon-gradient bg-mixed-hopes",
    slickOptions2: {
      slidesToShow: 1,
      dots: true
    },
    properties: [
      {
        index: 0,
        images: ['abstract', 'abstract5', 'abstract2', 'abstract3', 'abstract4'],
        imageUrls: [],
        propertyName: 'Property1',
        address: '685 Market Street, San Fransisco, CA, USA',
        unit: '#',
        price: '499000',
        utilities: [
          {
            detail: 'parking',
            col: 'text-success'
          },
          {
            detail: 'heating',
            col: 'text-danger'
          },
          {
            detail: 'lights',
            col: 'text-warning'
          },
          {
            detail: 'water',
            col: 'text-info'
          },
        ],
        pastTenants: ['Hymile Jhone', 'Lave Surry'],
        tasks: [
          {
            index: 0,
            taskName: 'Wash the car',
            description: 'Written by Job',
            status: 0
          },
          {
            index: 1,
            taskName: 'Repair widow',
            description: 'Written by Job',
            status: 1
          },
          {
            index: 2,
            taskName: 'Painting wall',
            description: 'Written by Job',
            status: 2
          },
        ],
        video: '16 FAMOUS LOGOS WITH A HIDDEN MEANING (That We Never Even Noticed)',
        income: '399925600',

      },
      {
        index: 1,
        images: ['abstract6', 'abstract3', 'buildings', 'abstract2', 'abstract4'],
        imageUrls: [],
        propertyName: 'Property1',
        address: '685 Market Street, San Fransisco, CA, USA',
        unit: '#',
        price: '188600',
        utilities: [
          {
            detail: 'heating',
            col: 'text-danger'
          },
          {
            detail: 'lights',
            col: 'text-warning'
          },
          {
            detail: 'water',
            col: 'text-info'
          },
        ],
        pastTenants: ['Hymile Jhone', 'Lave Surry'],
        tasks: [
          {
            index: 0,
            taskName: 'Wash the car',
            description: 'Written by Job',
            status: 0
          },
          {
            index: 1,
            taskName: 'Repair widow',
            description: 'Written by Job',
            status: 1
          },
          {
            index: 2,
            taskName: 'Painting wall',
            description: 'Written by Job',
            status: 2
          },
        ],
        video: '16 FAMOUS LOGOS WITH A HIDDEN MEANING (That We Never Even Noticed)',
        income: '399925600',

      },
    ],
    imageUrls: [],
    selectedProperty: {},
    render: true
    
  }),

  computed: {
      
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
    propertyEdit(index) {
      this.selectedProperty = this.properties.filter((val, ind) => ind === index)
      this.imageUrls = []
      this.selectedProperty[0].imageUrls.map(image => {
        this.imageUrls.push(image)
      });
      this.$root.$emit('bv::show::modal', 'viewModal', '#btnShow')
    },
    hideModal() {
      this.$refs['viewModal'].hide()
    },
    imageSelected(e) {
      e.preventDefault()
      const file = e.target.files[0]
      this.image = file
      this.imageUrls.push(URL.createObjectURL(file))  
      console.log(this.imageUrls)
      this.properties[this.selectedProperty[0].index].imageUrls = this.imageUrls
      this.render = false;
      this.$nextTick(() => {
        this.render = true;
      });
    },
    delImage(imageUrl) {
      this.imageUrls = this.imageUrls.filter(val => val !== imageUrl)
      console.log(this.imageUrls)
      this.properties[this.selectedProperty[0].index].imageUrls = this.imageUrls
      this.render = false;
      this.$nextTick(() => {
        this.render = true;
      });
    }
    
  },
  beforeMount() {
    this.properties.forEach(property => {
      property.images.map(val => {
        property.imageUrls.push(this.getImgUrl(val))
      })
    });
  }
}
</script>

<style scoped>
  .unit-flex {
    display: flex;
    justify-content: space-between;
  }

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
