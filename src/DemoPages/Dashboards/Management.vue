<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="text-right mb-2" v-if="admin === 'tanent'">
      <b-button variant="success">Open Service Request</b-button>
    </div>
    <div class="row" v-if="admin === 'landlord'">
      <div v-for="widget in widgets" :key="widget.bg" class="col-md-6 col-xl-3">
        <div :class="widget.bg + ' card mb-3 widget-content'">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">{{widget.heading}}</div>
              <div class="widget-subheading">{{widget.subheading}}</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>{{widget.number}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="admin === 'landlord'">
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
              <div class="col-md-6" v-for="progressBar in progressBars" :key="progressBar.bg">
                <div class="widget-content">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers fsize-3 text-muted">{{progressBar.number}}%</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="text-muted opacity-6">{{progressBar.muted}}</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div :class="progressBar.bg + ' progress-bar'" role="progressbar" :aria-valuenow="progressBar.number"
                          aria-valuemin="0" aria-valuemax="100" :style="'width:'+ progressBar.number + '%'">
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
                  <!-- <font-awesome-icon icon="th" /> -->
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
             <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
              <ul class="todo-list-wrapper list-group list-group-flush">
                <li class="list-group-item" v-for="task in tasks" :key="task.index">
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
          <div class="d-block text-right card-footer">
            <button class="mr-2 btn btn-link btn-sm">Cancel</button>
            <button class="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-6" v-if="admin === 'landlord'">
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
      <div class="col-sm-12 col-lg-6 h-500p" v-if="admin === 'tenant'">
        <div class="app-inner-layout chat-layout">
          <div class="app-inner-layout__wrapper">
            <div class="app-inner-layout__sidebar card  h-500p">
              <div class="app-inner-layout__sidebar-header">
                <ul class="nav flex-column">
                  <li class="pt-4 pl-3 pr-3 pb-3 nav-item">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <!-- <font-awesome-icon icon="search" /> -->
                        </div>
                      </div>
                      <input placeholder="Search..." type="text" class="form-control" />
                    </div>
                  </li>
                </ul>
              </div>
              <VuePerfectScrollbar class="app-sidebar-scroll h-400p" v-once>
                <ul class="nav flex-column">
                  <li class="nav-item" v-for="chatContact in chatContacts" :key="chatContact.index" @click="contactClick(chatContact.index)">
                    <button type="button" :tabindex="chatContact.index" class="dropdown-item">
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-3">
                            <div class="avatar-icon-wrapper">
                              <div v-if="chatContact.state === 'online'" class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                              <div v-if="chatContact.state === 'offline'" class="badge badge-bottom badge-secondary badge-dot badge-dot-lg"></div>
                              <div class="avatar-icon">
                                <b-img :src="getImgUrl(chatContact.name.avatar)" alt=""></b-img>
                              </div>
                            </div>
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">{{chatContact.name.first}} {{chatContact.name.last}}</div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </li>
                </ul>
              </VuePerfectScrollbar>
            </div>
            <div>
              <div class="app-inner-layout__content height-fit-content mb-2">
                <div class="table-responsive card w-100 mr-2 height-fit-content h-500p">
                  <div class="app-inner-layout__top-pane border-bottom h-65p badge-info">
                    <div class="pane-left" v-if="selectedContact[0]">
                      <div class="mobile-app-menu-btn">
                        <button type="button" class="hamburger hamburger--elastic"
                          v-bind:class="{ 'is-active' : isMobileOpen }" @click="toggleLayoutClass('open-mobile-menu')">
                          <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                          </span>
                        </button>
                      </div>
                      <div class="avatar-icon-wrapper mr-2">
                        <div v-if="selectedContact[0].state === 'online'" class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                        <div v-if="selectedContact[0].state === 'offline'" class="badge badge-bottom btn-shine badge-secondary badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon avatar-icon-xl rounded">
                          <b-img width="82" :src="getImgUrl(selectedContact[0].name.avatar)" alt ></b-img>
                        </div>
                      </div>
                      <h4 class="mb-0 text-nowrap">
                        {{selectedContact[0].name.first}} {{selectedContact[0].name.last}}
                        <div class="opacity-7">
                          Last Seen Online:
                          <span class="opacity-8">10 minutes ago</span>
                        </div>
                      </h4>
                    </div>
                  </div>
                  <VuePerfectScrollbar class="app-sidebar-scroll h-360p">
                    <div class="chat-wrapper" v-for="chatContent in selectedContact[0].chatContents" :key="chatContent.index">
                      <div v-if="chatContent.state === 'receive'" class="chat-box-wrapper">
                        <div>
                          <div class="avatar-icon-wrapper mr-2">
                            <div class="avatar-icon avatar-icon-lg rounded">
                              <b-img :src="getImgUrl(selectedContact[0].name.avatar)" alt ></b-img>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="chat-box">
                            {{chatContent.content}}
                          </div>
                          <small class="opacity-6">
                            <font-awesome-icon icon="calendar-alt" />{{chatContent.time}}
                          </small>
                        </div>
                      </div>
                      <div v-if="chatContent.state === 'send'" class="float-right">
                        <div class="chat-box-wrapper chat-box-wrapper-right">
                          <div>
                            <div class="chat-box">
                              {{chatContent.content}}
                            </div>
                            <small class="opacity-6">
                              <font-awesome-icon icon="calendar-alt" />{{chatContent.time}}
                            </small>
                          </div>
                          <div>
                            <div class="avatar-icon-wrapper ml-1">
                              <div class="avatar-icon avatar-icon-lg rounded">
                                Me
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="chat-box-wrapper">
                        <div>
                          <div class="avatar-icon-wrapper mr-2">
                            <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                            <div class="avatar-icon avatar-icon-lg rounded">
                              <img src="@/assets/images/avatars/2.jpg" alt />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            class="chat-box"
                          >But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</div>
                          <small class="opacity-6">
                            <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                      <div class="float-right">
                        <div class="chat-box-wrapper chat-box-wrapper-right">
                          <div>
                            <div class="chat-box">Denouncing pleasure and praising pain was born and I will give you a complete account.</div>
                            <small class="opacity-6">
                              <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                            </small>
                          </div>
                          <div>
                            <div class="avatar-icon-wrapper ml-1">
                              <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                              <div class="avatar-icon avatar-icon-lg rounded">
                                <img src="@/assets/images/avatars/3.jpg" alt />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="chat-box-wrapper">
                        <div>
                          <div class="avatar-icon-wrapper mr-2">
                            <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                            <div class="avatar-icon avatar-icon-lg rounded">
                              <img src="@/assets/images/avatars/2.jpg" alt />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="chat-box">Born and I will give you a complete account of the system.</div>
                          <small class="opacity-6">
                            <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                      <div class="float-right">
                        <div class="chat-box-wrapper chat-box-wrapper-right">
                          <div>
                            <div class="chat-box">The master-builder of human happiness.</div>
                            <small class="opacity-6">
                              <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                            </small>
                          </div>
                          <div>
                            <div class="avatar-icon-wrapper ml-1">
                              <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                              <div class="avatar-icon avatar-icon-lg rounded">
                                <img src="@/assets/images/avatars/3.jpg" alt />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="chat-box-wrapper">
                        <div>
                          <div class="avatar-icon-wrapper mr-2">
                            <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                            <div class="avatar-icon avatar-icon-lg rounded">
                              <img src="@/assets/images/avatars/2.jpg" alt />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="chat-box">Mistaken idea of denouncing pleasure and praising pain was born and I will give you</div>
                          <small class="opacity-6">
                            <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                          </small>
                        </div>
                      </div> -->
                    </div>
                  </VuePerfectScrollbar>
                  <div class="app-inner-layout__bottom-pane d-block">
                    <div class="mb-0 position-relative row form-group">
                      <div class="col-sm-12">
                        <input placeholder="Write here and hit enter to send..." type="text" class="form-control"/>
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
    widgets: [
      {
        bg: 'bg-night-fade',
        heading: 'Total applicant',
        subheading: 'Last year expenses',
        number: '1896'
      },
      {
        bg: 'bg-arielle-smile',
        heading: 'Tenants',
        subheading: 'Total Tenants Profit',
        number: '5620021'
      },
      {
        bg: 'bg-happy-green',
        heading: 'Employees',
        subheading: 'Total Employees Profit',
        number: '1203'
      },
      {
        bg: 'bg-premium-dark',
        heading: 'Cost',
        subheading: 'The top Cost',
        number: '$5620000'
      }
    ],
    progressBars: [
      {
        number: '63',
        muted: 'Generated Leads',
        bg: 'bg-danger'
      },
      {
        number: '32',
        muted: 'Submitted Tickers',
        bg: 'bg-success'
      },
      {
        number: '71',
        muted: 'Server Allocation',
        bg: 'bg-primary'
      },
      {
        number: '41',
        muted: 'Gernerated Leads',
        bg: 'bg-warning '
      }
    ],
    tasks: [
      { 
        index: 1,
        taskName: 'task1',
        description: 'description for task1',
        status: 0
      },
      { 
        index: 2,
        taskName: 'task2',
        description: 'description for task2',
        status: 1
      },
      {
        index: 3,
        taskName: 'task3',
        description: 'description for task3',
        status: 2
      },
    ],
    chatContacts: [
      {
        index: 0,
        name: {first: 'Alina', last: 'Moloco', avatar: '1'},
        state: 'online',
        chatContents: [
          {
            index: 0,
            state: 'send',
            content: 'Hello!',
            time: '11:01 AM | Yesterday'
          },
          {
            index: 1,
            state: 'receive',
            content: 'Hello! How are you?',
            time: '11:02 AM | Yesterday'
          },
          {
            index: 2,
            state: 'send',
            content: 'I have moved to new house in Los Angels',
            time: '11:03 AM | Yesterday'
          },
          {
            index: 3,
            state: 'receive',
            content: 'Wow! Really? I hope to visit your new house...',
            time: '11:04 AM | Yesterday'
          }
        ]
      },
      {
        index: 1,
        name: {first: 'Choba', last: 'Kenbin', avatar: '6'},
        state: 'online',
        chatContents: [
          {
            index: 0,
            state: 'send',
            content: 'Hello!',
            time: '11:01 AM | Yesterday'
          },
          {
            index: 1,
            state: 'receive',
            content: 'Hello! How are you?',
            time: '11:02 AM | Yesterday'
          },
          {
            index: 2,
            state: 'send',
            content: 'I have moved to new house in Los Angels',
            time: '11:03 AM | Yesterday'
          },
          {
            index: 3,
            state: 'receive',
            content: 'Wow! Really? I hope to visit your new house...',
            time: '11:04 AM | Yesterday'
          }
        ]
      },
      {
        index: 2,
        name: {first: 'Alexy', last: 'Ivanonich', avatar: '2'},
        state: 'offline',
        chatContents: [
          {
            index: 0,
            state: 'send',
            content: 'Hello!',
            time: '11:01 AM | Yesterday'
          },
          {
            index: 1,
            state: 'receive',
            content: 'Hello! How are you?',
            time: '11:02 AM | Yesterday'
          },
          {
            index: 2,
            state: 'send',
            content: 'I have moved to new house in Los Angels',
            time: '11:03 AM | Yesterday'
          },
          {
            index: 3,
            state: 'receive',
            content: 'Wow! Really? I hope to visit your new house...',
            time: '11:04 AM | Yesterday'
          }
        ]
      },
      {
        index: 3,
        name: {first: 'Ubensko', last: 'Dalicov', avatar: '3'},
        state: 'online',
        chatContents: [
          {
            index: 0,
            state: 'send',
            content: 'Hello!!!',
            time: '11:01 AM | Yesterday'
          },
          {
            index: 1,
            state: 'receive',
            content: 'Hello! How are you?',
            time: '11:02 AM | Yesterday'
          },
          {
            index: 2,
            state: 'send',
            content: 'I have moved to new house in Los Angels',
            time: '11:03 AM | Yesterday'
          },
          {
            index: 3,
            state: 'receive',
            content: 'Wow! Really? I hope to visit your new house...',
            time: '11:04 AM | Yesterday'
          }
        ]
      },
      {
        index: 4,
        name: {first: 'Mary', last: 'Anna', avatar: '4'},
        state: 'online',
        chatContents: [
          {
            index: 0,
            state: 'send',
            content: 'Hello!',
            time: '11:01 AM | Yesterday'
          },
          {
            index: 1,
            state: 'receive',
            content: 'Hello! How are you?',
            time: '11:02 AM | Yesterday'
          },
          {
            index: 2,
            state: 'send',
            content: 'I have moved to new house in Los Angels',
            time: '11:03 AM | Yesterday'
          },
          {
            index: 3,
            state: 'receive',
            content: 'Wow! Really? I hope to visit your new house...',
            time: '11:04 AM | Yesterday'
          }
        ]
      },
      {
        index: 5,
        name: {first: 'Steven', last: 'Beliove', avatar: '5'},
        state: 'offline',
        chatContents: [
          {
            index: 0,
            state: 'send',
            content: 'Hello!',
            time: '11:01 AM | Yesterday'
          },
          {
            index: 1,
            state: 'receive',
            content: 'Hello! How are you?',
            time: '11:02 AM | Yesterday'
          },
          {
            index: 2,
            state: 'send',
            content: 'I have moved to new house in Los Angels',
            time: '11:03 AM | Yesterday'
          },
          {
            index: 3,
            state: 'receive',
            content: 'Wow! Really? I hope to visit your new house...',
            time: '11:04 AM | Yesterday'
          }
        ]
      },
    ],
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
    selectedContact: {},
    admin: '',
    isMobileOpen: false,
  }),

  methods: {
     toggleLayoutClass(className) {
      const el = document.body;
      this.isMobileOpen = !this.isMobileOpen;

      if (this.isMobileOpen) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    getImgUrl(pet) {
      var images = require.context('@/assets/images/avatars/', false, /\.jpg$/)
      return images('./' + pet + ".jpg")
    },
    contactClick(ind) {
      console.log(ind)
      this.selectedContact = this.chatContacts.filter((val, index) => index === ind)
      console.log(this.selectedContact)
    }
  },
  beforeMount(){
    this.admin = this.$store.state.admin
    this.selectedContact = this.chatContacts.filter((val, index) => index === 0)
  },
  
};
</script>
