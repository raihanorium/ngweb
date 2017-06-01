import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UiModule} from "./ui/ui.module";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routes";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {MainSidebarComponent} from "./components/main-sidebar/main-sidebar.component";
import {MainFooterComponent} from "./components/main-footer/main-footer.component";
import {ControlSidebarComponent} from "./components/control-sidebar/control-sidebar.component";
import {ContentWrapperComponent} from "./components/content-wrapper/content-wrapper.component";


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        NavbarComponent,
        MainSidebarComponent,
        MainFooterComponent,
        ControlSidebarComponent,
        ContentWrapperComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot(),
        UiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
