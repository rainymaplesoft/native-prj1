import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// import { PTItemComponent, PTItemDetailsComponent } from './';
import { ItemTypePickerModalComponent } from "../shared";
import { PTItemDetailsComponent } from './pt-item-details';
import { PTItemComponent } from './pt-item';

@NgModule({
    imports: [NativeScriptModule],
    exports: [PTItemComponent],
    declarations: [PTItemComponent, ItemTypePickerModalComponent, PTItemDetailsComponent],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        ItemTypePickerModalComponent
    ]
})
export class PTItemModule { }
