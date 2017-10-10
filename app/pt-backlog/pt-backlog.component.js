"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var add_item_modal_component_1 = require("./shared/add-item-modal.component");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var backlog_service_1 = require("./../services/backlog.service");
var PtBacklogComponent = (function () {
    function PtBacklogComponent(backlogService, modalService, vcRef) {
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.selectedViewIndex = 1;
    }
    PtBacklogComponent.prototype.ngAfterViewInit = function () {
        console.log(this.drawerComponent);
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.drawerLocation = sidedrawer_1.SideDrawerLocation.Right;
        // this._changeDetectionRef.detectChanges();
    };
    PtBacklogComponent.prototype.ngOnInit = function () { };
    PtBacklogComponent.prototype.selectedFilteredView = function (itemFilterIndex, pageTitle) {
        this.selectedViewIndex = itemFilterIndex;
    };
    PtBacklogComponent.prototype.showSlideout = function () {
        this.drawer.showDrawer();
    };
    PtBacklogComponent.prototype.showAddItemModal = function () {
        var _this = this;
        var options = {
            context: { promptMsg: "Add item" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(add_item_modal_component_1.AddItemModalComponent, options).then(function (newItem) {
            if (newItem != null) {
                _this.backlogService.addNewPTItem(newItem, null);
            }
        });
    };
    PtBacklogComponent.prototype.logoutTap = function () {
        alert('logout');
    };
    PtBacklogComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    PtBacklogComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], PtBacklogComponent.prototype, "drawerComponent", void 0);
    PtBacklogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pt-backlog',
            templateUrl: 'pt-backlog.component.html',
            styleUrls: ['pt-backlog.component.css']
        }),
        __metadata("design:paramtypes", [backlog_service_1.BacklogService,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], PtBacklogComponent);
    return PtBacklogComponent;
}());
exports.PtBacklogComponent = PtBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2SDtBQUM3SCw4RUFBMEU7QUFDMUUsbUVBQWlHO0FBRWpHLGtFQUFnRztBQUNoRyw2REFBbUY7QUFHbkYsaUVBQStEO0FBVy9EO0lBRUksNEJBQW9CLGNBQThCLEVBQ3RDLFlBQWdDLEVBQ2hDLEtBQXVCO1FBRmYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFLRCw0Q0FBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRywrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDdEQsNENBQTRDO0lBQ2hELENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLGlEQUFvQixHQUEzQixVQUE0QixlQUF1QixFQUFFLFNBQWlCO1FBQ2xFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLENBQUM7SUFDN0MsQ0FBQztJQUNNLHlDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sNkNBQWdCLEdBQXZCO1FBQUEsaUJBWUM7UUFYRyxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtZQUNsQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsZ0RBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBaUI7WUFDL0UsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sc0NBQVMsR0FBaEI7UUFDSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQUVNLHVDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sNkNBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBMUNrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7K0RBQUM7SUFSekUsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQUlzQyxnQ0FBYztZQUN4Qiw0QkFBa0I7WUFDekIsdUJBQWdCO09BSjFCLGtCQUFrQixDQW1EOUI7SUFBRCx5QkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFkZEl0ZW1Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2FkZC1pdGVtLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIsIFNpZGVEcmF3ZXJMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcblxyXG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcclxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2JhY2tsb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSBcIi4uL3R5cGluZ3MvZG9tYWluXCI7XHJcbmltcG9ydCBJTmV3SXRlbSA9IFBURG9tYWluLklOZXdJdGVtO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdwdC1iYWNrbG9nJyxcclxuICAgIHRlbXBsYXRlVXJsOiAncHQtYmFja2xvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsncHQtYmFja2xvZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQdEJhY2tsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG4gICAgc2VsZWN0ZWRWaWV3SW5kZXg6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2xvZ1NlcnZpY2U6IEJhY2tsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3SW5kZXggPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHB1YmxpYyBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZHJhd2VyQ29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuZHJhd2VyTG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uUmlnaHQ7XHJcbiAgICAgICAgLy8gdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZEZpbHRlcmVkVmlldyhpdGVtRmlsdGVySW5kZXg6IG51bWJlciwgcGFnZVRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmlld0luZGV4ID0gaXRlbUZpbHRlckluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dTbGlkZW91dCgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dBZGRJdGVtTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7IHByb21wdE1zZzogXCJBZGQgaXRlbVwiIH0sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQWRkSXRlbU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChuZXdJdGVtOiBJTmV3SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobmV3SXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tsb2dTZXJ2aWNlLmFkZE5ld1BUSXRlbShuZXdJdGVtLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGxvZ291dFRhcCgpIHtcclxuICAgICAgICBhbGVydCgnbG9nb3V0JylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcclxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxufSJdfQ==