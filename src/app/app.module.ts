import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UiModule} from "./ui/ui.module";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routes";
import {PagesModule} from "./pages/pages.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot(),
        UiModule,
        PagesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
