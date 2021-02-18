<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="pull-right mb-2">
      <b-button variant="success" v-b-modal.addModal><i class="pe-7s-plus"></i>Add Request</b-button>
    </div>
    <b-card class="main-card mb-4">
      <b-row>
        <b-col md="10" class="my-1">
          <div>
            <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0">Filter</legend>
            <b-form-radio-group
              v-model="assigned"
              :options="filterOptions"
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
          <span :class="row.value">{{row.value}}</span>
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
        <template #cell(index)="row">
           <button class="border-0 btn-transition btn btn-outline-success" @click="edit(row.value)">
              <i class="pe-7s-tools fsize-4"></i>
            </button>
            <button class="border-0 btn-transition btn btn-outline-danger" @click="del(row.value)">
              <i class="pe-7s-trash fsize-4"></i>
            </button>
        </template>
      </b-table>
      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-card>
    <!-- Edit Modal -->
    <b-modal size="lg" ref="editModal" id="editModal" hide-footer title="Edit Request" v-if="selectedRow[0]">
      <b-row>
        <b-col md="4" class="text-right">
          <p>Service Provider/Employee :</p>
        </b-col>
        <b-col md="4">
          <b-form-select v-model="selectedRow[0].assigned" :options="assignedOptions"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Property :
        </b-col>
        <b-col md="8">
          <b-form-select v-model="selectedRow[0].property" :options="propertyOptions"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Request Created By :
        </b-col>
        <b-col md="8">
          <b-button @click="$refs.licenseInput.click()" class="btn-right mr-3">Select an image</b-button>
          <b-img v-if="imageUrl" :src="imageUrl" class="w-100p"></b-img>
          <input style="display: none" ref="licenseInput" type="file" @change="imageSelected" enctype="multipart/form-data">
          <b-form-input list="my-list-id" v-model="selectedRow[0].createdBy.name"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Cost :
        </b-col>
        <b-col md="8">
          <b-form-input type="number" v-model="selectedRow[0].cost"></b-form-input>
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
              v-model="selectedRow[0].schedule.date"
              type="text"
              placeholder="YYYY-MM-DD"
              autocomplete="off"
            ></b-form-input>
            <b-input-group-append>
              <b-form-datepicker
                v-model="selectedRow[0].schedule.date"
                button-only
                right
                locale="en-US"
                aria-controls="example-input"
              ></b-form-datepicker>
            </b-input-group-append>
          </b-input-group>
          <label>Subject</label>
          <b-form-input v-model="selectedRow[0].schedule.subject"></b-form-input>
          <label>notes</label>
          <b-form-textarea
            v-model="selectedRow[0].schedule.notes"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="pull-right p-4">
        <!-- <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button> -->
        <b-button class="w-100p" variant="success"  @click="EditRequest">Ok</b-button>
      </b-row>
    </b-modal>
    <!-- Add Modal -->
    <b-modal size="lg" ref="addModal" id="addModal" hide-footer title="Add Request">
      <b-row>
        <b-col md="4" class="text-right">
          <p>Service Provider/Employee :</p>
        </b-col>
        <b-col md="4">
          <b-form-select v-model="request.assigned" :options="assignedOptions"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Property :
        </b-col>
        <b-col md="8">
          <b-form-select v-model="request.property" :options="propertyOptions"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Request Created By :
        </b-col>
        <b-col md="8">
          <b-button @click="$refs.licenseInput.click()" class="btn-right mr-3">Select an image</b-button>
          <b-img v-if="imageUrl" :src="imageUrl" class="w-100p"></b-img>
          <input style="display: none" ref="licenseInput" type="file" @change="imageSelected" enctype="multipart/form-data">
          <b-form-input list="my-list-id" v-model="request.createdBy.name"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Cost :
        </b-col>
        <b-col md="8">
          <b-form-input type="number" v-model="request.cost"></b-form-input>
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
              v-model="request.schedule.date"
              type="text"
              placeholder="YYYY-MM-DD"
              autocomplete="off"
            ></b-form-input>
            <b-input-group-append>
              <b-form-datepicker
                v-model="request.schedule.date"
                button-only
                right
                locale="en-US"
                aria-controls="example-input"
              ></b-form-datepicker>
            </b-input-group-append>
          </b-input-group>
          <label>Subject</label>
          <b-form-input v-model="request.schedule.subject"></b-form-input>
          <label>notes</label>
          <b-form-textarea
            v-model="request.schedule.notes"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="pull-right p-4">
        <!-- <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button> -->
        <b-button class="w-100p" variant="success"  @click="AddRequest">Ok</b-button>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import PageTitle from "@/Layout/Components/PageTitle.vue";

const items = [
  { index: 0, assigned: 'assigned', property: 'property1', createdBy: {avatar: '2', name: 'Jhone'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request and it is the best service, I think there are more properties', subject: 'property1'}  },
  { index: 1,  assigned: 'unassigned', property: 'property2', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { index: 2,  assigned: 'unassigned', property: 'property1', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { index: 3,  assigned: 'assigned', property: 'property4', createdBy: {avatar: '2', name: 'Jhone'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request and it is the best service, I think there are more properties', subject: 'property1'}  },
  { index: 4,  assigned: 'unassigned', property: 'property3', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { index: 5,  assigned: 'unassigned', property: 'property1', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { index: 6,  assigned: 'assigned', property: 'property2', createdBy: {avatar: '2', name: 'Jhone'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request and it is the best service, I think there are more properties', subject: 'property1'}  },
  { index: 7,  assigned: 'unassigned', property: 'property1', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
  { index: 8,  assigned: 'unassigned', property: 'property3', createdBy: {avatar: '1', name: 'Shoe'}, cost: '35600', schedule: {date: '2021-01-04', notes: 'First Request', subject: 'property1'}  },
];

export default {
  components: {
    PageTitle,
  },
  data: () => ({
    heading: "Service Requests Lists",
    subheading:
      "View specific service requests.",
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
      { key: "index", label: "Actions", class: "align-middle text-center"}
    ],
    selectedRow: [],
    currentPage: 1,
    perPage: 5,
    totalRows: items.length,
    pageOptions: [5, 10, 15],
    filterOptions: [
      { item: 'all', name: 'All' },
      { item: 'assigned', name: 'Assigned' },
      { item: 'unassigned', name: 'Unassigned' },
    ],
    sortBy: 'age',
    sortDesc: false,
    sortDirection: "asc",
    filter: null,
    assigned: 'all',
    assignedOptions: [
      { value: 'assigned', text: 'Assigned' },
      { value: 'unassigned', text: 'Unassigned' },
    ],
    propertyOptions: [
      { value: 'property1', text: 'Property1' },
      { value: 'property2', text: 'Property2' },
      { value: 'property3', text: 'Property3' },
      { value: 'property4', text: 'Property4' },
    ],
    property: '',
    cost: '',
    date: '',
    notes: '',
    subject: '',
    imageUrl: null,
    request: {
      createdBy: {},
      schedule: {},
      assigned: 'assigned'
    }
  }),


 
  methods: {
    onSelectRow(items){
      console.log(items)
      this.selectedRow = items;
    },
    getImgUrl(pet) {
    var images = require.context('@/assets/images/avatars/', false, /\.jpg$/)
    return images('./' + pet + ".jpg")
    },
    AssignedChange(value){
      switch (value) {
        case 'all':
          this.items = items.filter(val => val.assigned == 'assigned' || val.assigned == 'unassigned')
          break;
        case 'assigned':
          this.items = items.filter(val => val.assigned == 'assigned')
          break;
        default:
          this.items = items.filter(val => val.assigned == 'unassigned')
          break;
      }
    },
    edit(index){
      console.log(index)
      let data = this.items.filter((val, ind) => ind === index)
      this.selectedRow = data
      this.imageUrl = this.getImgUrl(data[0].createdBy.avatar)
      // this.$refs['editModal'].show()
      this.$root.$emit('bv::show::modal', 'editModal', '#btnShow')
        // this.$router.push({ name: '' })
    },
    EditRequest(){
      console.log(this.selectedRow[0])
      this.$refs['editModal'].hide()

    },
    del(ind) {
      this.items = this.items.filter((val, index) => index !== ind)
    },
    hideModal() {
      this.$refs['editModal'].hide()
    },
    imageSelected(e) {
      e.preventDefault()
      const file = e.target.files[0]
      // this.image = file
      this.imageUrl = URL.createObjectURL(file)
    },
    AddRequest() {
      console.log(this.request)
      // this.request.createdBy.avatar = this.imageUrl
      this.request.createdBy.avatar = '2'
      this.items.push(this.request)
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
