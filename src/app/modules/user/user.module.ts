import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserComponent} from "./user.component";
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user-routes";
import {ListUserComponent} from "./pages/list-user/list-user.component";
import {AddUserComponent} from "./pages/add-user/add-user.component";
import {UiModule} from "../../ui/ui.module";

@NgModule({
    imports: [
        CommonModule,
        UiModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [UserComponent, ListUserComponent, AddUserComponent]
})
export class UserModule {
}
