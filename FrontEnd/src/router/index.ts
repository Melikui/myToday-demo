import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/test",
    },
    {
        path: "/",
        component: () => import("@/layout/home.vue"),
        meta: { title: "首页" },
        children: [
            {
                path: "/login",
                component: () => import("@/layout/login.vue"),
                meta: { title: "登录" },
            },
            // test -- 测试
            {
                path: "/test",
                component: () => import("@/views/test/test.vue"),
                meta: { title: "测试" },
            },
            // 目标
            {
                path: "/target",
                component: () => import("@/views/target/target.vue"),
                meta: { title: "目标" },
            },
            // 扫雷游戏
            {
                path: "/saolei",
                component: () => import("@/views/game/saolei.vue"),
                meta: { title: "扫雷游戏" },
            },
            // 爱心雨
            {
                path: "/heart",
                component: () => import("@/views/demo/heart.vue"),
                meta: { title: "爱心雨" },
            },
            // 3D - 蜘蛛侠
            {
                path: "/spider",
                component: () => import("@/views/3D/spider/spider.vue"),
                meta: { title: "蜘蛛侠" },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
