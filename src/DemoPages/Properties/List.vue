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
            <b-button variant="info" class="mb-2 mr-2 w-100p" @click="propertyDetail(property.index)">More Detail</b-button>
            <b-button variant="success" class="mb-2 w-100p" @click="propertyEdit(property.index)">Edit</b-button>
          </div>
          <slick ref="slick" :options="slickOptions2" v-if="render">
            <div v-for="image in property.imageUrls" :key="image.url">
              <div class="m-0" v-if="image.type === 'image'">
                <img :src="image.url" class="w-100 h-180p" alt />
              </div>
              <div class="m-0" v-if="image.type === 'video'">
                <video controls :src="image.url" class="w-100 h-180p" alt />
              </div>
            </div>
          </slick>
          <h4 class="text-center indigo--text mt-3 mb-2">
            {{property.propertyName}}
          </h4>
        <div class="border-top mt-3">
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
      <!-- Property Edit Modal -->
    <b-modal size="lg" ref="viewModal" id="viewModal" hide-footer>
      <div v-if="selectedProperty[0]" class="p-3">
        <b-row>
          <b-col md="4" class="text-right">
            <p>Property Images :</p>
          </b-col>
          <b-col md="8">
            <b-button @click="$refs.avatarInput.click()" class="btn-right mb-3">Select an image</b-button>
            <div v-if="imageUrls" class="flex flex-md-wrap">
              <div v-for="imageUrl in imageUrls" :key="imageUrl.url">
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
            <b-form-input v-model="selectedProperty[0].propertyName"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            <p> Address :</p>
          </b-col>
          <b-col md="8">
            <b-form-input v-model="selectedProperty[0].address"></b-form-input>
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
            <b-form-input v-model="selectedProperty[0].unit"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            <p> Price :</p>
          </b-col>
          <b-col md="8">
            <b-form-input type="number" v-model="selectedProperty[0].price"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            <p> Utilities :</p>
          </b-col>
          <b-col md="8">
            <b-form-checkbox-group
              id="checkbox-group"
              v-model="selectedProperty[0].utilities"
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
            <p> Teanats :</p>
          </b-col>
          <b-col md="8">
            <multiselect
              v-model="selectedProperty[0].tenanats"
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
              <VuePerfectScrollbar class="app-sidebar-scroll h-180p w-70" v-once>
                <b-table bordered class="mb-0" striped hover :items="selectedProperty[0].tasks" :fields="taskFields">
                  <template #cell(status)="row">
                    <div v-if="row.value == 0" class="badge badge-info ml-2">new</div>
                    <div v-if="row.value == 1" class="badge badge-success ml-2">completed</div>
                    <div v-if="row.value == 2" class="badge badge-danger ml-2">rejected</div>
                  </template>
                  <template #cell(index)="row">
                    <button class="border-0 btn-transition btn btn-outline-danger" @click="delTask(row.value)">
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
            <b-form-input type="number" v-model="selectedProperty[0].income"></b-form-input>
          </b-col>
        </b-row>
      </div>
      
      <!-- <b-row class="pull-right p-4">
        <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button>
      </b-row> -->
    </b-modal>
    <!-- Property Detail Modal -->
    <b-modal size="md" ref="detailModal" id="detailModal" hide-footer>
      <div v-if="selectedProperty[0]">
        <slick ref="slick" :options="slickOptions2" v-if="render">
          <div v-for="image in imageUrls" :key="image.url">
            <div class="m-0" v-if="image.type === 'image'">
              <img :src="image.url" class="w-100 h-180p" alt />
            </div>
            <div class="m-0" v-if="image.type === 'video'">
              <video controls :src="image.url" class="w-100 h-180p" alt />
            </div>
          </div>
        </slick>
        <h4 class="text-center indigo--text mt-3 mb-2">
          {{selectedProperty[0].propertyName}}
        </h4>
        <h6 class="mt-3 mb-2"><i class="pe-7s-map-marker font-size-xlg bg-love-kiss icon-gradient"></i> 685 Market Street, San Fransisco, CA, USA</h6>
        <div class="unit-flex mt-3 mb-2">
          <div>
            <h6>Unit: {{selectedProperty[0].unit}}</h6>
          </div>
          <div>
            <h5 class="font-weight-bold">$ {{selectedProperty[0].price}}</h5>
          </div>
        </div>
        <div style="display: flex" class="mt-3 mb-2">
          <div v-for="utility in selectedProperty[0].utilities" :key="utility">
            <div class='text-success mr-3' v-if="utility === 'parking'">&bull; {{utility}}</div>
            <div class='text-danger mr-3' v-if="utility === 'heating'">&bull; {{utility}}</div>
            <div class='text-warning mr-3' v-if="utility === 'lights'">&bull; {{utility}}</div>
            <div class='text-info mr-3' v-if="utility === 'water'">&bull; {{utility}}</div>
          </div>
        </div>
        <div class="mt-3 mb-2">
          <i class="pe-7s-user fsize-3 bg-love-kiss icon-gradient"></i><i v-for="tenant in selectedProperty[0].tenants" :key="tenant"> {{tenant}} ,</i>
        </div>
        <div class="mt-3 mb-2">
          <i class="pe-7s-server fsize-3 bg-love-kiss icon-gradient"></i> Task Lists
          <VuePerfectScrollbar class="app-sidebar-scroll h-180p" v-once>
            <ul class="todo-list-wrapper list-group list-group-flush">
              <li class="list-group-item" v-for="task in selectedProperty[0].tasks" :key="task.index">
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
        <div class="mt-3 flex border-top   justify-content-between align-items-center">
          <div>
            <h6 class="mt-3 ">Total Income</h6>
            <h5>$ {{selectedProperty[0].income}}</h5>
          </div>
        </div>
      </div>
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
import Multiselect from 'vue-multiselect'
// import VueGoogleAutocomplete from 'vue-google-autocomplete'



library.add(faCog, faBusinessTime, faSearch, faStar);



export default {
  components: {
    PageTitle,
    Slick,
    // VueCircle,
    // "font-awesome-icon": FontAwesomeIcon,
    VuePerfectScrollbar,
    Multiselect
    // VueGoogleAutocomplete
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
        carousal : [
          {
            type: 'image',
            url: 'abstract'
          },
          {
            type: 'image',
            url: 'abstract5'
          },
          {
            type: 'image',
            url: 'abstract2'
          },
          {
            type: 'image',
            url: 'abstract3'
          },
          {
            type: 'video',
            url: '16 FAMOUS LOGOS WITH A HIDDEN MEANING (That We Never Even Noticed)'
          },
        ],
        imageUrls: [],
         propertyName : 'Property1',
        address: '685 Market Street, San Fransisco, CA, USA',
        unit: '#',
        price: '499000',
        utilities: [
          'parking', 'heating', 'lights', 'water'
        ],
        tenants: ['Hymile Jhone', 'Lave Surry'],
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
        income: '399925600',

      },
      {
        index: 1,
        carousal : [
          {
            type: 'image',
            url: 'abstract'
          },
          {
            type: 'image',
            url: 'abstract5'
          },
          {
            type: 'image',
            url: 'abstract2'
          },
          {
            type: 'image',
            url: 'abstract3'
          },
          {
            type: 'video',
            url: '16 FAMOUS LOGOS WITH A HIDDEN MEANING (That We Never Even Noticed)'
          },
        ],
        imageUrls: [],
        propertyName: 'Property1',
        address: '685 Market Street, San Fransisco, CA, USA',
        unit: '#',
        price: '188600',
        utilities: [
          'parking', 'lights', 'water'
        ],
        tenants: ['Hymile Jhone', 'Lave Surry'],
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
    render: true,
    selected: [],
    // requesters: [{label: 'Michel Madrid', value: '1'},
    //  {label: 'Ommiton Gason', value: '2'},
    //  {label: 'Dolphi Ruchel', value: '3'},
    //  {label: 'Json Alpil', value: '4'}],
    // requester: ''
    tenantOption: [
    //   {label: 'Michel Madrid', value: '1'},
    //  {label: 'Ommiton Gason', value: '2'},
    //  {label: 'Dolphi Ruchel', value: '3'},
    //  {label: 'Json Alpil', value: '4'}
    'Michel Madrid', 'Ommition Gason', 'Dolphi Ruchel', 'Jason Alpil', 'Hymile Jhone', 'Lave Surry'
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
    taskContent: {},
    taskStatusOption: [
      { item: 0, name: 'New' },
      { item: 1, name: 'Complete' },
      { item: 2, name: 'Reject' },
    ]
    
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
      console.log(this.selectedProperty)
      this.$root.$emit('bv::show::modal', 'viewModal', '#btnShow')
    },
    propertyDetail(index) {
      this.selectedProperty = this.properties.filter((val, ind) => ind === index)
      this.imageUrls = []
      this.selectedProperty[0].imageUrls.map(image => {
        this.imageUrls.push(image)
      });
      console.log(this.selectedProperty)
      this.$root.$emit('bv::show::modal', 'detailModal', '#btnShow')
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
      }else if(file.type === 'image/png' || file.type === 'image/jpg'){
         this.imageUrls.push({
          type: 'image',
          url: URL.createObjectURL(file)
        }) 
      }
      console.log(this.imageUrls)
      this.properties[this.selectedProperty[0].index].imageUrls = this.imageUrls
      this.render = false;
      this.$nextTick(() => {
        this.render = true;
      });
    },
    delImage(imageUrl) {
      this.imageUrls = this.imageUrls.filter(val => val.url !== imageUrl)
      console.log(this.imageUrls)
      this.properties[this.selectedProperty[0].index].imageUrls = this.imageUrls
      this.render = false;
      this.$nextTick(() => {
        this.render = true;
      });
    },
    getAddressData: function (addressData, placeResultData, id) {
      console.log(addressData, placeResultData, id)
      this.selectedProperty[0].address = addressData;
    },
    AddTask() {
      console.log(this.taskContent)
      this.selectedProperty[0].tasks.push(this.taskContent)
      this.taskContent = {}
    },
    delTask(ind) {
      this.selectedProperty[0].tasks.filter((val, index) => index !== ind)
    }
  
  },
  beforeMount() {
    let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places')
      document.head.appendChild(recaptchaScript)
    this.properties.forEach(property => {
      property.carousal.map(val => {
        if(val.type === 'image'){
          property.imageUrls.push({
            type: 'image',
            url: this.getImgUrl(val.url)
          })
        }else if(val.type === 'video'){
           property.imageUrls.push({
            type: 'video',
            url: this.getVideoUrl(val.url)
          })
        }
      })
    });
  },
   mounted() {
  
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
