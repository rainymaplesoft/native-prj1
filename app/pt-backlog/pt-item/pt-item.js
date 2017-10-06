"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var segmented_bar_1 = require("ui/segmented-bar");
var backlog_service_1 = require("../../services/backlog.service");
var PTItemComponent = (function () {
    function PTItemComponent(backlogService, modalService, vcRef) {
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this._itemDetailScreens = [
            { title: 'Details', routePath: 'pt-item-details' },
            { title: 'Tasks', routePath: 'pt-item-tasks' },
            { title: 'Chitchat', routePath: 'pt-item-chitchat' }
        ];
        this.myNavItems = [];
        for (var i = 0; i < this._itemDetailScreens.length; i++) {
            var tmpSegmentedBarItem = new segmented_bar_1.SegmentedBarItem();
            tmpSegmentedBarItem.title = this._itemDetailScreens[i].title;
            this.myNavItems.push(tmpSegmentedBarItem);
        }
    }
    PTItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backlogService.getItem('2').then(function (item) {
            _this.item = item;
        });
    };
    PTItemComponent.prototype.selectedItemDetailScreenIndexChanged = function (segBar) {
        var newIndex = segBar.selectedIndex;
    };
    PTItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pt-item',
            templateUrl: 'pt-item.html',
            styleUrls: ['pt-item.css']
        }),
        __metadata("design:paramtypes", [backlog_service_1.BacklogService, dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], PTItemComponent);
    return PTItemComponent;
}());
exports.PTItemComponent = PTItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsbUVBQWlHO0FBQ2pHLGtEQUFrRTtBQU9sRSxrRUFBZ0U7QUFTaEU7SUFXSSx5QkFBb0IsY0FBOEIsRUFBVSxZQUFnQyxFQUFVLEtBQXVCO1FBQXpHLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBUnJILHVCQUFrQixHQUFHO1lBQ3pCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7WUFDbEQsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7WUFDOUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtTQUN2RCxDQUFDO1FBQ0ssZUFBVSxHQUE0QixFQUFFLENBQUM7UUFJNUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEQsSUFBSSxtQkFBbUIsR0FBdUMsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1lBQ3JGLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ3RDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLDhEQUFvQyxHQUEzQyxVQUE0QyxNQUFvQjtRQUM1RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3hDLENBQUM7SUEzQlEsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM3QixDQUFDO3lDQWFzQyxnQ0FBYyxFQUF3Qiw0QkFBa0IsRUFBaUIsdUJBQWdCO09BWHBILGVBQWUsQ0E0QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXIsIFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tICd1aS9zZWdtZW50ZWQtYmFyJztcclxuXHJcblxyXG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcclxuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhXCI7XHJcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcclxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFja2xvZy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3B0LWl0ZW0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdwdC1pdGVtLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWl0ZW0uY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGl0ZW06IElQVEl0ZW07XHJcbiAgICBwcml2YXRlIF9pdGVtRGV0YWlsU2NyZWVucyA9IFtcclxuICAgICAgICB7IHRpdGxlOiAnRGV0YWlscycsIHJvdXRlUGF0aDogJ3B0LWl0ZW0tZGV0YWlscycgfSxcclxuICAgICAgICB7IHRpdGxlOiAnVGFza3MnLCByb3V0ZVBhdGg6ICdwdC1pdGVtLXRhc2tzJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdDaGl0Y2hhdCcsIHJvdXRlUGF0aDogJ3B0LWl0ZW0tY2hpdGNoYXQnIH1cclxuICAgIF07XHJcbiAgICBwdWJsaWMgbXlOYXZJdGVtczogQXJyYXk8U2VnbWVudGVkQmFySXRlbT4gPSBbXTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UsIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1EZXRhaWxTY3JlZW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0bXBTZWdtZW50ZWRCYXJJdGVtOiBTZWdtZW50ZWRCYXJJdGVtID0gPFNlZ21lbnRlZEJhckl0ZW0+bmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcclxuICAgICAgICAgICAgdG1wU2VnbWVudGVkQmFySXRlbS50aXRsZSA9IHRoaXMuX2l0ZW1EZXRhaWxTY3JlZW5zW2ldLnRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLm15TmF2SXRlbXMucHVzaCh0bXBTZWdtZW50ZWRCYXJJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS5nZXRJdGVtKCcyJykudGhlbihpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1EZXRhaWxTY3JlZW5JbmRleENoYW5nZWQoc2VnQmFyOiBTZWdtZW50ZWRCYXIpIHtcclxuICAgICAgICBsZXQgbmV3SW5kZXggPSBzZWdCYXIuc2VsZWN0ZWRJbmRleDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==