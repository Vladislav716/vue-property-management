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
          <slick ref="slick" :options="slickOptions2">
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
          <h6 class="mt-3 mb-2"><i class="pe-7s-map-marker font-size-xlg bg-love-kiss icon-gradient"></i> {{property.address}}</h6>
          <div class="unit-flex mt-3 mb-2">
            <div>
              <h6>Unit: {{property.unit}}</h6>
            </div>
            <div>
              <h5 class="font-weight-bold">$ {{property.price}}</h5>
            </div>
          </div>
          <div style="display: flex" class="mt-3 mb-2">
            <div v-for="utility in property.utilities" :key="utility">
              <div class='text-success mr-3' v-if="utility === 'parking'">&bull; {{utility}}</div>
              <div class='text-danger mr-3' v-if="utility === 'heating'">&bull; {{utility}}</div>
              <div class='text-warning mr-3' v-if="utility === 'lights'">&bull; {{utility}}</div>
              <div class='text-info mr-3' v-if="utility === 'water'">&bull; {{utility}}</div>
            </div>
          </div>
          <div class="mt-3 mb-2">
            <i class="pe-7s-user fsize-3 bg-love-kiss icon-gradient"></i><i v-for="tenant in property.tenants" :key="tenant"> {{tenant}} ,</i>
          </div>
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
    <!-- Property Detail Modal -->
    <b-modal size="md" ref="detailModal" id="detailModal" hide-footer>
      <div v-if="selectedProperty[0]">
        <slick ref="slick" :options="slickOptions2">
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
import Slick from "vue-slick";

import PageTitle from "@/Layout/Components/PageTitle.vue";
import {
  faCog,
  faBusinessTime,
  faSearch,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
// import VueGoogleAutocomplete from 'vue-google-autocomplete'



library.add(faCog, faBusinessTime, faSearch, faStar);



export default {
  components: {
    PageTitle,
    Slick,
    VuePerfectScrollbar,
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
        tenants: ['Ommition Gason', 'Dolphi Ruchel'],
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
        tenants: ['Dolphi Ruchel', 'Hymile Jhone'],
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
    selected: [],
    tenantOption: [
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
      this.$router.push({
        name: 'propertiesAdd',
        params: {item: this.selectedProperty[0]}, 
      })
      // this.$root.$emit('bv::show::modal', 'viewModal', '#btnShow')
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
    getAddressData: function (addressData, placeResultData, id) {
      console.log(addressData, placeResultData, id)
      this.selectedProperty[0].address = addressData;
    },
  },
  beforeMount() {
    // let recaptchaScript = document.createElement('script')
    //   recaptchaScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places')
    //   document.head.appendChild(recaptchaScript)
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

</style>
