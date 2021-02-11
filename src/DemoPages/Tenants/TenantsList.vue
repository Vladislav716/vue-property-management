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
            <li class="nav-item" v-for="chatContact in chatContacts" :key="chatContact.index" @click="contactClick(chatContact.index)">
              <button type="button" :tabindex="chatContact.index" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div v-if="chatContact.state === 'online'" class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div v-if="chatContact.state === 'offline'" class="badge badge-bottom badge-secondary badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <b-img :src="getImgUrl(chatContact.name.avatar, 'avatar')" alt=""></b-img>
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
        </div>
        <div class="w-100">
          <div class="app-inner-layout__content height-fit-content mb-2">
            <div class="table-responsive card w-50 mr-2 height-fit-content">
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
                      <b-img width="82" :src="getImgUrl(selectedContact[0].name.avatar, 'avatar')" alt ></b-img>
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
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p">
                <div class="chat-wrapper" v-for="chatContent in selectedContact[0].chatContents" :key="chatContent.index">
                  <div v-if="chatContent.state === 'receive'" class="chat-box-wrapper">
                    <div>
                      <div class="avatar-icon-wrapper mr-2">
                        <div class="avatar-icon avatar-icon-lg rounded">
                          <b-img :src="getImgUrl(selectedContact[0].name.avatar, 'avatar')" alt ></b-img>
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
                  <b-table striped hover :items="selectedContact[0].transactions" :fields="transactionFields"></b-table>
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
                    <b-img :src="getImgUrl(selectedContact[0].name.avatar, 'avatar')" class="rounded-circle w-70p" alt ></b-img>
                    <h4>{{selectedContact[0].name.first}} {{selectedContact[0].name.last}}</h4>
                    <h6>{{selectedContact[0].profile.description}}</h6>
                  </div>
                  <b-row class="m-0 w-100">
                    <b-col md="4 text-right">
                      <h6>Current Property : </h6>
                    </b-col>
                    <b-col md="8">
                      <a href="#"><h6>{{selectedContact[0].profile.currentProperty}}</h6></a>
                    </b-col>
                    <b-col md="4 text-right">
                      <h6>driver's license : {{selectedContact[0].profile.license.no}}</h6>
                    </b-col>
                    <b-col md="8">
                      <div class="w-150p">
                        <expandable-image
                          :src="getImgUrl(selectedContact[0].profile.license.image, 'license')"
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
                <ul class="todo-list-wrapper list-group list-group-flush">
                  <li class="list-group-item" v-for="task in selectedContact[0].tasks" :key="task.index">
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
                      <span>$ {{selectedContact[0].currentBalance}}</span>
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
                  <b-table striped hover :items="selectedContact[0].serviceRequests" :fields="requestFields">
                    <template #cell(assigned)="row">
                      <span :class="row.value ? 'assigned': 'unassigned'">{{row.value ? 'Assigned': 'Unassigned'}}</span>
                    </template>
                  </b-table>
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
        transactionFields: ['propertyName', 'income', 'expenses'],
        requestFields: ['property', 'cost', 'assigned'],
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
            ],
            transactions: [
              {
                propertyName: 'Property1',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property2',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property3',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property4',
                income: '562410',
                expenses: '225620'
              },
            ],
            profile: {
              description: 'Short Description about me',
              license: {no: '226320', image: 'abstract1'},
              currentProperty: 'Property1'
            },
            tasks:[
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
            currentBalance: '336000',
            serviceRequests: [
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-10'
              },
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-26'
              },
              {
                property: 'Property1',
                cost: '2200',
                assigned: true,
                date: '2021-02-02'
              },
              {
                property: 'Property1',
                cost: '12300',
                assigned: true,
                date: '2021-10-11'
              },
              {
                property: 'Property1',
                cost: '223600',
                assigned: true,
                date: '2021-01-01'
              },
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
            ],
             transactions: [
              {
                propertyName: 'Property1',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property2',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property3',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property4',
                income: '562410',
                expenses: '225620'
              },
            ],
            profile: {
              description: 'Short Description about me',
              license: {no: '226320', image: 'abstract1'},
              currentProperty: 'Property1'
            },
            tasks:[
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
            currentBalance: '336000',
            serviceRequests: [
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-10'
              },
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-26'
              },
              {
                property: 'Property1',
                cost: '2200',
                assigned: true,
                date: '2021-02-02'
              },
              {
                property: 'Property1',
                cost: '12300',
                assigned: true,
                date: '2021-10-11'
              },
              {
                property: 'Property1',
                cost: '223600',
                assigned: true,
                date: '2021-01-01'
              },
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
            ],
             transactions: [
              {
                propertyName: 'Property1',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property2',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property3',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property4',
                income: '562410',
                expenses: '225620'
              },
            ],
            profile: {
              description: 'Short Description about me',
              license: {no: '226320', image: 'abstract1'},
              currentProperty: 'Property1'
            },
            tasks:[
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
            currentBalance: '336000',
            serviceRequests: [
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-10'
              },
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-26'
              },
              {
                property: 'Property1',
                cost: '2200',
                assigned: true,
                date: '2021-02-02'
              },
              {
                property: 'Property1',
                cost: '12300',
                assigned: true,
                date: '2021-10-11'
              },
              {
                property: 'Property1',
                cost: '223600',
                assigned: true,
                date: '2021-01-01'
              },
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
            ],
             transactions: [
              {
                propertyName: 'Property1',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property2',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property3',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property4',
                income: '562410',
                expenses: '225620'
              },
            ],
            profile: {
              description: 'Short Description about me',
              license: {no: '226320', image: 'abstract1'},
              currentProperty: 'Property1'
            },
            tasks:[
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
            currentBalance: '336000',
            serviceRequests: [
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-10'
              },
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-26'
              },
              {
                property: 'Property1',
                cost: '2200',
                assigned: true,
                date: '2021-02-02'
              },
              {
                property: 'Property1',
                cost: '12300',
                assigned: true,
                date: '2021-10-11'
              },
              {
                property: 'Property1',
                cost: '223600',
                assigned: true,
                date: '2021-01-01'
              },
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
            ],
             transactions: [
              {
                propertyName: 'Property1',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property2',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property3',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property4',
                income: '562410',
                expenses: '225620'
              },
            ],
            profile: {
              description: 'Short Description about me',
              license: {no: '226320', image: 'abstract1'},
              currentProperty: 'Property1'
            },
            tasks:[
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
            currentBalance: '336000',
            serviceRequests: [
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-10'
              },
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-26'
              },
              {
                property: 'Property1',
                cost: '2200',
                assigned: true,
                date: '2021-02-02'
              },
              {
                property: 'Property1',
                cost: '12300',
                assigned: true,
                date: '2021-10-11'
              },
              {
                property: 'Property1',
                cost: '223600',
                assigned: true,
                date: '2021-01-01'
              },
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
            ],
             transactions: [
              {
                propertyName: 'Property1',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property2',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property3',
                income: '562410',
                expenses: '225620'
              },
              {
                propertyName: 'Property4',
                income: '562410',
                expenses: '225620'
              },
            ],
            profile: {
              description: 'Short Description about me',
              license: {no: '226320', image: 'abstract1'},
              currentProperty: 'Property1'
            },
            tasks:[
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
            currentBalance: '336000',
            serviceRequests: [
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-10'
              },
              {
                property: 'Property1',
                cost: '35000',
                assigned: true,
                date: '2020-12-26'
              },
              {
                property: 'Property1',
                cost: '2200',
                assigned: true,
                date: '2021-02-02'
              },
              {
                property: 'Property1',
                cost: '12300',
                assigned: true,
                date: '2021-10-11'
              },
              {
                property: 'Property1',
                cost: '223600',
                assigned: true,
                date: '2021-01-01'
              },
            ]
          },
        ],
        selectedContact: {},
      
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

      contactClick(ind) {
        console.log(ind)
        this.selectedContact = this.chatContacts.filter((val, index) => index === ind)
        console.log(this.selectedContact)
      }
      
    },
    beforeMount(){
      this.selectedContact = this.chatContacts.filter((val, index) => index === 0)
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

