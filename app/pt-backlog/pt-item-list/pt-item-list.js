"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var static_data_1 = require("../../shared/static-data");
var services_1 = require("../../services");
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
        __metadata("design:paramtypes", [services_1.BacklogService])
    ], PTItemListComponent);
    return PTItemListComponent;
}());
exports.PTItemListComponent = PTItemListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtaXRlbS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdEQUFrRjtBQUdsRiwyQ0FBZ0Q7QUFNOUM7SUFHRSw2QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQU0sQ0FBQztJQUV6RCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBQ0QseUNBQVcsR0FBWCxVQUFZLElBQVM7UUFDakIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwrQ0FBaUIsR0FBeEIsVUFBeUIsSUFBYTtRQUNsQyxNQUFNLENBQUMsMEJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQWhCVSxtQkFBbUI7UUFKakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ25ILENBRUE7eUNBR3VDLHlCQUFjO09BSHZDLG1CQUFtQixDQWlCakM7SUFBRCwwQkFBQztDQUFBLEFBakJDLElBaUJEO0FBakJjLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YVwiO1xyXG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcclxuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xyXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLCBzZWxlY3RvcjogJ3B0LWl0ZW0tbGlzdCcsIHRlbXBsYXRlVXJsOiAncHQtaXRlbS1saXN0Lmh0bWwnLCBzdHlsZVVybHM6IFsncHQtaXRlbS1saXN0LmNzcyddXHJcbn1cclxuXHJcbikgZXhwb3J0IGNsYXNzIFBUSXRlbUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHRJdGVtczogSVBUSXRlbVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2xvZ1NlcnZpY2U6IEJhY2tsb2dTZXJ2aWNlLCApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucHRJdGVtcyA9IHRoaXMuYmFja2xvZ1NlcnZpY2UuaXRlbXM7XHJcbiAgICB9XHJcbiAgICBsaXN0SXRlbVRhcChhcmdzOiBhbnkpIHtcclxuICAgICAgICBsZXQgbHYgPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBsZXQgaXRlbSA9IGx2Lml0ZW1zW2FyZ3MuaW5kZXhdO1xyXG4gICAgICAgIGFsZXJ0KGl0ZW0udGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbmRpY2F0b3JDbGFzcyhpdGVtOiBJUFRJdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIEl0ZW1UeXBlRW51bS5nZXRJbmRpY2F0b3JDbGFzcyhpdGVtLnR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=