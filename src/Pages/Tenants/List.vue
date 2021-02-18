<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <b-card class="main-card mb-4">
      <div class="pull-right">
        <b-form-group horizontal label="Per page" class="mb-0 w-200p mb-2">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </div>
       <b-table 
        show-empty 
        stacked="md" 
        :items="items" 
        :fields="fields" 
        sort-icon-left
        responsive="sm"
        :current-page="currentPage"
        :per-page="perPage" 
        :filter="filter" 
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
        <template #cell(email)="row">
          {{row.item.profile.email}}
        </template>
        <template #cell(currentAddress)="row">
          {{row.item.profile.address}}
        </template>
        <template #cell(currentProperty)="row">
          {{row.item.profile.currentProperty}}
        </template>
        <template #cell(license)="row">
          {{row.item.profile.license.no}}
        </template>
      </b-table>
        <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-card>
   
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
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import VuePerfectScrollbar from "vue-perfect-scrollbar";


library.add(faCog, faBusinessTime, faSearch, faStar);

const items = [
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
        amount: '52660',
        date: '2020-12-25',
        type: 'type1',
        actions: 0
      },
      {
        amount: '1200',
        date: '2020-12-05',
        type: 'type2',
        actions: 1
      },
      {
        amount: '332510',
        date: '2020-12-25',
        type: 'type3',
        actions: 2
      },
      {
        amount: '2656874',
        date: '2020-12-25',
        type: 'type4',
        actions: 3
      },
    ],
    profile: {
      email: 'alina@email.com',
      phone: '+12345678987',
      sex: 'female',
      address: 'Address1',
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
        amount: '52660',
        date: '2020-12-25',
        type: 'type1',
        actions: 0
      },
      {
        amount: '1200',
        date: '2020-12-05',
        type: 'type2',
        actions: 1
      },
      {
        amount: '332510',
        date: '2020-12-25',
        type: 'type3',
        actions: 2
      },
      {
        amount: '2656874',
        date: '2020-12-25',
        type: 'type4',
        actions: 3
      },
    ],
    profile: {
      email: 'choba@email.com',
      phone: '+3215487952',
      sex: 'female',
      address: 'Address2',
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
        amount: '52660',
        date: '2020-12-25',
        type: 'type1',
        actions: 0
      },
      {
        amount: '1200',
        date: '2020-12-05',
        type: 'type2',
        actions: 1
      },
      {
        amount: '332510',
        date: '2020-12-25',
        type: 'type3',
        actions: 2
      },
      {
        amount: '2656874',
        date: '2020-12-25',
        type: 'type4',
        actions: 3
      },
    ],
    profile: {
      email: 'alexey@email.com',
      phone: '+154587887854',
      sex: 'female',
      address: 'Address3',
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
        amount: '52660',
        date: '2020-12-25',
        type: 'type1',
        actions: 0
      },
      {
        amount: '1200',
        date: '2020-12-05',
        type: 'type2',
        actions: 1
      },
      {
        amount: '332510',
        date: '2020-12-25',
        type: 'type3',
        actions: 2
      },
      {
        amount: '2656874',
        date: '2020-12-25',
        type: 'type4',
        actions: 3
      },
    ],
    profile: {
      email: 'ubensko@email.com',
      phone: '+154587887854',
      sex: 'female',
      address: 'Address3',
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
        amount: '52660',
        date: '2020-12-25',
        type: 'type1',
        actions: 0
      },
      {
        amount: '1200',
        date: '2020-12-05',
        type: 'type2',
        actions: 1
      },
      {
        amount: '332510',
        date: '2020-12-25',
        type: 'type3',
        actions: 2
      },
      {
        amount: '2656874',
        date: '2020-12-25',
        type: 'type4',
        actions: 3
      },
    ],
    profile: {
      email: 'mary@email.com',
      phone: '+154587887854',
      sex: 'female',
      address: 'Address3',
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
        amount: '52660',
        date: '2020-12-25',
        type: 'type1',
        actions: 0
      },
      {
        amount: '1200',
        date: '2020-12-05',
        type: 'type2',
        actions: 1
      },
      {
        amount: '332510',
        date: '2020-12-25',
        type: 'type3',
        actions: 2
      },
      {
        amount: '2656874',
        date: '2020-12-25',
        type: 'type4',
        actions: 3
      },
    ],
    profile: {
      email: 'steven@email.com',
      phone: '+154587887854',
      sex: 'female',
      address: 'Address3',
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
]
export default {
    components: {
      PageTitle
      // "font-awesome-icon": FontAwesomeIcon,
      // VuePerfectScrollbar
    },
    data: () => ({
        heading: "Tenants List",
        subheading: "Can view Tenants list and their profile, balance, latest transactions, chat box...",
        icon: "pe-7s-note2 icon-gradient bg-mixed-hopes",
     
        fields: [
          { key: "name", label: "Name", sortable: true, class: "align-middle text-center"},
          { key: "email", label: "Email", sortable: true, class: "align-middle" },
          { key: "currentAddress", label: "Current Address", class: "align-middle text-center"},
          { key: "currentProperty", label: "Current Property", sortable: true, class: "align-middle text-center" },
          { key: "license", label: "License Number", sortable: true, class: "align-middle text-center" },
        ],
        items: items,
        pageOptions: [5, 10, 15],
        sortBy: 'age',
        sortDesc: false,
        sortDirection: "asc",
        filter: null,
        currentPage: 1,
        perPage: 5,
        totalRows: items.length,
    }),

    methods: {
      onSelectRow(items){
        console.log(items)
        this.$router.push({
          name: 'tenanatsAdd',
          params: {item: items[0]}, 
        })
      },
       
      getImgUrl(pet) {
        var images = require.context('@/assets/images/avatars/', false, /\.jpg$/)
          return images('./' + pet + ".jpg");
        
      },

      
    },
};
</script>

<style scoped>
</style>

