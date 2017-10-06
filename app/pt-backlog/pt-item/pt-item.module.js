"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
// import { PTItemComponent, PTItemDetailsComponent } from './';
var shared_1 = require("../shared");
var pt_item_details_1 = require("./pt-item-details");
var pt_item_1 = require("./pt-item");
var PTItemModule = (function () {
    function PTItemModule() {
    }
    PTItemModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule],
            exports: [pt_item_1.PTItemComponent],
            declarations: [pt_item_1.PTItemComponent, shared_1.ItemTypePickerModalComponent, pt_item_details_1.PTItemDetailsComponent],
            providers: [],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            entryComponents: [
                shared_1.ItemTypePickerModalComponent
            ]
        })
    ], PTItemModule);
    return PTItemModule;
}());
exports.PTItemModule = PTItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsZ0VBQWdFO0FBQ2hFLG9DQUF5RDtBQUN6RCxxREFBMkQ7QUFDM0QscUNBQTRDO0FBYzVDO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBWnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLHlCQUFlLENBQUM7WUFDMUIsWUFBWSxFQUFFLENBQUMseUJBQWUsRUFBRSxxQ0FBNEIsRUFBRSx3Q0FBc0IsQ0FBQztZQUNyRixTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IscUNBQTRCO2FBQy9CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuLy8gaW1wb3J0IHsgUFRJdGVtQ29tcG9uZW50LCBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWRldGFpbHMnO1xyXG5pbXBvcnQgeyBQVEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3B0LWl0ZW0nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW1BUSXRlbUNvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtQVEl0ZW1Db21wb25lbnQsIEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQsIFBUSXRlbURldGFpbHNDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUFRJdGVtTW9kdWxlIHsgfVxyXG4iXX0=