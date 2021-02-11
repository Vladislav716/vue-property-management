<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-4" v-for="property in properties" :key="property.index">
        <b-card class="main-card mb-3 property-list">
          <slick ref="slick" :options="slickOptions2">
            <div v-for="image in property.images" :key="image">
              <div class="m-0">
                <img :src="getImgUrl(image)" class="w-100 h-180p" alt />
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
                      <div class="widget-content-right widget-content-actions">
                        <button class="border-0 btn-transition btn btn-outline-success">
                          <font-awesome-icon icon="check" />
                        </button>
                        <button class="border-0 btn-transition btn btn-outline-danger">
                          <font-awesome-icon icon="trash-alt" />
                        </button>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VuePerfectScrollbar from "vue-perfect-scrollbar";


library.add(faCog, faBusinessTime, faSearch, faStar);



export default {
    components: {
      PageTitle,
      Slick,
      // VueCircle,
      "font-awesome-icon": FontAwesomeIcon,
      VuePerfectScrollbar
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
      }
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

</style>
