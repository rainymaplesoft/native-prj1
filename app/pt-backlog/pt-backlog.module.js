"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var _1 = require("./");
var backlog_service_1 = require("../services/backlog.service");
var PtBacklogModule = (function () {
    function PtBacklogModule() {
    }
    PtBacklogModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule, _1.PipesModule, _1.PTItemModule],
            exports: [_1.PtBacklogComponent],
            declarations: [_1.PtBacklogComponent, _1.PTItemListComponent],
            providers: [backlog_service_1.BacklogService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], PtBacklogModule);
    return PtBacklogModule;
}());
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFJOUUsdUJBQXdGO0FBQ3hGLCtEQUE2RDtBQVk3RDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQVQzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSxjQUFXLEVBQUUsZUFBWSxDQUFDO1lBQ3hELE9BQU8sRUFBRSxDQUFDLHFCQUFrQixDQUFDO1lBQzdCLFlBQVksRUFBRSxDQUFDLHFCQUFrQixFQUFFLHNCQUFtQixDQUFDO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5cclxuaW1wb3J0IHsgUHRCYWNrbG9nQ29tcG9uZW50LCBQaXBlc01vZHVsZSwgUFRJdGVtTW9kdWxlLCBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2VcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgUGlwZXNNb2R1bGUsIFBUSXRlbU1vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbUHRCYWNrbG9nQ29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW1B0QmFja2xvZ0NvbXBvbmVudCwgUFRJdGVtTGlzdENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtCYWNrbG9nU2VydmljZV0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHRCYWNrbG9nTW9kdWxlIHsgfVxyXG4iXX0=