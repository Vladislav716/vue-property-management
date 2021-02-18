<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <div class="row card p-3">
      <div class="p-3">
        <b-row>
          <b-col md="4" class="text-right">
            <p>First Name :</p>
          </b-col>
          <b-col md="8">
            <b-form-input v-model="item.name.first"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            <p>Last Name :</p>
          </b-col>
          <b-col md="8">
            <b-form-input v-model="item.name.last"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            Avatar :
          </b-col>
          <b-col md="8">
            <b-button @click="$refs.imageInput.click()" class="btn-right mr-3">Select an image</b-button>
            <b-img v-if="imageUrl" :src="imageUrl" class="w-100p"></b-img>
            <input style="display: none" ref="imageInput" type="file" @change="imageSelected" enctype="multipart/form-data">
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            Phone :
          </b-col>
          <b-col md="8">
            <b-form-input  v-model="item.phone"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            Email :
          </b-col>
          <b-col md="8">
            <b-form-input  v-model="item.email"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            Company Name :
          </b-col>
          <b-col md="8">
            <b-form-input  v-model="item.company"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            Company Website :
          </b-col>
          <b-col md="8">
            <b-form-input  v-model="item.companySite"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            Type :
          </b-col>
          <b-col md="8">
            <b-form-input list="my-list-id" v-model="item.type"></b-form-input>
            <datalist id="my-list-id">
              <option v-for="type in types" :key="type.value" >{{ type.label }}</option>
            </datalist>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            Description :
          </b-col>
          <b-col md="8">
            <b-form-textarea  v-model="item.description"></b-form-textarea>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="4" class="text-right">
            Task Lists :
          </b-col>
          <b-col md="8">
            <b-form-input placeholder="Task Name" class="mb-2 w-70" v-model="taskContent.taskName"></b-form-input>
            <b-textarea placeholder="Task Description" class="w-70 mb-2" v-model="taskContent.description"></b-textarea>
            <b-form-radio-group
              v-model="taskContent.status"
              :options="taskStatusOption"
              class="mb-2 w-70"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-radio-group>
            <b-button variant="danger" @click="AddTask" class="mb-2"><i class="pe-7s-plus"></i> Add</b-button>
            <VuePerfectScrollbar class="app-sidebar-scroll h-180p w-70" v-once>
              <b-table bordered class="mb-0" striped hover :items="item.task" :fields="taskFields">
                <template #cell(status)="row">
                  <div v-if="row.value == 0" class="badge badge-info ml-2">new</div>
                  <div v-if="row.value == 1" class="badge badge-success ml-2">completed</div>
                  <div v-if="row.value == 2" class="badge badge-danger ml-2">rejected</div>
                </template>
                <template #cell(index)="row">
                  <button class="border-0 btn-transition btn btn-outline-danger" @click="delTask(row)">
                    <i class="pe-7s-trash"></i>
                  </button>
                </template>
              </b-table>
            </VuePerfectScrollbar>
          </b-col>
        </b-row>
        <div class="pull-right">
          <b-button variant="success"  @click="AddEmployee"><i class="pe-7s-plus"></i>{{$route.params.item ? ' Edit Employee' : ' Add Employee'}} </b-button>
        </div>

      </div>
    </div>
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
import VuePerfectScrollbar from "vue-perfect-scrollbar";


library.add(faCog, faBusinessTime, faSearch, faStar);




export default {
    components: {
      PageTitle,
      // VueCircle,
      // "font-awesome-icon": FontAwesomeIcon,
      VuePerfectScrollbar
    },
    data: () => ({
        heading: "Employee Add",
        subheading: "Can add Employee  and their profile, list of Tasks...",
        icon: "pe-7s-coffee icon-gradient bg-mixed-hopes",
        item: {
          task: [],
          name: {}
        },
        taskContent: {},
        imageUrl: null,
        taskStatusOption: [
          { item: 0, name: 'New' },
          { item: 1, name: 'Complete' },
          { item: 2, name: 'Reject' },
        ],
        taskFields: [
          {
            key: "taskName",
            sortable: true
          },
          {
            key: "description",
            sortable: true
          },
          {
            key: "status",
            label: "Status",
            sortable: true
          },
          {
            key: "index",
            label: "action",
          }
        ],
          types: [
          {label: 'Screening', value: 'screening'},
          {label: 'Legal', value: 'legal'},
          {label: 'Inspection', value: 'inspection'},
          {label: 'Collection', value: 'collection'},
          {label: 'Protection', value: 'protection'},
          {label: 'Advertising', value: 'advertising'}
        ],
    }),

     created() {
      if(this.$route.params.item){
        this.item = this.$route.params.item
        this.imageUrl = this.$route.params.item.imageUrl
      }
    },
    methods: {
      getImgUrl(pet) {
        var images = require.context('@/assets/images/avatars/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
      },
      imageSelected(e) {
        e.preventDefault()
        const file = e.target.files[0]
        this.imageUrl = URL.createObjectURL(file)
        console.log(this.imageUrl)
      },
      AddTask(){
        this.item.task.push(this.taskContent)
        console.log(this.item.task)
        this.taskContent = {}
      },
      delTask(row){
        this.item.task = this.item.task.filter((val, ind) => ind !== row.index)
      } ,
      AddEmployee() {
        console.log(this.item)
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
