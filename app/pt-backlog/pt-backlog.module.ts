import { NgModule } from '@angular/core';
import { PipesModule } from "./pipes/pipes.module";
import { PtBacklogComponent } from './pt-backlog.component';


@NgModule({
    imports: [PipesModule],
    exports: [],
    declarations: [PtBacklogComponent],
    providers: [],
})
export class PtBacklogModule { }
