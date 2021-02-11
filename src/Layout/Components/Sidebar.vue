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
            href: '/service-request',
        },
        {
            title: 'Tenants list',
            icon: 'pe-7s-note2',
            href: '/tenants',
        },
        {
            title: 'properties list',
            icon: 'pe-7s-culture',
            href: '/properties',
        },
        {
            title: 'Service Provider List',
            icon: 'pe-7s-coffee',
            href: '/service-provider',
        },
        {
            title: 'Applicant Funnel List',
            icon: 'pe-7s-news-paper',
            href: '/applicant-funnel',
        },
        {
            title: 'Employees List',
            icon: 'pe-7s-id',
            href: '/employees',
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
