<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-card class="main-card mb-4">
        <b-row>
        <b-col md="4" class="text-right">
          <p>Service Provider/Employee :</p>
        </b-col>
        <b-col md="4">
          <b-form-select v-model="assigned" :options="assignedOptions"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Property :
        </b-col>
        <b-col md="8">
          <b-form-select v-model="property" :options="propertyOptions"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Request Created By :
        </b-col>
        <b-col md="8">
          <b-button @click="$refs.licenseInput.click()" class="btn-right mr-3">Select an image</b-button>
          <b-img v-if="imageUrl" :src="imageUrl" class="w-200p"></b-img>
          <input style="display: none" ref="licenseInput" type="file" @change="imageSelected" enctype="multipart/form-data">
          <b-form-input list="my-list-id" v-model="name"></b-form-input>
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
        <!-- <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button> -->
        <b-button class="w-100p" variant="success"  @click="AddRequest">Add Request</b-button>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import PageTitle from "@/Layout/Components/PageTitle.vue";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    PageTitle,
    // "font-awesome-icon": FontAwesomeIcon,
  },
  data: () => ({
    heading: "Service Requests Add",
    subheading:
      "Add specific service requests.",
    icon: "pe-7s-notebook icon-gradient bg-mixed-hopes",
  
    assigned: true,
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
    name: '',
    property: '',
    cost: '',
    date: '',
    notes: '',
    subject: '',
    addItem: {},
    imageUrl: null,

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
    getImgUrl(pet) {
    var images = require.context('@/assets/images/avatars/', false, /\.jpg$/)
    return images('./' + pet + ".jpg")
    },
    AddRequest() {
      // console.log(this.assigned, this.property, this.name, this.imageUrl, this.cost, this.date, this.subject, this.notes )
      alert(`assigned: ${this.assigned}, property: ${this.property}, createdByName: ${this.name}, createdByAvatar: ${this.imageUrl}, cost: ${this.cost},
      scheduleDate: ${this.date}, scheduleSubject: ${this.subject}, scheduleNotes: ${this.notes}`)
      this.propertyInitial()
    },
    propertyInitial() {
      this.assigned = ''
      this.property = ''
      this.name = ''
      this.imageUrl = null
      this.cost = ''
      this.date = ''
      this.subject = ''
      this.notes = ''
    },
    imageSelected(e) {
      e.preventDefault()
      const file = e.target.files[0]
      this.image = file
      this.imageUrl = URL.createObjectURL(file)
    },
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
