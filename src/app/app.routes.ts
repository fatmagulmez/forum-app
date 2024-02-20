import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./components/home-page/home-page.component")
        .then(component => component.HomePageComponent)
    },
    {
        path: "category",
        loadComponent: () => import("./components/category-page/category-page.component")
        .then(component => component.CategoryPageComponent)
    }
];