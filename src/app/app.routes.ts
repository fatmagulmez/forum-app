import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./components/home-page/home-page.component")
        .then(component => component.HomePageComponent)
    },
    {
        path: "topic",
        loadComponent: () => import("./components/topic-page/topic-page.component")
        .then(component => component.TopicPageComponent)
    },
    {
        path: "topic-detail",
        loadComponent: () => import("./components/topic-detail-page/topic-detail-page.component")
        .then(component => component.TopicDetailPageComponent)
    }
];