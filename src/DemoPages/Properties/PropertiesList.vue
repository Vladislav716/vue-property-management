<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-4">
        <b-card class="main-card mb-3 property-list">
          <slick ref="slick" :options="slickOptions2">
            <div>
              <div class="m-0">
                <img src="@/assets/images/originals/abstract.jpg" class="w-100 h-180p" alt />
              </div>
            </div>
            <div>
              <div class="m-0">
                <img src="@/assets/images/originals/abstract2.jpg" class="w-100 h-180p" alt />
              </div>
            </div>
            <div>
              <div class="m-0">
                <img src="@/assets/images/originals/abstract3.jpg" class="w-100 h-180p" alt />
              </div>
            </div>
            <div>
              <div class="m-0">
                <img src="@/assets/images/originals/abstract4.jpg" class="w-100 h-180p" alt />
              </div>
            </div>
          </slick>
          <h4 class="text-center indigo--text mt-3 mb-2">
            Property1
          </h4>
          <h6 class="mt-3 mb-2"><i class="pe-7s-map-marker font-size-xlg bg-love-kiss icon-gradient"></i> 685 Market Street, San Fransisco, CA, USA</h6>
          <div class="unit-flex mt-3 mb-2">
            <div>
              <h6>Unit: #</h6>
            </div>
            <div>
              <h5 class="font-weight-bold">$ 499000</h5>
            </div>
          </div>
          <div style="display: flex" class="mt-3 mb-2">
            <div class="mr-3 text-success">&bull; parking</div>
            <div class="mr-3 text-danger">&bull; heating</div>
            <div class="mr-3 text-warning">&bull; lights</div>
            <div class="mr-3 text-info">&bull; water</div>
          </div>
          <div class="mt-3 mb-2">
            <i class="pe-7s-user fsize-3 bg-love-kiss icon-gradient"></i><i> Hymile Jhone</i>
          </div>
          <div class="mt-3 mb-2">
            <i class="pe-7s-server fsize-3 bg-love-kiss icon-gradient"></i> Task Lists
            <VuePerfectScrollbar class="app-sidebar-scroll h-180p" v-once>
              <ul class="todo-list-wrapper list-group list-group-flush">
                <li class="list-group-item">
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
                          Wash the car
                          <div class="badge badge-danger ml-2">Rejected</div>
                        </div>
                        <div class="widget-subheading">
                          <i>Written by Bob</i>
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
                <li class="list-group-item">
                  <div class="todo-indicator bg-focus"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox1" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox1">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Task with hover dropdown menu</div>
                        <div class="widget-subheading">
                          <div>
                            By Johnny
                            <div class="badge badge-pill badge-info ml-2">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <div class="d-inline-block">
                          <b-dropdown toggle-class="btn-icon btn-icon-only" right variant="link" no-caret>
                            <span slot="button-content">
                              <i class="pe-7s-menu btn-icon-wrapper"></i>
                            </span>
                            <ul class="nav flex-column">
                              <li class="nav-item-header nav-item">Activity</li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                  Chat
                                  <div class="ml-auto badge badge-pill badge-info">8</div>
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">Recover Password</a>
                              </li>
                              <li class="nav-item-header nav-item">My Account</li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                  Settings
                                  <div class="ml-auto badge badge-success">New</div>
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                  Messages
                                  <div class="ml-auto badge badge-warning">512</div>
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">Logs</a>
                              </li>
                              <li class="nav-item-divider nav-item"></li>
                              <li class="nav-item-btn nav-item">
                                <button class="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                              </li>
                            </ul>
                          </b-dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="todo-indicator bg-primary"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox4" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox4">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left flex2">
                        <div class="widget-heading">Badge on the right task</div>
                        <div class="widget-subheading">This task has show on hover actions!</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="border-0 btn-transition btn btn-outline-success">
                          <font-awesome-icon icon="check" />
                        </button>
                      </div>
                      <div class="widget-content-right ml-3">
                        <div class="badge badge-pill badge-success">Latest Task</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </VuePerfectScrollbar>
          </div>
          <div>
            <b-embed type="video" aspect="4by3" controls poster="poster.png">
              <source src="@/assets/video/16 FAMOUS LOGOS WITH A HIDDEN MEANING (That We Never Even Noticed).mp4" type="video/webm">
            </b-embed>
            <video class="w-100" controls src="@/assets/video/16 FAMOUS LOGOS WITH A HIDDEN MEANING (That We Never Even Noticed).mp4"></video>
          </div>
          <div class="border-top mt-3 flex justify-content-between align-items-center">
            <div>
              <h6 class="mt-3 ">Total Income</h6>
              <h5>$ 39990920</h5>
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
      <div class="col-md-12 col-lg-6 col-xl-4">
        <b-card class="main-card mb-3 property-list">
          <slick ref="slick" :options="slickOptions2">
            <div>
              <div class="m-0">
                <img src="@/assets/images/originals/abstract.jpg" class="w-100 h-180p" alt />
              </div>
            </div>
            <div>
              <div class="m-0">
                <img src="@/assets/images/originals/abstract2.jpg" class="w-100 h-180p" alt />
              </div>
            </div>
            <div>
              <div class="m-0">
                <img src="@/assets/images/originals/abstract3.jpg" class="w-100 h-180p" alt />
              </div>
            </div>
            <div>
              <div class="m-0">
                <img src="@/assets/images/originals/abstract4.jpg" class="w-100 h-180p" alt />
              </div>
            </div>
          </slick>
          <h4 class="text-center indigo--text mt-3 mb-2">
            Property1
          </h4>
          <h6 class="mt-3 mb-2"><i class="pe-7s-map-marker font-size-xlg bg-love-kiss icon-gradient"></i> 685 Market Street, San Fransisco, CA, USA</h6>
          <div class="unit-flex mt-3 mb-2">
            <div>
              <h6>Unit: #</h6>
            </div>
            <div>
              <h5 class="font-weight-bold">$ 499000</h5>
            </div>
          </div>
          <div style="display: flex" class="mt-3 mb-2">
            <div class="mr-3 text-success">&bull; parking</div>
            <div class="mr-3 text-danger">&bull; heating</div>
            <div class="mr-3 text-warning">&bull; lights</div>
            <div class="mr-3 text-info">&bull; water</div>
          </div>
          <div class="mt-3 mb-2">
            <i class="pe-7s-user fsize-3 bg-love-kiss icon-gradient"></i><i> Hymile Jhone</i>
          </div>
          <div class="mt-3 mb-2">
            <i class="pe-7s-server fsize-3 bg-love-kiss icon-gradient"></i> Task Lists
            <VuePerfectScrollbar class="app-sidebar-scroll h-180p" v-once>
              <ul class="todo-list-wrapper list-group list-group-flush">
                <li class="list-group-item">
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
                          Wash the car
                          <div class="badge badge-danger ml-2">Rejected</div>
                        </div>
                        <div class="widget-subheading">
                          <i>Written by Bob</i>
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
                <li class="list-group-item">
                  <div class="todo-indicator bg-focus"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox1" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox1">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Task with hover dropdown menu</div>
                        <div class="widget-subheading">
                          <div>
                            By Johnny
                            <div class="badge badge-pill badge-info ml-2">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <div class="d-inline-block">
                          <b-dropdown toggle-class="btn-icon btn-icon-only" right variant="link" no-caret>
                            <span slot="button-content">
                              <i class="pe-7s-menu btn-icon-wrapper"></i>
                            </span>
                            <ul class="nav flex-column">
                              <li class="nav-item-header nav-item">Activity</li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                  Chat
                                  <div class="ml-auto badge badge-pill badge-info">8</div>
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">Recover Password</a>
                              </li>
                              <li class="nav-item-header nav-item">My Account</li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                  Settings
                                  <div class="ml-auto badge badge-success">New</div>
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                  Messages
                                  <div class="ml-auto badge badge-warning">512</div>
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">Logs</a>
                              </li>
                              <li class="nav-item-divider nav-item"></li>
                              <li class="nav-item-btn nav-item">
                                <button class="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                              </li>
                            </ul>
                          </b-dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="todo-indicator bg-primary"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox4" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox4">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left flex2">
                        <div class="widget-heading">Badge on the right task</div>
                        <div class="widget-subheading">This task has show on hover actions!</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="border-0 btn-transition btn btn-outline-success">
                          <font-awesome-icon icon="check" />
                        </button>
                      </div>
                      <div class="widget-content-right ml-3">
                        <div class="badge badge-pill badge-success">Latest Task</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </VuePerfectScrollbar>
          </div>
          <div>
            <b-embed type="video" aspect="4by3" controls poster="poster.png">
              <source src="@/assets/video/16 FAMOUS LOGOS WITH A HIDDEN MEANING (That We Never Even Noticed).mp4" type="video/webm">
            </b-embed>
            <video class="w-100" controls src="@/assets/video/16 FAMOUS LOGOS WITH A HIDDEN MEANING (That We Never Even Noticed).mp4"></video>
          </div>
          <div class="border-top mt-3 flex justify-content-between align-items-center">
            <div>
              <h6 class="mt-3 ">Total Income</h6>
              <h5>$ 39990920</h5>
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
     
      
    }),

    computed: {
       
    },
    methods: {
     
    }
};
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
