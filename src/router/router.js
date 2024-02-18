import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import PostItemPage from "@/pages/PostItemPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/posts/:id',
        component: PostItemPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
    {
        path: '/about',
        component: AboutPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;