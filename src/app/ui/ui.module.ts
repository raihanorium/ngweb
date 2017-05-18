import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ButtonComponent} from "./components/button/button.component";
import {PanelComponent} from "./components/panel/panel.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
      NavbarComponent,
      ButtonComponent,
      PanelComponent
  ],
  declarations: [
      NavbarComponent,
      ButtonComponent,
      PanelComponent
  ]
})
export class UiModule { }
