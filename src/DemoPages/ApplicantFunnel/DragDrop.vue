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
              @change="StatusChange"
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
          <span v-if="row.value === 0" class="badge badge-info ml-2">new</span>
          <span v-if="row.value === 1" class="badge badge-warning ml-2">ongoing</span>
          <span v-if="row.value === 2" class="badge badge-success ml-2">accept</span>
          <span v-if="row.value === 3" class="badge badge-danger ml-2">reject</span>
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
    <b-modal size="lg" ref="viewModal" id="viewModal" hide-footer>
      <div v-if="selectedRow[0]" class="p-3">
        <div class="m-auto text-center">
          <b-img  class="rounded-pill w-100p" :src="getImgUrl(selectedRow[0].name.avatar, 'avatar')" alt=""></b-img>
          <h4 class="text-center mt-2">{{selectedRow[0].name.first}} {{selectedRow[0].name.last}}</h4> 
          <h5 class="text-center mb-3">{{selectedRow[0].email}}</h5> 
        </div>
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
            <h6 class="font-weight-bold mb-0">Current Property</h6>
            {{selectedRow[0].currentProperty}}
          </b-col>
          <b-col md="6">
            <h6 class="font-weight-bold mb-0">Current Addresss</h6>
            {{selectedRow[0].currentAddress}}
          </b-col>
        </b-row>
        <b-row class="p-3">
          <b-col md="12">
            <h6 class="font-weight-bold">Driver's Lecense No:  {{selectedRow[0].license.no}}</h6>
            <div class="w-150p">
              <expandable-image
                :src="getImgUrl(selectedRow[0].license.image, 'license')"
              />
            </div>
          </b-col>
        </b-row>
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
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import VuePerfectScrollbar from "vue-perfect-scrollbar";


library.add(faCog, faBusinessTime, faSearch, faStar);

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
  
];



export default {
    components: {
      PageTitle,
      // VueCircle,
      // "font-awesome-icon": FontAwesomeIcon,
      // VuePerfectScrollbar
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
    }),

    computed: {
       
    },
    methods: {
      onSelectRow(items){
        this.selectedRow = items;
        this.$root.$emit('bv::show::modal', 'viewModal', '#btnShow')
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
      hideModal() {
      this.$refs['viewModal'].hide()
      },
      del(i) {
        this.items = this.items.filter((val, index) => index !== i)

      },
      filterType(value){
        let   patt = new RegExp(value);
        this.items = items.filter((val) => patt.test(val.type) == true );
      },
      StatusChange(value){
        switch (value) {
          case 'all':
            this.items = items;
            break;
          case 'new':
            this.items = items.filter(val => val.status === 0);
            break;
          case 'ongoing':
            this.items = items.filter(val => val.status === 1);
            break;
          case 'accept':
            this.items = items.filter(val => val.status === 2);
            break;
          case 'reject':
            this.items = items.filter(val => val.status === 3);
            break;
          default:
            break;
        }
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
