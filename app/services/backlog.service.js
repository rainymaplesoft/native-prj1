"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./user.service");
var core_1 = require("@angular/core");
var _ = require("lodash");
var mock_data_service_1 = require("./mock-data.service");
var BacklogService = (function () {
    function BacklogService(userService, mockDataService) {
        this.userService = userService;
        this.mockDataService = mockDataService;
        this._allItems = this.mockDataService.generatePTItems(this.userService.users);
        this._allItems[0].assignee = this.userService.users[0];
    }
    Object.defineProperty(BacklogService.prototype, "items", {
        get: function () {
            return this._allItems;
        },
        enumerable: true,
        configurable: true
    });
    BacklogService.prototype.getItem = function (id) {
        var selectedItem = _.find(this._allItems, function (i) { return i.id == id; });
        return Promise.resolve(selectedItem);
    };
    BacklogService.prototype.addNewPTItem = function (newItem, item) {
    };
    BacklogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, mock_data_service_1.MockDataService])
    ], BacklogService);
    return BacklogService;
}());
exports.BacklogService = BacklogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2xvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2xvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTZDO0FBQzdDLHNDQUEyQztBQUUzQywwQkFBMkI7QUFHM0IseURBQXNEO0FBTXREO0lBT0ksd0JBQW9CLFdBQXdCLEVBQVUsZUFBZ0M7UUFBbEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFORCxzQkFBVyxpQ0FBSzthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBTU0sZ0NBQU8sR0FBZCxVQUFlLEVBQVU7UUFDckIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNNLHFDQUFZLEdBQW5CLFVBQW9CLE9BQWlCLEVBQUUsSUFBUztJQUVoRCxDQUFDO0lBbEJRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FRd0IsMEJBQVcsRUFBMkIsbUNBQWU7T0FQN0UsY0FBYyxDQW1CMUI7SUFBRCxxQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tIFwiLi4vc2hhcmVkL3N0YXRpYy1kYXRhXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tIFwiLi4vdHlwaW5ncy9kb21haW5cIjtcclxuaW1wb3J0IHsgTW9ja0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcclxuaW1wb3J0IElOZXdJdGVtID0gUFREb21haW4uSU5ld0l0ZW07XHJcbmltcG9ydCBJVXNlciA9IFBURG9tYWluLklVc2VyO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2xvZ1NlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxJUFRJdGVtPjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIG1vY2tEYXRhU2VydmljZTogTW9ja0RhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fYWxsSXRlbXMgPSB0aGlzLm1vY2tEYXRhU2VydmljZS5nZW5lcmF0ZVBUSXRlbXModGhpcy51c2VyU2VydmljZS51c2Vycyk7XHJcbiAgICAgICAgdGhpcy5fYWxsSXRlbXNbMF0uYXNzaWduZWUgPSB0aGlzLnVzZXJTZXJ2aWNlLnVzZXJzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBfLmZpbmQodGhpcy5fYWxsSXRlbXMsIGkgPT4gaS5pZCA9PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZE5ld1BUSXRlbShuZXdJdGVtOiBJTmV3SXRlbSwgaXRlbTogYW55KSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==