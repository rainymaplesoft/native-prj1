"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var PtBacklogComponent = (function () {
    function PtBacklogComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    PtBacklogComponent.prototype.ngOnInit = function () { };
    PtBacklogComponent.prototype.ngAfterViewInit = function () {
        console.log(this.drawerComponent);
        //this._drawer = this.drawerComponent.sideDrawer;
        this._drawer = this.drawerComponent;
        //this._drawer = this.drawerComponent['sideDrawer'];
        this._drawer.drawerLocation = sidedrawer_1.SideDrawerLocation.Right;
        this._changeDetectionRef.detectChanges();
    };
    PtBacklogComponent.prototype.showSlideout = function () {
        this._drawer.showDrawer();
    };
    PtBacklogComponent.prototype.logoutTap = function () {
        alert('logout');
    };
    __decorate([
        core_1.ViewChild('mySideDrawer', { read: core_1.ElementRef }),
        __metadata("design:type", sidedrawer_1.RadSideDrawer)
    ], PtBacklogComponent.prototype, "drawerComponent", void 0);
    PtBacklogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pt-backlog',
            templateUrl: 'pt-backlog.component.html',
            styles: ["\n            .side-drawer-panel{\n                background-color:#333333;\n            }\n             "]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], PtBacklogComponent);
    return PtBacklogComponent;
}());
exports.PtBacklogComponent = PtBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyRztBQUkzRyw2REFBbUY7QUFjbkY7SUFJSSw0QkFBb0IsbUJBQXNDO1FBQXRDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7SUFBSSxDQUFDO0lBRS9ELHFDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsNENBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xDLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDcEMsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLCtCQUFrQixDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFHN0MsQ0FBQztJQUVNLHlDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sc0NBQVMsR0FBaEI7UUFDSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQXhCZ0Q7UUFBaEQsZ0JBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQVUsRUFBRSxDQUFDO2tDQUF5QiwwQkFBYTsrREFBQztJQUQ5RSxrQkFBa0I7UUFYOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLE1BQU0sRUFBRSxDQUFDLDRHQUlDLENBQUM7U0FDZCxDQUFDO3lDQU0yQyx3QkFBaUI7T0FKakQsa0JBQWtCLENBMEI5QjtJQUFELHlCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciwgU2lkZURyYXdlckxvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3B0LWJhY2tsb2cnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdwdC1iYWNrbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAgICAgLnNpZGUtZHJhd2VyLXBhbmVse1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzMzMzMzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFB0QmFja2xvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKCdteVNpZGVEcmF3ZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlcjtcclxuICAgIHB1YmxpYyBfZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZHJhd2VyQ29tcG9uZW50KTtcclxuICAgICAgICAvL3RoaXMuX2RyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgdGhpcy5fZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQ7XHJcbiAgICAgICAgLy90aGlzLl9kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudFsnc2lkZURyYXdlciddO1xyXG4gICAgICAgIHRoaXMuX2RyYXdlci5kcmF3ZXJMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5SaWdodDtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dTbGlkZW91dCgpIHtcclxuICAgICAgICB0aGlzLl9kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvdXRUYXAoKSB7XHJcbiAgICAgICAgYWxlcnQoJ2xvZ291dCcpXHJcbiAgICB9XHJcbn0iXX0=