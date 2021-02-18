<template>
  <div>
    <page-title
        :heading="heading"
        :subheading="subheading"
        :icon="icon"
    ></page-title>
    <div class="text-right mb-2">
      <b-button variant="success" @click="complete"><i class="pe-7s-hourglass"></i> Complete</b-button>
    </div>
    <div class="app-inner-layout chat-layout">
      <div class="app-inner-layout__wrapper">
        <div class="w-100">
          <div class="app-inner-layout__content height-fit-content mb-2"> 
            <div class="table-responsive card w-50 height-fit-content mr-2">
              <div class="app-inner-layout__top-pane border-bottom h-65p badge-info">
                <h4>Profile</h4>
              </div>
                <VuePerfectScrollbar class="app-sidebar-scroll h-300p"> 
                  <div class="widget-content-left">
                    <div class="text-center">
                      <b-img v-if="avatarUrl" :src="avatarUrl" class="rounded-circle w-70p" alt ></b-img>
                      <h4>{{item.name.first}} {{item.name.last}}</h4>
                      <h6>{{item.profile.description}}</h6>
                    </div>
                    <b-row class="m-0 w-100">
                      <b-col md="4 text-right">
                        <h6>First Name : </h6>
                      </b-col>
                      <b-col md="8">
                        <h6> {{item.name.first}}</h6>
                      </b-col>
                      <b-col md="4 text-right">
                        <h6>Last Name : </h6>
                      </b-col>
                      <b-col md="8">
                        <h6>{{item.name.last}}</h6>
                      </b-col>
                      <b-col md="4 text-right">
                        <h6>Phone : </h6>
                      </b-col>
                      <b-col md="8">
                        <h6> {{item.profile.phone}}</h6>
                      </b-col>
                      <b-col md="4 text-right">
                        <h6>Email : </h6>
                      </b-col>
                      <b-col md="8">
                        <h6> {{item.profile.email}}</h6>
                      </b-col>
                      <b-col md="4 text-right">
                        <h6>Address : </h6>
                      </b-col>
                      <b-col md="8">
                        <h6> {{item.profile.address}}</h6>
                      </b-col>
                      <b-col md="4 text-right">
                        <h6>Current Property : </h6>
                      </b-col>
                      <b-col md="8">
                        <a href="#"><h6>{{item.profile.currentProperty}}</h6></a>
                      </b-col>
                      <b-col md="4 text-right">
                        <h6>driver's license : {{item.profile.license.no}}</h6>
                      </b-col>
                      <b-col md="8">
                        <div class="w-150p">
                          <expandable-image v-if="licenseUrl"
                            :src="licenseUrl"
                          />
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </VuePerfectScrollbar> 
               <div class="app-inner-layout__bottom-pane d-block text-center">
                <div class="mb-0 position-relative row form-group">
                  <div class="col-sm-12">
                    <b-button variant="success" class="pull-right" @click="editProfile(item.index)"><font-awesome-icon class="mr-2" icon="plus" />Edit Profile</b-button>
                  </div>
                </div>
              </div>
            </div>
             <div class="table-responsive card w-50 height-fit-content">
              <div class="app-inner-layout__top-pane border-bottom h-65p badge-info">
                <div class="pane-left" v-if="item">
                  <div class="avatar-icon-wrapper mr-2">
                    <div v-if="item.state === 'online'" class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                    <div v-if="item.state === 'offline'" class="badge badge-bottom btn-shine badge-secondary badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon avatar-icon-xl rounded">
                      <b-img width="82" v-if="avatarUrl" :src="avatarUrl" alt ></b-img>
                    </div>
                  </div>
                  <h4 class="mb-0 text-nowrap">
                    {{item.name.first}} {{item.name.last}}
                    <div class="opacity-7">
                      Last Seen Online:
                      <span class="opacity-8">10 minutes ago</span>
                    </div>
                  </h4>
                </div>
              </div>
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p">
                <div v-if="item">
                  <div class="chat-wrapper" v-for="chatContent in item.chatContents" :key="chatContent.index">
                    <div v-if="chatContent.state === 'receive'" class="chat-box-wrapper">
                      <div>
                        <div class="avatar-icon-wrapper mr-2">
                          <div class="avatar-icon avatar-icon-lg rounded">
                            <b-img v-if="item.name.avatar" :src="getImgUrl(item.name.avatar, 'avatar')" alt ></b-img>
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
          </div>
          <div class="app-inner-layout__content height-fit-content mb-2">
            <div class="table-responsive card w-50 height-fit-content mr-2">
              <div class="app-inner-layout__top-pane border-bottom h-65p badge-info">
                <h4>Transactions</h4>
              </div>
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p" >
                <div class="p-2" v-if="item">
                  <b-table striped hover :items="item.transactions" :fields="transactionFields">
                    <template #cell(actions)="row">
                      <button class="border-0 btn-transition btn btn-outline-danger" @click="delTransaction(row)">
                        <i class="pe-7s-trash fsize-1" ></i>
                      </button>
                    </template>
                  </b-table>
                </div>
              </VuePerfectScrollbar>
              <div class="app-inner-layout__bottom-pane d-block text-center">
                <div class="mb-0 position-relative row form-group">
                  <div class="col-sm-12">
                    <b-button variant="success" class="pull-right" @click="addTransaction()"><font-awesome-icon class="mr-2" icon="plus" />Add Transaction</b-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive card w-50 height-fit-content">
              <div class="app-inner-layout__top-pane border-bottom h-65p badge-info">
                <h4>Task List</h4>
              </div>
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p">
                <ul class="todo-list-wrapper list-group list-group-flush"  v-if="item">
                  <li class="list-group-item" v-for="task in item.tasks" :key="task.taskName">
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
                            <div v-if="task.status == 'New'" class="badge badge-info ml-2">new</div>
                            <div v-if="task.status == 'Complete'" class="badge badge-success ml-2">completed</div>
                            <div v-if="task.status == 'Reject'" class="badge badge-danger ml-2">rejected</div>
                          </div>
                          <div class="widget-subheading">
                            <i>{{task.description}}</i>
                          </div>
                        </div>
                        <div class="widget-content-right widget-content-actions">
                          <button class="border-0 btn-transition btn btn-outline-success">
                            <font-awesome-icon icon="check" />
                          </button>
                          <button class="border-0 btn-transition btn btn-outline-danger" @click="delTask(task)">
                            <font-awesome-icon icon="trash-alt" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </VuePerfectScrollbar>
               <div class="app-inner-layout__bottom-pane d-block text-center">
                <div class="mb-0 position-relative row form-group">
                  <div class="col-sm-12">
                    <b-button variant="success" class="pull-right" @click="addTask()"><font-awesome-icon class="mr-2" icon="plus" />Add Task</b-button>
                  </div>
                </div>
              </div>
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
                      <span v-if="item">$ {{item.currentBalance}}</span>
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
              <VuePerfectScrollbar class="app-sidebar-scroll h-300p" v-if="item">
                <div class="p-2">
                  <b-table striped hover :items="item.serviceRequests" :fields="requestFields">
                    <template #cell(assigned)="row">
                      <span :class="row.value ? 'assigned': 'unassigned'">{{row.value ? 'Assigned': 'Unassigned'}}</span>
                    </template>
                  </b-table>
                </div>
              </VuePerfectScrollbar>
               <div class="app-inner-layout__bottom-pane d-block text-center">
                <div class="mb-0 position-relative row form-group">
                  <div class="col-sm-12">
                    <b-button variant="success" class="pull-right" @click="addRequest()"><font-awesome-icon class="mr-2" icon="plus" />Add Request</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
   
 <!-- Transaction modal -->
    <b-modal size="md" ref="transactionModal" id="transactionModal" hide-footer title="Add Transaction">
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Amount :
        </b-col>
        <b-col md="8">
          <b-form-input type="number" v-model="transaction.amount"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Date :
        </b-col>
        <b-col md="8">
           <b-input-group class="mb-3">
            <b-form-input
              id="example-input"
              v-model="transaction.date"
              type="text"
              placeholder="YYYY-MM-DD"
              autocomplete="off"
            ></b-form-input>
            <b-input-group-append>
              <b-form-datepicker
                v-model="transaction.date"
                button-only
                right
                locale="en-US"
                aria-controls="example-input"
              ></b-form-datepicker>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Type :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="transaction.type"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="pull-right p-4">
        <!-- <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button> -->
        <b-button class="w-100p" variant="success"  @click="hideTransaction">Ok</b-button>
      </b-row>
    </b-modal>
    <!-- Edit Profile Modal -->
    <b-modal size="md" ref="profileModal" id="profileModal" hide-footer title="Add Transaction">
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
         First Name :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="item.name.first"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
         Last Name :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="item.name.last"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
         Emaiil :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="item.profile.email"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
         Phone :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="item.profile.phone"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Current Property :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="item.profile.currentProperty"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Select an Avatar :
        </b-col>
        <b-col md="8">
          <b-button @click="$refs.avatarInput.click()" class="btn-right mr-3">Select an image</b-button>
          <b-img v-if="avatarUrl" :src="avatarUrl" class="w-200p"></b-img>
          <input style="display: none" ref="avatarInput" type="file" @change="avatarSelected" enctype="multipart/form-data">
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          License :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="item.profile.license.no" placeholder="Enter the license No"></b-form-input>
          <b-button @click="$refs.licenseInput.click()" class="btn-right mr-3">Select an image</b-button>
          <b-img v-if="licenseUrl" :src="licenseUrl" class="w-200p"></b-img>
          <input style="display: none" ref="licenseInput" type="file" @change="licenseSelected" enctype="multipart/form-data">
        </b-col>
      </b-row>
     
      <b-row class="pull-right p-4">
        <!-- <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button> -->
        <b-button class="w-100p" variant="success"  @click="hideProfile">Ok</b-button>
      </b-row>
    </b-modal>
    <!-- Task Modal -->
    <b-modal size="md" ref="taskModal" id="taskModal" hide-footer title="Add Task">
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Task Name :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="task.taskName" placeholder="Enter the task name"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Task Description :
        </b-col>
        <b-col md="8">
          <b-form-textarea v-model="task.description" placeholder="Enter the task description"></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          status :
        </b-col>
        <b-col md="8">
          <b-form-radio-group
            v-model="task.status"
            :options="taskOptions"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
        </b-col>
      </b-row>
      <b-row class="pull-right p-4">
        <!-- <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button> -->
        <b-button class="w-100p" variant="success"  @click="hideTask">Ok</b-button>
      </b-row>
    </b-modal>
    <!-- Add Request Modal -->
    <b-modal size="md" ref="requestModal" id="requestModal" hide-footer title="Add Request">
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Task Name :
        </b-col>
        <b-col md="8">
          <b-form-input v-model="request.property"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          Task Description :
        </b-col>
        <b-col md="8">          
          <b-form-input v-model="request.cost"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="4" class="text-right">
          status :
        </b-col>
        <b-col md="8">
          <b-form-radio-group
            v-model="request.assigned"
            :options="requestOptions"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
        </b-col>
      </b-row>
      <b-row class="pull-right p-4">
        <!-- <b-button class="mr-4 w-100p" variant="danger"  @click="hideModal">Cancel</b-button> -->
        <b-button class="w-100p" variant="success"  @click="hideRequest">Ok</b-button>
      </b-row>
    </b-modal>
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
        transactionFields: ['amount', 'date', 'type', 'actions'],
        requestFields: ['property', 'cost', 'assigned'],
        item: {
          name: {first: '', last: '', avatar: ''},
          profile: { email: '', phone: '',  address: '', description: '', license: {no: '', image: ''}, currentProperty: ''},
          transactions: [],
          tasks: [],
          currentBalance: '',
          serviceRequests: []
        },
        selectedContact: {},
        transaction: {},
        avatarUrl: null,
        licenseUrl: null,
        task: {},
        taskOptions: [
          { item: 'New', name: 'New' },
          { item: 'Complete', name: 'Complete' },
          { item: 'Reject', name: 'Reject' },
        ],
        request: {},
        requestOptions: [
          { item: 'assigned', name: 'Assigned'},
          { item: 'unassigned', name: 'Unassigned'}
        ]
    }),
    created() {
      if(this.$route.params.item){
        this.item = this.$route.params.item;
        this.avatarUrl = this.getImgUrl(this.item.name.avatar, 'avatar')
        this.licenseUrl = this.getImgUrl(this.item.profile.license.image, 'license')
      }
        
    },

    methods: {
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
      },
      delTransaction(item) {
        console.log(item)
        this.item.transactions = this.item.transactions.filter((val, ind) => ind !== item.index)
      },
      delTask(item){
        console.log(item)
        this.item.tasks = this.item.tasks.filter(val => !(val.taskName === item.taskName && val.description === item.description && val.type === item.type))
      },
      addTransaction(){
        this.$root.$emit('bv::show::modal', 'transactionModal', '#btnShow')

      },
      hideTransaction(){
        this.item.transactions.push(this.transaction)
        this.transaction = {}
        this.$refs['transactionModal'].hide()
      },
      addTask() {
        this.$root.$emit('bv::show::modal', 'taskModal', '#btnShow')
      },
      hideTask() {
        console.log(this.task.status)
        this.item.tasks.push(this.task)
        this.task = {}
        this.$refs['taskModal'].hide()
      },
      addRequest() {
        this.$root.$emit('bv::show::modal', 'requestModal', '#btnShow')
      },
      hideRequest(){
        this.item.serviceRequests.push(this.request)
        this.request = {}
        this.$refs['requestModal'].hide()
      },
      editProfile(ind){
        console.log(ind, '---------')
        this.$root.$emit('bv::show::modal', 'profileModal', '#btnShow')
      },
      hideProfile() {
        // alert(this.item.profile)
        this.$refs['profileModal'].hide()
      },
      avatarSelected(e) {
        e.preventDefault()
        const file = e.target.files[0]
        this.image = file
        this.avatarUrl = URL.createObjectURL(file)
      },
      licenseSelected(e) {
        e.preventDefault()
        const file = e.target.files[0]
        this.image = file
        this.licenseUrl = URL.createObjectURL(file)
      },
      complete() {

      }
      
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

