<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <div class="row card p-3">
      <div class="flex justify-space-between">
        <div class="my-1 w-100p">
          <b-form-group label="Per page" class="mb-0">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-group>
        </div>
        <div class=" my-1 w-200p">
          <b-form-group label="Service type" class="mb-0">
            <b-form-input v-model="filter" label="filter" placeholder="Enter type" @input="filterType"></b-form-input>
          </b-form-group>
        </div>
      </div>
      <b-col md="10">
      </b-col>
      <b-table 
        show-empty 
        stacked="md" 
        :items="items" 
        :fields="fields" 
        sort-icon-left
        responsive="sm"
        :current-page="currentPage"
        :per-page="perPage"
        :sort-by.sync="sortBy" 
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"  
        @row-selected="onSelectRow"
         selectable
         select-mode="single"
      >
        <template #cell(name)="row">
          <b-img class="rounded-pill" :src="getImgUrl(row.value.avatar)" alt=""></b-img>
          <p class="mb-0">{{row.value.first}} {{row.value.last}}</p> 
        </template>
        <template #cell(actions)="row">
          <!-- <b-button variant="outline-success" class="btn-sm mr-2">
            View Profile
          </b-button> -->
          <b-button variant="outline-danger" class="btn-sm" @click="del(row.index)">
            <i class="pe-7s-trash"></i>
          </b-button>
        </template>
      </b-table>
       <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
    </div>
    <b-modal size="lg" ref="viewModal" id="viewModal" hide-footer>
      <div v-if="selectedRow[0]" class="p-3">
        <!-- <b-row> -->
          <div class="m-auto text-center">
            <b-img  class="rounded-pill w-100p" :src="getImgUrl(selectedRow[0].name.avatar)" alt=""></b-img>
            <h4 class="text-center mt-2">{{selectedRow[0].name.first}} {{selectedRow[0].name.last}}</h4> 
            <h5 class="text-center mb-3">{{selectedRow[0].email}}</h5> 
          </div>
        <!-- </b-row> -->
        <h5 class="text-info">Contact information</h5>
        <b-row class="p-3 mb-1">
          <b-col md="6">
            <h6 class="font-weight-bold mb-0">First Name</h6>
            {{selectedRow[0].name.first}}
          </b-col>
          <b-col md="6">
            <h6 class="font-weight-bold mb-0">Last Name</h6>
            {{selectedRow[0].name.last}}
          </b-col>
        </b-row>
        <b-row class="p-3 mb-1">
          <b-col md="6">
            <h6 class="font-weight-bold mb-0">Phone</h6>
            {{selectedRow[0].phone}}
          </b-col>
          <b-col md="6">
            <h6 class="font-weight-bold mb-0">Email</h6>
            {{selectedRow[0].email}}
          </b-col>
        </b-row>
        <b-row class="p-3 mb-1">
          <b-col md="6">
            <h6 class="font-weight-bold mb-0">Company Name</h6>
            {{selectedRow[0].company}}
          </b-col>
          <b-col md="6">
            <h6 class="font-weight-bold mb-0">Company Website</h6>
            <a :href="selectedRow[0].companySite">{{selectedRow[0].companySite}}</a>
          </b-col>
        </b-row>
        <h5 class="text-info">Description</h5>
        <b-row class="pl-4 pr-4 mb-3 mt-2">
          {{selectedRow[0].description}}
        </b-row>
        <h5 class="text-info">List of Tasks</h5>
          <VuePerfectScrollbar class="app-sidebar-scroll h-180p" v-once>
            <ul class="todo-list-wrapper list-group list-group-flush">
              <li class="list-group-item" v-for="task in selectedRow[0].task" :key="task.index">
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
      
      <b-row class="pull-right p-4">
        <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
// import VueCircle from "vue2-circle-progress";

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

const items = [
  { 
    name: {first: 'Mary', last: 'Brian', avatar: '1'}, 
    company: 'Carsters Co', 
    email: 'mary@service@gmail.com', 
    phone: '+12345678987', 
    companySite: 'http://www.carsters.com', 
    description: 'AAA',
    type: 'screening',
    task: [
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
    ] 
  },
  { 
    name: {first: 'Hervy', last: 'Santos', avatar: '2'}, 
    company: 'Hervy Co', 
    email: 'hervy@service@gmail.com', 
    phone: '+52642158462', 
    companySite: 'http://www.hervy.com', 
    description: 'BBB',
    type: 'legal',
    task: [
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
    ] 
  },
  { 
    name: {first: 'Alexey', last: 'Ivanovich',  avatar: '3'}, 
    company: 'Harasho Co', 
    email: 'alexey@service@gmail.com',
    phone: '+12546245215', 
    companySite: 'http://www.harasho.com', 
    description: 'CCC',
    type: 'inspection',
    task: [
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
    ] 
  },
  { 
    name: {first: 'Hendra', last: 'Ganthon', avatar: '4'}, 
    company: 'Beauty Co', 
    email: 'hendra@service@gmail.com', 
    phone: '+21354654532', 
    companySite: 'http://www.beuty.com', 
    description: 'DDD',
    type: 'collection',
    task: [
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
    ] 
  },
  { 
    name: {first: 'Ivishido', last: 'Slev', avatar: '5'}, 
    company: 'Modern Co', 
    email: 'ivishido@service@gmail.com', 
    phone: '+95632154876', 
    companySite: 'http://www.modern.com', 
    description: 'EEE',
    type: 'protection',
    task: [
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
    ] 
  },
  { 
    name: {first: 'Jeng', last: 'Hwan', avatar: '6'}, 
    company: 'Pestou Co', 
    email: 'jeng@service@gmail.com', 
    phone: '+23151242546', 
    companySite: 'http://www.pestou.com', 
    description: 'FFF',
    type: 'advertising',
    task: [
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
    ] 
  },
  { 
    name: {first: 'Yelena', 
    last: 'Oxana', avatar: '7'}, 
    company: 'Leoven Co', 
    email: 'yelena@service@gmail.com', 
    phone: '+21456578942', 
    companySite: 'http://www.leoven.com', 
    description: 'GGG',
    type: 'legal',
    task: [
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
    ] 
  },
  { 
    name: {first: 'Jhone', last: 'Steven', avatar: '8'}, 
    company: 'Property Gone', 
    email: 'jhone@service@gmail.com', 
    phone: '+32541876542', 
    companySite: 'http://www.propertyGone.com', 
    description: 'HHH',
    type: 'inspection',
    task: [
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
    ] 
  },
  { 
    name: {first: 'Seneo', last: 'Majliu', avatar: '9'}, 
    company: 'Hey Co', 
    email: 'seneo@service@gmail.com', 
    phone: '+32154687575', 
    companySite: 'http://www.hey.com', 
    description: 'III',
    type: 'protection',
    task: [
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
    ] 
  },
];



export default {
    components: {
      PageTitle,
      // VueCircle,
      "font-awesome-icon": FontAwesomeIcon,
      VuePerfectScrollbar
    },
    data: () => ({
        heading: "Service Provider",
        subheading: "Can view Service Provider list and their profile, list of Tasks...",
        icon: "pe-7s-coffee icon-gradient bg-mixed-hopes",
        items: items,
         fields: [
          {
            key: "name",
            label: "Provider Name",
            sortable: true,
            sortDirection: "desc",
            class: "align-middle m-auto text-center"
          },
          { key: "company", label: "Company Name", sortable: true, class: "align-middle text-center"},
          { key: "email", label: "Email", sortable: true, class: "align-middle text-center" },
          { key: "phone", label: "Phone", sortable: true, class: "align-middle text-center" },
          { key: "type", label: "Type", sortable: true, class: "align-middle text-center" },
          { key: "actions", label: "Actions", sortable: true, class: "align-middle" },
        ],
        totalRows: items.length,
        pageOptions: [5, 10, 15],
        selectedRow: {},
        currentPage: 1,
        perPage: 5,
        sortBy: 'age',
        sortDesc: false,
        sortDirection: "asc",
        filter: '',
        
     
      
    }),

    computed: {
       
    },
    methods: {
      onSelectRow(items){
        this.selectedRow = items;
        this.$root.$emit('bv::show::modal', 'viewModal', '#btnShow')
      },
      getImgUrl(pet) {
        var images = require.context('@/assets/images/avatars/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
      },
      hideModal() {
      this.$refs['viewModal'].hide()
      },
      del(i) {
        this.items = this.items.filter((val, index) => index !== i)

      },
      filterType(value){
        let   patt = new RegExp(value);
        this.items = items.filter((val) => patt.test(val.type) == true );
      }
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
