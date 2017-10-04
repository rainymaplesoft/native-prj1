"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var pt_item_1 = require("./pt-item");
var shared_1 = require("../shared");
var PTItemModule = (function () {
    function PTItemModule() {
    }
    PTItemModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule],
            exports: [pt_item_1.PTItemComponent],
            declarations: [pt_item_1.PTItemComponent, shared_1.ItemTypePickerModalComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUscUNBQTRDO0FBQzVDLG9DQUF5RDtBQWN6RDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQVp4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyx5QkFBZSxDQUFDO1lBQzFCLFlBQVksRUFBRSxDQUFDLHlCQUFlLEVBQUUscUNBQTRCLENBQUM7WUFDN0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLHFDQUE0QjthQUMvQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFBUSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbSc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbUFRJdGVtQ29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW1BUSXRlbUNvbXBvbmVudCwgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Nb2R1bGUgeyB9XHJcbiJdfQ==