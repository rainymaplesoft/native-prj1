"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var _1 = require("./");
var backlog_service_1 = require("../services/backlog.service");
var add_item_modal_component_1 = require("./shared/add-item-modal.component");
var PtBacklogModule = (function () {
    function PtBacklogModule() {
    }
    PtBacklogModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule, angular_1.NativeScriptUISideDrawerModule, _1.PipesModule, _1.PTItemModule],
            exports: [_1.PtBacklogComponent],
            declarations: [_1.PtBacklogComponent, _1.PTItemListComponent, add_item_modal_component_1.AddItemModalComponent],
            providers: [backlog_service_1.BacklogService],
            entryComponents: [
                add_item_modal_component_1.AddItemModalComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], PtBacklogModule);
    return PtBacklogModule;
}());
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsa0VBQWdJO0FBR2hJLHVCQUF3RjtBQUN4RiwrREFBNkQ7QUFDN0QsOEVBQTBFO0FBYzFFO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBWjNCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFFLHdDQUE4QixFQUFFLGNBQVcsRUFBRSxlQUFZLENBQUM7WUFDeEYsT0FBTyxFQUFFLENBQUMscUJBQWtCLENBQUM7WUFDN0IsWUFBWSxFQUFFLENBQUMscUJBQWtCLEVBQUUsc0JBQW1CLEVBQUUsZ0RBQXFCLENBQUM7WUFDOUUsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixlQUFlLEVBQUU7Z0JBQ2IsZ0RBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsIFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5cclxuaW1wb3J0IHsgUHRCYWNrbG9nQ29tcG9uZW50LCBQaXBlc01vZHVsZSwgUFRJdGVtTW9kdWxlLCBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkSXRlbU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsIFBpcGVzTW9kdWxlLCBQVEl0ZW1Nb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW1B0QmFja2xvZ0NvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtQdEJhY2tsb2dDb21wb25lbnQsIFBUSXRlbUxpc3RDb21wb25lbnQsIEFkZEl0ZW1Nb2RhbENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtCYWNrbG9nU2VydmljZV0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBBZGRJdGVtTW9kYWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHRCYWNrbG9nTW9kdWxlIHsgfVxyXG4iXX0=