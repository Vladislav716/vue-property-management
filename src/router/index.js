import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [


        {
            path: '/',
            name: 'dashabord',
            component: () => import('../DemoPages/Dashboards/Management.vue'),
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () => import('../DemoPages/Components/Calendar.vue'),
        },
        {
            path: '/service-request',
            name: 'calendar',
            component: () => import('../DemoPages/ServiceRequest.vue'),
        },
        {
            path: '/tenants',
            name: 'tenanats list',
            component: () => import('../DemoPages/Tenants/TenantsList.vue'),
        },
        {
            path: '/properties',
            name: 'properties list',
            component: () => import('../DemoPages/Properties/PropertiesList.vue'),
        },
        {
            path: '/service-provider',
            name: 'service list',
            component: () => import('../DemoPages/ServiceProvider/ServiceProviderList.vue'),
        },
        {
            path: '/applicant-funnel',
            name: 'applicant list',
            component: () => import('../DemoPages/ApplicantFunnel/ApplicantFunnelList.vue'),
        },
        {
            path: '/employees',
            name: 'employees list',
            component: () => import('../DemoPages/EmployeeList/EmployeeList.vue'),
        },
        {
            path: '/login',
            name: 'login',
            meta: { layout: 'userpages' },
            component: () => import('../DemoPages/UserPages/Login.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../DemoPages/Profile/Profile.vue'),
        },
        
    ]
})
