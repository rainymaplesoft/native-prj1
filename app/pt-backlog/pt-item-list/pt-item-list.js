"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var static_data_1 = require("../../shared/static-data");
var backlog_service_1 = require("../../services/backlog.service");
var PTItemListComponent = (function () {
    function PTItemListComponent(backlogService) {
        this.backlogService = backlogService;
    }
    PTItemListComponent.prototype.ngOnInit = function () {
        this.ptItems = this.backlogService.items;
    };
    PTItemListComponent.prototype.listItemTap = function (args) {
        var lv = args.object;
        var item = lv.items[args.index];
        alert(item.title);
    };
    PTItemListComponent.prototype.getIndicatorClass = function (item) {
        return static_data_1.ItemTypeEnum.getIndicatorClass(item.type);
    };
    PTItemListComponent = __decorate([
        core_1.Component({
            moduleId: module.id, selector: 'pt-item-list', templateUrl: 'pt-item-list.html', styleUrls: ['pt-item-list.css']
        }),
        __metadata("design:paramtypes", [backlog_service_1.BacklogService])
    ], PTItemListComponent);
    return PTItemListComponent;
}());
exports.PTItemListComponent = PTItemListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtaXRlbS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdEQUFrRjtBQUdsRixrRUFBZ0U7QUFNOUQ7SUFHRSw2QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQU0sQ0FBQztJQUV6RCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBQ0QseUNBQVcsR0FBWCxVQUFZLElBQVM7UUFDakIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwrQ0FBaUIsR0FBeEIsVUFBeUIsSUFBYTtRQUNsQyxNQUFNLENBQUMsMEJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQWhCVSxtQkFBbUI7UUFKakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ25ILENBRUE7eUNBR3VDLGdDQUFjO09BSHZDLG1CQUFtQixDQWlCakM7SUFBRCwwQkFBQztDQUFBLEFBakJDLElBaUJEO0FBakJjLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YVwiO1xyXG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcclxuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xyXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCwgc2VsZWN0b3I6ICdwdC1pdGVtLWxpc3QnLCB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0tbGlzdC5odG1sJywgc3R5bGVVcmxzOiBbJ3B0LWl0ZW0tbGlzdC5jc3MnXVxyXG59XHJcblxyXG4pIGV4cG9ydCBjbGFzcyBQVEl0ZW1MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB0SXRlbXM6IElQVEl0ZW1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSwgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnB0SXRlbXMgPSB0aGlzLmJhY2tsb2dTZXJ2aWNlLml0ZW1zO1xyXG4gICAgfVxyXG4gICAgbGlzdEl0ZW1UYXAoYXJnczogYW55KSB7XHJcbiAgICAgICAgbGV0IGx2ID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBsdi5pdGVtc1thcmdzLmluZGV4XTtcclxuICAgICAgICBhbGVydChpdGVtLnRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kaWNhdG9yQ2xhc3MoaXRlbTogSVBUSXRlbSkge1xyXG4gICAgICAgIHJldHVybiBJdGVtVHlwZUVudW0uZ2V0SW5kaWNhdG9yQ2xhc3MoaXRlbS50eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19