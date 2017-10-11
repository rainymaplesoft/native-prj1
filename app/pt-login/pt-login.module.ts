import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { LoginComponent } from './pt-login.component';

@NgModule({
    imports: [NativeScriptFormsModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
