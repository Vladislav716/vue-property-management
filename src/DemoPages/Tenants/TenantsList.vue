<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <div>
    <div class="app-inner-layout chat-layout">
      <div class="app-inner-layout__wrapper">
        <div class="app-inner-layout__sidebar card  ">
          <div class="app-inner-layout__sidebar-header">
            <ul class="nav flex-column">
              <li class="pt-4 pl-3 pr-3 pb-3 nav-item">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <font-awesome-icon icon="search" />
                    </div>
                  </div>
                  <input placeholder="Search..." type="text" class="form-control" />
                </div>
              </li>
            </ul>
          </div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Alina Mcloughlin</div>
                      <div class="widget-subheading">Aenean vulputate eleifend tellus.</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="1" class="dropdown-item active">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/3.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Chad Evans</div>
                      <div class="widget-subheading">Vivamus elementum semper nisi.</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/3.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Ella-Rose Henry</div>
                      <div class="widget-subheading">Etiam sit amet orci eget eros faucibus</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Ruben Tillman</div>
                      <div class="widget-subheading">Lorem ipsum dolor sit amet, consectetuer</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/3.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Ella-Rose Henry</div>
                      <div class="widget-subheading">Etiam sit amet orci eget eros faucibus</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Ruben Tillman</div>
                      <div class="widget-subheading">Lorem ipsum dolor sit amet, consectetuer</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div class="app-inner-layout__content height-fit-content mb-2">
            <div class="table-responsive card w-50 mr-2 height-fit-content">
              <div class="app-inner-layout__top-pane border-bottom h-65p badge-info">
                <div class="pane-left">
                  <div class="mobile-app-menu-btn">
                    <button type="button" class="hamburger hamburger--elastic"
                      v-bind:class="{ 'is-active' : isMobileOpen }" @click="toggleLayoutClass('open-mobile-menu')">
                      <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                      </span>
                    </button>
                  </div>
                  <div class="avatar-icon-wrapper mr-2">
                    <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon avatar-icon-xl rounded">
                      <img width="82" src="@/assets/images/avatars/1.jpg" alt />
                    </div>
                  </div>
                  <h4 class="mb-0 text-nowrap">
                    Chad Evans
                    <div class="opacity-7">
                      Last Seen Online:
                      <span class="opacity-8">10 minutes ago</span>
                    </div>
                  </h4>
                </div>
              </div>
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p" v-once>
                <div class="chat-wrapper">
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
                      <div class="chat-box">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                      </div>
                      <small class="opacity-6">
                        <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                  <div class="float-right">
                    <div class="chat-box-wrapper chat-box-wrapper-right">
                      <div>
                        <div class="chat-box">
                          Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                        </div>
                        <small class="opacity-6">
                          <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                        </small>
                      </div>
                      <div>
                        <div class="avatar-icon-wrapper ml-1">
                          <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                          <div class="avatar-icon avatar-icon-lg rounded">
                            <img src="@/assets/images/avatars/2.jpg" alt />
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
                  </div>
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
            <div class="table-responsive card w-50 height-fit-content">
              <div class="app-inner-layout__top-pane border-bottom h-65p badge-info">
                <h4>Transactions</h4>
              </div>
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p" >
                <div class="p-2">
                  <b-table striped hover :items="transactionItems" :fields="transactionFields"></b-table>
                </div>
              </VuePerfectScrollbar>
              <div class="app-inner-layout__bottom-pane d-block text-center">
                <div class="mb-0 position-relative row form-group">
                  <div class="col-sm-12">
                    <b-button variant="success" class="pull-right"><font-awesome-icon class="mr-2" icon="plus" />Add Transaction</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="app-inner-layout__content height-fit-content mb-2">
            <div class="table-responsive card w-50 height-fit-content mr-2">
              <div class="app-inner-layout__top-pane border-bottom h-65p badge-info">
                <h4>Profile</h4>
              </div>
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p" >
                <div class="widget-content-left">
                  <div class="text-center">
                    <img src="@/assets/images/avatars/2.jpg" class="rounded-circle w-70p" alt />
                    <h4>Anthon Ivanovich</h4>
                    <h6>Short Description</h6>
                  </div>
                  <b-row class="m-0 w-100">
                    <b-col md="4 text-right">
                      <h6>Current Property : </h6>
                    </b-col>
                    <b-col md="8">
                      <a href="#"><h6>Property1</h6></a>
                    </b-col>
                    <b-col md="4 text-right">
                      <h6>driver's license : </h6>
                    </b-col>
                    <b-col md="8">
                      <div class="w-150p">
                        <expandable-image
                          :src="require('@/assets/images/dropdown-header/abstract1.jpg')"
                        />
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </VuePerfectScrollbar>
            </div>
            <div class="table-responsive card w-50 height-fit-content">
              <div class="app-inner-layout__top-pane border-bottom h-65p badge-info">
                <h4>Task List</h4>
              </div>
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p" >
                <div class="p-2">
                  <b-table striped hover :items="transactionItems" :fields="transactionFields"></b-table>
                </div>
              </VuePerfectScrollbar>
            </div>
          </div>
          <div class="app-inner-layout__content height-fit-content mb-2">
             <div class="table-responsive height-fit-content">
              <div class="card  widget-content badge-info">
                <div class="widget-content-wrapper text-white">
                  <div class="widget-content-left">
                    <div ><h5>Current Balance</h5></div>
                    <div class="widget-subheading">Total Clients Profit</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-white">
                      <span>$ 33600</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="app-inner-layout__content height-fit-content mb-2">
             <div class="table-responsive card height-fit-content">
              <div class="app-inner-layout__top-pane border-bottom h-65p badge-info flex justify-content-between">
                <h4>Service Requests</h4>
                <div class="pull-right">
                  <b-button variant="success">Start Eviction Process</b-button>
                </div>
              </div>
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p" >
                <div class="p-2">
                  <b-table striped hover :items="transactionItems" :fields="transactionFields"></b-table>
                </div>
              </VuePerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VuePerfectScrollbar from "vue-perfect-scrollbar";


library.add(faCog, faBusinessTime, faSearch, faStar);



export default {
    components: {
      PageTitle,
      "font-awesome-icon": FontAwesomeIcon,
      VuePerfectScrollbar
    },
    data: () => ({
        heading: "Tenants List",
        subheading: "Can view Tenants list and their profile, balance, latest transactions, chat box...",
        icon: "pe-7s-note2 icon-gradient bg-mixed-hopes",
        isMobileOpen: false,
        transactionFields: ['first_name', 'last_name', 'age'],
        transactionItems: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      
    }),

    computed: {
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter(f => f.sortable)
                .map(f => {
                    return { text: f.label, value: f.key };
                });
        }
    },
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
            var images = require.context(
                "@/assets/images/avatars/",
                false,
                /\.jpg$/
            );
            return images("./" + pet + ".jpg");
        },
      
    }
};
</script>

<style scoped>

.vertical-middle {
    vertical-align: middle;
}

.truncate {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
