import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {ModalModule} from "ngx-bootstrap/modal";
import {ButtonsModule} from "ngx-bootstrap/buttons";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {ProgressbarModule} from "ngx-bootstrap/progressbar";
import {AlertModule} from "ngx-bootstrap/alert";
import {TabsModule} from "ngx-bootstrap/tabs";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {PopoverModule} from "ngx-bootstrap/popover";


@NgModule({
  imports: [
    CommonModule,

    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    PopoverModule.forRoot()
  ],
  exports: [
    ModalModule,
    ButtonsModule,
    TooltipModule,
    BsDropdownModule,
    ProgressbarModule,
    AlertModule,
    TabsModule,
    AccordionModule,
    CarouselModule,
  ],
  declarations: []
})
export class BootstrapModule {}
