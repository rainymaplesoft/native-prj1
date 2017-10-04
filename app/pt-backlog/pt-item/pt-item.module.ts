import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { PTItemComponent } from './pt-item';
import { ItemTypePickerModalComponent } from "../shared";

@NgModule({
    imports: [NativeScriptModule],
    exports: [PTItemComponent],
    declarations: [PTItemComponent, ItemTypePickerModalComponent],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        ItemTypePickerModalComponent
    ]
})
export class PTItemModule { }
