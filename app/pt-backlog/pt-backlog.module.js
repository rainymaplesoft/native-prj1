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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsdUJBQXdGO0FBQ3hGLCtEQUE2RDtBQVk3RDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQVQzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSxjQUFXLEVBQUUsZUFBWSxDQUFDO1lBQ3hELE9BQU8sRUFBRSxDQUFDLHFCQUFrQixDQUFDO1lBQzdCLFlBQVksRUFBRSxDQUFDLHFCQUFrQixFQUFFLHNCQUFtQixDQUFDO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBQdEJhY2tsb2dDb21wb25lbnQsIFBpcGVzTW9kdWxlLCBQVEl0ZW1Nb2R1bGUsIFBUSXRlbUxpc3RDb21wb25lbnQgfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tsb2cuc2VydmljZVwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBQaXBlc01vZHVsZSwgUFRJdGVtTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtQdEJhY2tsb2dDb21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbUHRCYWNrbG9nQ29tcG9uZW50LCBQVEl0ZW1MaXN0Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0JhY2tsb2dTZXJ2aWNlXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQdEJhY2tsb2dNb2R1bGUgeyB9XHJcbiJdfQ==