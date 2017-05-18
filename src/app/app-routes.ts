import {Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ButtonsPageComponent} from "./pages/buttons-page/buttons-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";

export const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'buttons', component: ButtonsPageComponent},
    {path: '**', component: NotFoundPageComponent}
];