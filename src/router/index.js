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
            component: () => import('../Pages/Dashboard/Management.vue'),
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () => import('../Pages/Calendar/Calendar.vue'),
        },
        {
            path: '/service-request-list',
            name: 'requestList',
            component: () => import('../Pages/ServiceRequest/List.vue'),
        },
        {
            path: '/service-request-add',
            name: 'requestAdd',
            component: () => import('../Pages/ServiceRequest/Add.vue'),
        },
        {
            path: '/tenant-list',
            name: 'tenanatsList',
            component: () => import('../Pages/Tenants/List.vue'),
        },
        {
            path: '/tenant-add',
            name: 'tenanatsAdd',
            component: () => import('../Pages/Tenants/Add.vue'),
        },
        {
            path: '/properties-list',
            name: 'propertiesList',
            component: () => import('../Pages/Properties/List.vue'),
        },
        {
            path: '/properties-add',
            name: 'propertiesAdd',
            component: () => import('../Pages/Properties/Add.vue'),
        },
        {
            path: '/service-provider-list',
            name: 'service list',
            component: () => import('../Pages/ServiceProvider/List.vue'),
        },
        {
            path: '/service-provider-add',
            name: 'serviceAdd',
            component: () => import('../Pages/ServiceProvider/Add.vue'),
        },
        {
            path: '/applicant-list',
            name: 'applicant list',
            component: () => import('../Pages/ApplicantFunnel/List.vue'),
        },
        {
            path: '/applicant-profile',
            name: 'applicant profile',
            component: () => import('../Pages/ApplicantFunnel/Profile.vue'),
        },
        {
            path: '/employee-list',
            name: 'employees list',
            component: () => import('../Pages/EmployeeList/List.vue'),
        },
        {
            path: '/employee-add',
            name: 'employees add',
            component: () => import('../Pages/EmployeeList/Add.vue'),
        },
        {
            path: '/login',
            name: 'login',
            meta: { layout: 'userpages' },
            component: () => import('../Pages/UserPages/Login.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../Pages/Profile/Profile.vue'),
        },
        
    ]
})
