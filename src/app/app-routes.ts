import {Routes} from "@angular/router";
import {HomePageComponent} from "./components/home-page/home-page.component";

export const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'user', loadChildren: 'app/modules/user/user.module#UserModule'},
    {path: '**', redirectTo: 'app', pathMatch: 'full'}
];