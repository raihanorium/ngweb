import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "./home-page/home-page.component";
import {ButtonsPageComponent} from "./buttons-page/buttons-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {UiModule} from "../ui/ui.module";

@NgModule({
    imports: [
        CommonModule,
        UiModule
    ],
    exports: [
        HomePageComponent,
        ButtonsPageComponent,
        NotFoundPageComponent
    ],
    declarations: [
        HomePageComponent,
        ButtonsPageComponent,
        NotFoundPageComponent
    ]
})
export class PagesModule {
}
