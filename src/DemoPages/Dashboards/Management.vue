<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row">
      <div class="col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-night-fade">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Total Orders</div>
              <div class="widget-subheading">Last year expenses</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>1896</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-arielle-smile">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Clients</div>
              <div class="widget-subheading">Total Clients Profit</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>$ 568</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-happy-green">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Followers</div>
              <div class="widget-subheading">People Interested</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>46%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-premium-dark">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Products Sold</div>
              <div class="widget-subheading">Revenue streams</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-warning">
                <span>$14M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-5">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title">
              <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"></i>
              Bandwidth Reports
            </div>
          </div>
          <div class="widget-chart p-0">
            <area-example></area-example>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-7">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title">
              <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"></i>
              Bandwidth Reports
            </div>
          </div>
          <div class="widget-chart p-0">
            <MixedExample></MixedExample>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-12 mb-4">
         <div class="pt-2 card">
            <div class="row">
              <div class="col-md-6">
                <div class="widget-content">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers fsize-3 text-muted">63%</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="text-muted opacity-6">Generated Leads</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="63"
                          aria-valuemin="0" aria-valuemax="100" style="width: 63%;">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="widget-content">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers fsize-3 text-muted">32%</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="text-muted opacity-6">Submitted Tickers</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="32"
                          aria-valuemin="0" aria-valuemax="100" style="width: 32%;">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="widget-content">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers fsize-3 text-muted">71%</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="text-muted opacity-6">Server Allocation</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="71"
                          aria-valuemin="0" aria-valuemax="100" style="width: 71%;">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="widget-content">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers fsize-3 text-muted">41%</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="text-muted opacity-6">Generated Leads</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="41"
                          aria-valuemin="0" aria-valuemax="100" style="width: 41%;">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="header-icon lnr-database icon-gradient bg-malibu-beach"></i>Tasks List
            </div>
            <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
              <b-dropdown toggle-class="btn-icon btn-icon-only" variant="link" right>
                <span slot="button-content">
                  <font-awesome-icon icon="th" />
                </span>
                <div>
                  <button type="button" tabindex="0" class="dropdown-item">
                    <i class="dropdown-icon lnr-inbox"></i>
                    <span>Menus</span>
                  </button>
                  <button type="button" tabindex="0" class="dropdown-item">
                    <i class="dropdown-icon lnr-file-empty"></i>
                    <span>Settings</span>
                  </button>
                  <button type="button" tabindex="0" class="dropdown-item">
                    <i class="dropdown-icon lnr-book"></i>
                    <span>Actions</span>
                  </button>
                  <div tabindex="-1" class="dropdown-divider"></div>
                  <div class="p-1 text-right">
                    <button class="mr-2 btn-shadow btn-sm btn btn-link">View Details</button>
                    <button class="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
                  </div>
                </div>
              </b-dropdown>
            </div>
          </div>
          <div class="scroll-area-lg">
            <VuePerfectScrollbar  class="scrollbar-container" v-once>
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
                <li class="list-group-item">
                  <div class="todo-indicator bg-info"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox2" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox2">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left mr-3">
                        <div class="widget-content-left">
                          <img width="42" class="rounded" src="@/assets/images/avatars/1.jpg" alt />
                        </div>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Go grocery shopping</div>
                        <div class="widget-subheading">A short description for this todo item</div>
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
                <li class="list-group-item">
                  <div class="todo-indicator bg-success"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox3" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox3">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left flex2">
                        <div class="widget-heading">Development Task</div>
                        <div class="widget-subheading">Finish Vue ToDo List App</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="badge badge-warning mr-2">69</div>
                      </div>
                      <div class="widget-content-right">
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
          <div class="d-block text-right card-footer">
            <button class="mr-2 btn btn-link btn-sm">Cancel</button>
            <button class="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-6">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="header-icon lnr-database icon-gradient bg-malibu-beach"></i>Updates
            </div>
          </div>
            <div class="scroll-area-lg">
              <VuePerfectScrollbar  class="scrollbar-container" v-once>
                <b-table bordered class="mb-0" striped hover :items="items" :fields="fields"></b-table>
              </VuePerfectScrollbar>
            </div>
            <div class="d-block text-right card-footer">
              <button class="mr-2 btn btn-link btn-sm">Cancel</button>
              <button class="btn btn-primary">Add </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
// import chart1 from "./Management/chart1";
import MixedExample from "../Charts/Apex/MixedExample";
import AreaExample from "../Charts/Apex/AreaExample";

// import Trend from "vuetrend";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faAngleDown,
  faAngleUp,
  faDotCircle,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt, faAngleDown, faAngleUp, faDotCircle, faArrowLeft);

export default {
  components: {
    PageTitle,
    VuePerfectScrollbar,
    "font-awesome-icon": FontAwesomeIcon,
    // trend: Trend,

    // chart1,

    MixedExample,
    AreaExample
  },
  data: () => ({
    heading: "Dashboard",
    subheading:
      "multiple types of graphs, task list, updates, etc",
    icon: "pe-7s-home  icon-gradient bg-mean-fruit",
      items: [
      {
        isActive: true,
        age: 40,
        first_name: "Dickerson",
        last_name: "Macdonald"
      },
      { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
      { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      {
        isActive: true,
        age: 40,
        first_name: "Dickerson",
        last_name: "Macdonald"
      },
      { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
      { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      {
        isActive: true,
        age: 40,
        first_name: "Dickerson",
        last_name: "Macdonald"
      },
      { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" }
    ],
     fields: [
      {
        key: "last_name",
        sortable: true
      },
      {
        key: "first_name",
        sortable: true
      },
      {
        key: "age",
        label: "Person age",
        sortable: true
        // Variant applies to the whole column, including the header and footer
      }
    ],
  }),

  methods: {}
};
</script>
