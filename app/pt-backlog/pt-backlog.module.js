"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pipes_module_1 = require("./pipes/pipes.module");
var pt_backlog_component_1 = require("./pt-backlog.component");
var PtBacklogModule = (function () {
    function PtBacklogModule() {
    }
    PtBacklogModule = __decorate([
        core_1.NgModule({
            imports: [pipes_module_1.PipesModule],
            exports: [],
            declarations: [pt_backlog_component_1.PtBacklogComponent],
            providers: [],
        })
    ], PtBacklogModule);
    return PtBacklogModule;
}());
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxxREFBbUQ7QUFDbkQsK0RBQTREO0FBUzVEO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBTjNCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDdEIsT0FBTyxFQUFFLEVBQUU7WUFDWCxZQUFZLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztZQUNsQyxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSBcIi4vcGlwZXMvcGlwZXMubW9kdWxlXCI7XHJcbmltcG9ydCB7IFB0QmFja2xvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHQtYmFja2xvZy5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbUGlwZXNNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW10sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtQdEJhY2tsb2dDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFB0QmFja2xvZ01vZHVsZSB7IH1cclxuIl19