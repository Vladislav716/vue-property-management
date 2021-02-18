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
        <div class="my-1 w-400p">
         <div>
            <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0">Filter</legend>
            <b-form-radio-group
              v-model="status"
              :options="options"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
              @change="statusFilter"
            ></b-form-radio-group>
          </div>
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
          <b-img class="rounded-pill" :src="getImgUrl(row.value.avatar, 'avatar')" alt=""></b-img>
          <p class="mb-0">{{row.value.first}} {{row.value.last}}</p> 
        </template>
        <template #cell(license)="row">
         {{row.value.no}}
        </template>
        <template #cell(status)="row">
          <b-dropdown size="sm" :text="row.value === 0 ? 'New' : (row.value === 1 ? 'Ongoing': (row.value === 2 ? 'Accepted' : 'Rejected'))" :variant="row.value === 0 ? 'info' : (row.value === 1 ? 'warning': (row.value === 2 ? 'success' : 'danger'))" >
            <b-dropdown-item @click="changeStatus(row.index, 'new')">new</b-dropdown-item>
            <b-dropdown-item @click="changeStatus(row.index, 'ongoing')">ongoing</b-dropdown-item>
            <b-dropdown-item @click="changeStatus(row.index, 'accepted')">accepted</b-dropdown-item>
            <b-dropdown-item @click="changeStatus(row.index, 'rejected')">rejected</b-dropdown-item>
          </b-dropdown>
        </template>
         <template #cell(action)="row">
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
     <!-- <div class="row card p-3">
      <drag-drop
      :dropzones="dropGroups"
      :dropzonesTitle="'XYZ Company Teams'"
    :originalData="stories"
      :originalTitle="'Tasks to be distributed'"
      :inPlace="true"
      :enableSave="true"
      :enableCancel="true"
      @dropInOriginalBucket="originalBucketDropEvent"
      @dropInDestinationBucket="destinationBucketDropEvent"
    >
      <template #dd-card="{ cardData }">
        <custom-card
          :data="cardData"
          @done="doneMarked"
        />
      </template>
      </drag-drop>

    </div> -->
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"

import PageTitle from "@/Layout/Components/PageTitle.vue"
import {
  faCog,
  faBusinessTime,
  faSearch,
  faStar
} from "@fortawesome/free-solid-svg-icons"
// import DragDrop from 'vue-drag-n-drop'
// import CustomCard from './CustomCard'



library.add(faCog, faBusinessTime, faSearch, faStar)

const items = [
  { 
    name: {first: 'Mary', last: 'Brian', avatar: '1'}, 
    license: {no: '2514033', image: 'abstract1'},
    birthday: '1988-01-16',
    email: 'mary@gmail.com', 
    phone: '+12345678987', 
    currentProperty: 'property1', 
    currentAddress: 'Kameron',
    applicationDate: '2020-12-12',
    status: 0
  },
  {    
    name: {first: 'Hervy', last: 'Santos', avatar: '2'}, 
    license: {no: '2514033', image: 'abstract1'},
    birthday: '1991-03-20',
    email: 'hervy@gmail.com', 
    phone: '+52642158462', 
    currentProperty: 'property3', 
    currentAddress: 'Doenthing',
    applicationDate: '2020-12-20',
    status: 1
  },
  { 
    name: {first: 'Alexey', last: 'Ivanovich',  avatar: '3'}, 
    license: {no: '2514033', image: 'abstract1'},
    birthday: '1978-10-16',
    email: 'alexey@gmail.com', 
    phone: '+12546245215', 
    currentProperty: 'property1', 
    currentAddress: 'Moscow',
    applicationDate: '2020-12-12',
    status: 2
  },
  { 
    name: {first: 'Hendra', last: 'Ganthon', avatar: '4'},  
    license: {no: '2514033', image: 'abstract1'},
    birthday: '1988-01-16',
    email: 'hendra@gmail.com', 
    phone: '+21354654532', 
    currentProperty: 'property1', 
    currentAddress: 'Angelia',
    applicationDate: '2020-12-12',
    status: 3
  },
  
]



export default {
    components: {
      PageTitle,
      // DragDrop,
      // CustomCard
    },
    data: () => ({
        heading: "Applicant Funnel",
        subheading: "Can view Service Provider list and their profile, list of Tasks...",
        icon: "pe-7s-news-paper icon-gradient bg-mixed-hopes",
        items: items,
        fields: [
          {
            key: "name",
            label: "Full Name",
            sortable: true,
            sortDirection: "desc",
            class: "align-middle m-auto text-center"
          },
          { key: "birthday", label: "Birthday", sortable: true, class: "align-middle text-center" },
          { key: "license", label: "Driver's License", sortable: true, class: "align-middle text-center"},
          { key: "email", label: "Email", sortable: true, class: "align-middle text-center" },
          { key: "phone", label: "Phone", sortable: true, class: "align-middle text-center" },
          { key: "currentProperty", label: "Current Property", sortable: true, class: "align-middle text-center" },
          { key: "currentAddress", label: "Current Address", sortable: true, class: "align-middle text-center" },
          { key: "status", label: "Status", sortable: true, class: "align-middle" },
          { key: "action", label: "Action", class: "align-middle" },
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
        status: 'all',
        options: [
          { item: 'all', name: 'All' },
          { item: 'new', name: 'New' },
          { item: 'ongoing', name: 'Ongoing' },
          { item: 'accept', name: 'Accept' },
          { item: 'reject', name: 'Reject' },
        ],
        stories: [
        {
          title: 'Strategy 101',
          description: 'Create a draft of business plan',
          time: '3 days',
          done: false
        },
        {
          title: 'Strategy 102',
          description: 'Finalize the plan',
          time: '4 days',
          done: false
        },
        {
          title: 'Tech diagram',
          description: 'Draw the tech data',
          time: '4 days',
          done: false
        },
        {
          title: 'Place Holder',
          description: 'Data Science Team',
          time: '5 days',
          done: false
        }
      ],

      dropGroups: [
        {
          name: 'Business Team',
          children: []
        },
        {
          name: 'Tech Dept',
          children: []
        },
        {
          name: 'Marketing Dept',
          children: []
        }
      ]
    }),

    computed: {
       
    },
    methods: {
      onSelectRow(items){
        this.selectedRow = items
        this.$root.$emit('bv::show::modal', 'viewModal', '#btnShow')
      },
      getImgUrl(pet, type) {
        var images
        if(type === 'avatar') {
          images = require.context('@/assets/images/avatars/', false, /\.jpg$/)
          return images('./' + pet + ".jpg")
        } else if(type === 'license') {
          images = require.context('@/assets/images/dropdown-header/', false, /\.jpg$/)
          return images('./' + pet + ".jpg")
        }
      },
      del(i) {
        this.items = this.items.filter((val, index) => index !== i)

      },
      statusFilter(value){
        switch (value) {
          case 'all':
            this.items = items
            break
          case 'new':
            this.items = items.filter(val => val.status === 0)
            break
          case 'ongoing':
            this.items = items.filter(val => val.status === 1)
            break
          case 'accept':
            this.items = items.filter(val => val.status === 2)
            break
          case 'reject':
            this.items = items.filter(val => val.status === 3)
            break
          default:
            break
        }
      },
      doneMarked() {

      },
      changeStatus(index, value) {
        console.log(index, value)
        let status;
        switch (value) {
          case 'new':
            status = 0;
            break;
          case 'ongoing':
            status = 1;
            break;
          case 'accepted':
            status = 2;
            break;
          case 'rejected':
            status = 3;
            break;
        
          default:
            break;
        }
        this.items[index].status = status
      },
      originalBucketDropEvent(e){
        console.log(e)
      },
      destinationBucketDropEvent(e) {
        console.log(e)
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
