"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var _1 = require("./");
var services_1 = require("../services");
var PtBacklogModule = (function () {
    function PtBacklogModule() {
    }
    PtBacklogModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule, _1.PipesModule, _1.PTItemModule],
            exports: [_1.PtBacklogComponent],
            declarations: [_1.PtBacklogComponent, _1.PTItemListComponent],
            providers: [services_1.BacklogService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], PtBacklogModule);
    return PtBacklogModule;
}());
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsdUJBQXdGO0FBQ3hGLHdDQUE2QztBQVk3QztJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQVQzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSxjQUFXLEVBQUUsZUFBWSxDQUFDO1lBQ3hELE9BQU8sRUFBRSxDQUFDLHFCQUFrQixDQUFDO1lBQzdCLFlBQVksRUFBRSxDQUFDLHFCQUFrQixFQUFFLHNCQUFtQixDQUFDO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLHlCQUFjLENBQUM7WUFDM0IsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBQdEJhY2tsb2dDb21wb25lbnQsIFBpcGVzTW9kdWxlLCBQVEl0ZW1Nb2R1bGUsIFBUSXRlbUxpc3RDb21wb25lbnQgfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsIFBpcGVzTW9kdWxlLCBQVEl0ZW1Nb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW1B0QmFja2xvZ0NvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtQdEJhY2tsb2dDb21wb25lbnQsIFBUSXRlbUxpc3RDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbQmFja2xvZ1NlcnZpY2VdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFB0QmFja2xvZ01vZHVsZSB7IH1cclxuIl19