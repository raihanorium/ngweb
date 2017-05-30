import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "./components/button/button.component";
import {PanelComponent} from "./components/panel/panel.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
      ButtonComponent,
      PanelComponent
  ],
  declarations: [
      ButtonComponent,
      PanelComponent
  ]
})
export class UiModule { }
