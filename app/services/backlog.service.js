"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var static_data_1 = require("../shared/static-data");
var _ = require("lodash");
var BacklogService = (function () {
    function BacklogService() {
        this._allItems = ITEMS;
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
    BacklogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BacklogService);
    return BacklogService;
}());
exports.BacklogService = BacklogService;
var ITEMS = [
    { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: static_data_1.PriorityEnum.Low, status: static_data_1.StatusEnum.Open, tasks: [], type: static_data_1.ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '2', title: 'item 2', description: 'item 2 desc', estimate: 10, priority: static_data_1.PriorityEnum.Medium, status: static_data_1.StatusEnum.ReOpened, tasks: [], type: static_data_1.ItemTypeEnum.PBI, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '3', title: 'item 3', description: 'item 3 desc', estimate: 12, priority: static_data_1.PriorityEnum.High, status: static_data_1.StatusEnum.Open, tasks: [], type: static_data_1.ItemTypeEnum.Chore, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '4', title: 'item 4', description: 'item 4 desc', estimate: 6, priority: static_data_1.PriorityEnum.Critical, status: static_data_1.StatusEnum.Open, tasks: [], type: static_data_1.ItemTypeEnum.Impediment, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '5', title: 'item 5', description: 'item 5 desc', estimate: 20, priority: static_data_1.PriorityEnum.Low, status: static_data_1.StatusEnum.Open, tasks: [], type: static_data_1.ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null }
];
var ITEM = { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: static_data_1.PriorityEnum.Low, status: static_data_1.StatusEnum.Open, tasks: [], type: static_data_1.ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2xvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2xvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHFEQUErRTtBQUMvRSwwQkFBMkI7QUFNM0I7SUFPSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFMRCxzQkFBVyxpQ0FBSzthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBS00sZ0NBQU8sR0FBZCxVQUFlLEVBQVU7UUFDckIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQWRRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTs7T0FDQSxjQUFjLENBZTFCO0lBQUQscUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSx3Q0FBYztBQWlCM0IsSUFBTSxLQUFLLEdBQWM7SUFDckIsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSwwQkFBWSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsd0JBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQVksQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzlPLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsMEJBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLHdCQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLDBCQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN0UCxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLDBCQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSx3QkFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSwwQkFBWSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDbFAsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSwwQkFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsd0JBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQVksQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzFQLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsMEJBQVksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLHdCQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLDBCQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUNsUCxDQUFDO0FBR0YsSUFBTSxJQUFJLEdBQ04sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSwwQkFBWSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsd0JBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQVksQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSBcIi4uL3NoYXJlZC9zdGF0aWMtZGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcclxuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tIFwiLi4vdHlwaW5ncy9kb21haW5cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tsb2dTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9hbGxJdGVtczogSVBUSXRlbVtdO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYWxsSXRlbXMgPSBJVEVNUztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gXy5maW5kKHRoaXMuX2FsbEl0ZW1zLCBpID0+IGkuaWQgPT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZWN0ZWRJdGVtKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgSVRFTVM6IElQVEl0ZW1bXSA9IFtcclxuICAgIHsgaWQ6ICcxJywgdGl0bGU6ICdpdGVtIDEnLCBkZXNjcmlwdGlvbjogJ2l0ZW0gMSBkZXNjJywgZXN0aW1hdGU6IDUsIHByaW9yaXR5OiBQcmlvcml0eUVudW0uTG93LCBzdGF0dXM6IFN0YXR1c0VudW0uT3BlbiwgdGFza3M6IFtdLCB0eXBlOiBJdGVtVHlwZUVudW0uQnVnLCBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSwgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSgpLCBjb21tZW50czogW10sIGFzc2lnbmVlOiBudWxsIH0sXHJcbiAgICB7IGlkOiAnMicsIHRpdGxlOiAnaXRlbSAyJywgZGVzY3JpcHRpb246ICdpdGVtIDIgZGVzYycsIGVzdGltYXRlOiAxMCwgcHJpb3JpdHk6IFByaW9yaXR5RW51bS5NZWRpdW0sIHN0YXR1czogU3RhdHVzRW51bS5SZU9wZW5lZCwgdGFza3M6IFtdLCB0eXBlOiBJdGVtVHlwZUVudW0uUEJJLCBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSwgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSgpLCBjb21tZW50czogW10sIGFzc2lnbmVlOiBudWxsIH0sXHJcbiAgICB7IGlkOiAnMycsIHRpdGxlOiAnaXRlbSAzJywgZGVzY3JpcHRpb246ICdpdGVtIDMgZGVzYycsIGVzdGltYXRlOiAxMiwgcHJpb3JpdHk6IFByaW9yaXR5RW51bS5IaWdoLCBzdGF0dXM6IFN0YXR1c0VudW0uT3BlbiwgdGFza3M6IFtdLCB0eXBlOiBJdGVtVHlwZUVudW0uQ2hvcmUsIGRhdGVDcmVhdGVkOiBuZXcgRGF0ZSgpLCBkYXRlTW9kaWZpZWQ6IG5ldyBEYXRlKCksIGNvbW1lbnRzOiBbXSwgYXNzaWduZWU6IG51bGwgfSxcclxuICAgIHsgaWQ6ICc0JywgdGl0bGU6ICdpdGVtIDQnLCBkZXNjcmlwdGlvbjogJ2l0ZW0gNCBkZXNjJywgZXN0aW1hdGU6IDYsIHByaW9yaXR5OiBQcmlvcml0eUVudW0uQ3JpdGljYWwsIHN0YXR1czogU3RhdHVzRW51bS5PcGVuLCB0YXNrczogW10sIHR5cGU6IEl0ZW1UeXBlRW51bS5JbXBlZGltZW50LCBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSwgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSgpLCBjb21tZW50czogW10sIGFzc2lnbmVlOiBudWxsIH0sXHJcbiAgICB7IGlkOiAnNScsIHRpdGxlOiAnaXRlbSA1JywgZGVzY3JpcHRpb246ICdpdGVtIDUgZGVzYycsIGVzdGltYXRlOiAyMCwgcHJpb3JpdHk6IFByaW9yaXR5RW51bS5Mb3csIHN0YXR1czogU3RhdHVzRW51bS5PcGVuLCB0YXNrczogW10sIHR5cGU6IEl0ZW1UeXBlRW51bS5CdWcsIGRhdGVDcmVhdGVkOiBuZXcgRGF0ZSgpLCBkYXRlTW9kaWZpZWQ6IG5ldyBEYXRlKCksIGNvbW1lbnRzOiBbXSwgYXNzaWduZWU6IG51bGwgfVxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IElURU06IElQVEl0ZW0gPVxyXG4gICAgeyBpZDogJzEnLCB0aXRsZTogJ2l0ZW0gMScsIGRlc2NyaXB0aW9uOiAnaXRlbSAxIGRlc2MnLCBlc3RpbWF0ZTogNSwgcHJpb3JpdHk6IFByaW9yaXR5RW51bS5Mb3csIHN0YXR1czogU3RhdHVzRW51bS5PcGVuLCB0YXNrczogW10sIHR5cGU6IEl0ZW1UeXBlRW51bS5CdWcsIGRhdGVDcmVhdGVkOiBuZXcgRGF0ZSgpLCBkYXRlTW9kaWZpZWQ6IG5ldyBEYXRlKCksIGNvbW1lbnRzOiBbXSwgYXNzaWduZWU6IG51bGwgfTsiXX0=