import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';

import { PtBacklogComponent, PipesModule, PTItemModule, PTItemListComponent } from './';
import { BacklogService } from "../services/backlog.service";


@NgModule({
    imports: [NativeScriptModule, PipesModule, PTItemModule],
    exports: [PtBacklogComponent],
    declarations: [PtBacklogComponent, PTItemListComponent],
    providers: [BacklogService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PtBacklogModule { }
