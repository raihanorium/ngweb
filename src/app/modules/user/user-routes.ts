import {Routes} from "@angular/router";
import {UserComponent} from "./user.component";
import {ListUserComponent} from "./pages/list-user/list-user.component";
import {AddUserComponent} from "./pages/add-user/add-user.component";

export const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
            {path: 'list', component: ListUserComponent},
            {path: 'add', component: AddUserComponent}
        ]
    }
];