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
            path: '/service-request-list',
            name: 'requestList',
            component: () => import('../DemoPages/ServiceRequest/List.vue'),
        },
        {
            path: '/service-request-add',
            name: 'requestAdd',
            component: () => import('../DemoPages/ServiceRequest/Add.vue'),
        },
        {
            path: '/tenant-list',
            name: 'tenanats list',
            component: () => import('../DemoPages/Tenants/List.vue'),
        },
        {
            path: '/tenant-add',
            name: 'tenanats add',
            component: () => import('../DemoPages/Tenants/Add.vue'),
        },
        {
            path: '/properties-list',
            name: 'properties list',
            component: () => import('../DemoPages/Properties/List.vue'),
        },
        {
            path: '/properties-add',
            name: 'properties add',
            component: () => import('../DemoPages/Properties/Add.vue'),
        },
        {
            path: '/service-provider-list',
            name: 'service list',
            component: () => import('../DemoPages/ServiceProvider/List.vue'),
        },
        {
            path: '/service-provider-add',
            name: 'service add',
            component: () => import('../DemoPages/ServiceProvider/Add.vue'),
        },
        {
            path: '/applicant-drag-drop',
            name: 'applicant list',
            component: () => import('../DemoPages/ApplicantFunnel/DragDrop.vue'),
        },
        {
            path: '/applicant-profile',
            name: 'applicant profile',
            component: () => import('../DemoPages/ApplicantFunnel/Profile.vue'),
        },
        {
            path: '/employee-list',
            name: 'employees list',
            component: () => import('../DemoPages/EmployeeList/List.vue'),
        },
        {
            path: '/employee-add',
            name: 'employees add',
            component: () => import('../DemoPages/EmployeeList/Add.vue'),
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
