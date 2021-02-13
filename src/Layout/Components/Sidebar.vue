<template>
  <div :class="sidebarbg" class="app-sidebar sidebar-shadow"
    @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
    <div class="app-header__logo">
      <div class="logo-src" />
      <div class="header__pane ml-auto">
        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
          v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-sidebar-content">
      <VuePerfectScrollbar class="app-sidebar-scroll mt-3" v-once>
        <sidebar-menu v-if="admin == 'landlord'" showOneChild :menu="landlordMenu" /> 
        <sidebar-menu v-if="admin == 'tenant'" showOneChild :menu="tenantMenu" /> 
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    SidebarMenu,
    VuePerfectScrollbar
  },
  data() {
    return {
      isOpen: false,
      sidebarActive: false,
      admin: '',
      landlordMenu: [
        {
          title: 'Dashboard',
          icon: 'pe-7s-home',
          href: '/',
        },
        {
          title: 'Calendar',
          icon: 'pe-7s-date',
          href: '/calendar',
        },
        {
          title: 'Service Requests',
          icon: 'pe-7s-notebook',
          child: [
            {
              href: "/service-request-list",
              title: "View List"
            },
            {
              href: "/service-request-add",
              title : "Add Request"
            },
          ]
        },
        {
          title: 'Tenants list',
          icon: 'pe-7s-note2',
          child: [
            {
              href: "/tenant-list",
              title: "View List"
            },
            {
              href: "/tenant-add",
              title : "Add Tenant"
            },
          ]
        },
        {
            title: 'properties list',
            icon: 'pe-7s-culture',
             child: [
            {
              href: "/properties-list",
              title: "View List"
            },
            {
              href: "/properties-add",
              title : "Add Property"
            },
          ]
        },
        {
            title: 'Service Provider List',
            icon: 'pe-7s-coffee',
            child: [
              {
                href: "/service-provider-list",
                title: "View List"
              },
              {
                href: "/service-provider-add",
                title : "Add Provider"
              },
            ]
        },
        {
            title: 'Applicant Funnel List',
            icon: 'pe-7s-news-paper',
            child: [
              {
                href: "/applicant-drag-drop",
                title: "Drag and Drop from Colums"
              },
              {
                href: "/applicant-profile",
                title : "Applicant Profile"
              },
            ]
        },
        {
            title: 'Employees List',
            icon: 'pe-7s-id',
            child: [
              {
                href: "/employee-list",
                title: "View List"
              },
              {
                href: "/employee-add",
                title : "Add Employee"
              },
            ]
        },
        
      ],
      tenantMenu: [
        {
            title: 'Dashboard',
            icon: 'pe-7s-rocket',
            href: '/',
        },
        {
            title: 'My Profile',
            icon: 'pe-7s-user',
            href: '/profile',
        },
        
      ],
      collapsed: true,

      windowWidth: 0
    };
  },
  props: {
    sidebarbg: String
  },
  methods: {
    toggleBodyClass(className) {
      const el = document.body;
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    toggleSidebarHover(add, className) {
      const el = document.body;
      this.sidebarActive = !this.sidebarActive;

      this.windowWidth = document.documentElement.clientWidth;

      if (this.windowWidth > "992") {
        if (add === "add") {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      }
    },
    getWindowWidth() {
      const el = document.body;

      this.windowWidth = document.documentElement.clientWidth;

      if (this.windowWidth < "1350") {
        el.classList.add("closed-sidebar", "closed-sidebar-md");
      } else {
        el.classList.remove("closed-sidebar", "closed-sidebar-md");
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);

      //Init
      this.getWindowWidth();
    });
    console.log(this.admin)
  },
  beforeMount(){
    this.admin = this.$store.state.admin;

  },

  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>
