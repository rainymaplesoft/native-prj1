import { Component, OnInit } from '@angular/core';
import { ItemTypeEnum, PriorityEnum, StatusEnum } from "../../shared/static-data";
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;
import { BacklogService } from "../../services";

@Component({
    moduleId: module.id, selector: 'pt-item-list', templateUrl: 'pt-item-list.html', styleUrls: ['pt-item-list.css']
}

) export class PTItemListComponent implements OnInit {
    ptItems: IPTItem[];

    constructor(private backlogService: BacklogService, ) { }

    ngOnInit() {
        this.ptItems = this.backlogService.items;
    }
    listItemTap(args: any) {
        let lv = args.object;
        let item = lv.items[args.index];
        alert(item.title);
    }

    public getIndicatorClass(item: IPTItem) {
        return ItemTypeEnum.getIndicatorClass(item.type);
    }
}

