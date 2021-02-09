<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-card class="main-card mb-4">
      <b-row>
        <b-col md="12">
          <b-button variant="success" v-b-modal.addModal class="pull-right"><font-awesome-icon class="mr-2" icon="plus" />Add Request</b-button>
        </b-col>
        <b-col md="10" class="my-1">
          <div>
            <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0">Filter</legend>
            <b-form-radio-group
              v-model="assigned"
              :options="options"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
              @change="AssignedChange"
            ></b-form-radio-group>
          </div>
        </b-col>
        <b-col md="2" class="my-1">
          <b-form-group horizontal label="Per page" class="mb-0">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Main table element -->
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

        <template #cell(assigned)="row">
          <span :class="row.value ? 'assigned': 'unassigned'">{{row.value ? 'Assigned': 'Unassigned'}}</span>
        </template>
        <template #cell(property)="row">{{ row.value }}</template>
        <template #cell(createdBy)="row">
          <a :href="'/profile/' + row.value.avatar">
            <b-img class="rounded-pill" :src="getImgUrl(row.value.avatar)" alt=""></b-img>
            <p class="mb-0">{{row.value.name}}</p>
          </a>
        </template>
        <template #cell(cost)="row">
          <h6 class="mb-0"> ${{row.value}}</h6>
        </template>
        <template #cell(schedule)="row">
          <h6>{{row.value.subject}}</h6>
          <p class="mb-0">{{row.value.date}}</p>
          <p class="mb-0 truncate  ">{{row.value.notes}}</p>
        </template>
      </b-table>
      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-card>
    <b-modal id="viewModal">
      Hello {{selectedRow}} 
    </b-modal>
    <b-modal size="lg" ref="addModal" id="addModal" hide-footer title="Add Request" >
      <b-row>
        <b-col md="4" class="text-right">
          <p>Service Provider/Employee :</p>
        </b-col>
        <b-col md="4">
          <b-form-radio-group
              v-model="addAssigned"
              :options="addOptions"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-radio-group>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Property :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="property" placeholder="Enter the property"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Request Created By :
        </b-col>
        <b-col md="8">
          <b-form-input list="my-list-id" v-model="requester"></b-form-input>
          <datalist id="my-list-id">
            <option v-for="requester in requesters" :key="requester.value" >{{ requester.label }}</option>
          </datalist>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Cost :
        </b-col>
        <b-col md="8">
          <b-form-input type="number" v-model="cost"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Schedule :
        </b-col>
        <b-col md="8">
          <label>Date</label>
          <b-input-group class="mb-3">
            <b-form-input
              id="example-input"
              v-model="date"
              type="text"
              placeholder="YYYY-MM-DD"
              autocomplete="off"
            ></b-form-input>
            <b-input-group-append>
              <b-form-datepicker
                v-model="date"
                button-only
                right
                locale="en-US"
                aria-controls="example-input"
              ></b-form-datepicker>
            </b-input-group-append>
          </b-input-group>
          <label>Subject</label>
          <b-form-input v-model="subject"></b-form-input>
          <label>notes</label>
          <b-form-textarea
            v-model="notes"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="pull-right p-4">
        <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button>
        <b-button class="w-100p" variant="success"  @click="AddProperty">Ok</b-button>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import PageTitle from "@/Layout/Components/PageTitle.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const items = [
  { assigned: true, property: 'Property1', createdBy: {avatar: '2', name: 'Jhone'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request and it is the best service, I think there are more properties', subject: 'property1'}  },
  { assigned: false, property: 'Property1', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { assigned: false, property: 'Property1', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { assigned: true, property: 'Property1', createdBy: {avatar: '2', name: 'Jhone'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request and it is the best service, I think there are more properties', subject: 'property1'}  },
  { assigned: false, property: 'Property1', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { assigned: false, property: 'Property1', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { assigned: true, property: 'Property1', createdBy: {avatar: '2', name: 'Jhone'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request and it is the best service, I think there are more properties', subject: 'property1'}  },
  { assigned: false, property: 'Property1', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { assigned: false, property: 'Property1', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
];

export default {
  components: {
    PageTitle,
    "font-awesome-icon": FontAwesomeIcon,
  },
  data: () => ({
    heading: "Service Requests",
    subheading:
      "View and Add specific service requests.",
    icon: "pe-7s-notebook icon-gradient bg-mixed-hopes",
  
    items: items,
    fields: [
      {
        key: "assigned",
        label: "Service Provider/Employee",
        sortable: true,
        sortDirection: "desc",
        class: "align-middle text-center"
      },
      { key: "property", label: "Property", sortable: true, class: "align-middle text-center"},
      { key: "createdBy", label: "Rquest Creted by", sortable: true, class: "align-middle text-center" },
      { key: "cost", label: "Cost", sortable: true, class: "align-middle text-center" },
      { key: "schedule", label: "Schedule", sortable: true, class: "align-middle" },
    ],
    selectedRow: [],
    currentPage: 1,
    perPage: 5,
    totalRows: items.length,
    pageOptions: [5, 10, 15],
    options: [
      { item: 'all', name: 'All' },
      { item: 'assigned', name: 'Assigned' },
      { item: 'unassigned', name: 'Unassigned' },
    ],
    sortBy: 'age',
    sortDesc: false,
    sortDirection: "asc",
    filter: null,
    assigned: 'all',
    addAssigned: true,
    addOptions: [
      { item: true, name: 'Assigned' },
      { item: false, name: 'Unassigned' },
    ],
    property: '',
    requesters: [{label: 'Michel Madrid', value: '1'},
     {label: 'Ommiton Gason', value: '2'},
     {label: 'Dolphi Ruchel', value: '3'},
     {label: 'Json Alpil', value: '4'}],
    cost: '',
    date: '',
    notes: '',
    subject: '',
    requester: ''
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
    onSelectRow(items){
      console.log(items)
      this.selectedRow = items;
      // this.$root.$emit('bv::show::modal', 'viewModal', '#btnShow')
    },
    getImgUrl(pet) {
    var images = require.context('@/assets/images/avatars/', false, /\.jpg$/)
    return images('./' + pet + ".jpg")
    },
    AssignedChange(value){
      switch (value) {
        case 'all':
          this.items = items.filter(val => val.assigned == true || val.assigned == false)
          break;
        case 'assigned':
          this.items = items.filter(val => val.assigned == true)
          break;
        default:
          this.items = items.filter(val => val.assigned == false)
          break;
      }
    },
    hideModal() {
      this.$refs['addModal'].hide()
    },
    AddProperty() {
      console.log(this.addAssigned, this.property, this.requesters.filter(val => val.label == this.requester)[0].value, this.cost, this.date, this.subject, this.notes )
      items.push({
        assigned: this.addAssigned,
        property: this.property,
        createdBy: {
          avatar: this.requesters.filter(val => val.label == this.requester)[0] ? this.requesters.filter(val => val.label == this.requester)[0].value : '',
          name: this.requester
        },
        cost: this.cost,
        schedule: {
          date: this.date,
          subject: this.subject,
          notes: this.notes
        }
      })
      this.$refs['addModal'].hide()
    }
  }
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

.vertical-middle {
  vertical-align: middle;
}

.truncate   {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


</style>
