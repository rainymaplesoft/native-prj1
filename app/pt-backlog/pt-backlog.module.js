"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var _1 = require("./");
var backlog_service_1 = require("../services/backlog.service");
var PtBacklogModule = (function () {
    function PtBacklogModule() {
    }
    PtBacklogModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule, angular_1.NativeScriptUISideDrawerModule, _1.PipesModule, _1.PTItemModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsa0VBQWdJO0FBR2hJLHVCQUF3RjtBQUN4RiwrREFBNkQ7QUFZN0Q7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFUM0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsd0NBQThCLEVBQUUsY0FBVyxFQUFFLGVBQVksQ0FBQztZQUN4RixPQUFPLEVBQUUsQ0FBQyxxQkFBa0IsQ0FBQztZQUM3QixZQUFZLEVBQUUsQ0FBQyxxQkFBa0IsRUFBRSxzQkFBbUIsQ0FBQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsIFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5cclxuaW1wb3J0IHsgUHRCYWNrbG9nQ29tcG9uZW50LCBQaXBlc01vZHVsZSwgUFRJdGVtTW9kdWxlLCBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2VcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLCBQaXBlc01vZHVsZSwgUFRJdGVtTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtQdEJhY2tsb2dDb21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbUHRCYWNrbG9nQ29tcG9uZW50LCBQVEl0ZW1MaXN0Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0JhY2tsb2dTZXJ2aWNlXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQdEJhY2tsb2dNb2R1bGUgeyB9XHJcbiJdfQ==