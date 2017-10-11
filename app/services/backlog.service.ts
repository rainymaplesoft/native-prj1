import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { ItemTypeEnum, PriorityEnum, StatusEnum } from "../shared/static-data";
import * as _ from 'lodash'

import { PTDomain } from "../typings/domain";
import { MockDataService } from './mock-data.service';
import IPTItem = PTDomain.IPTItem;
import INewItem = PTDomain.INewItem;
import IUser = PTDomain.IUser;

@Injectable()
export class BacklogService {

    private _allItems: Array<IPTItem>;

    public get items() {
        return this._allItems;
    }
    constructor(private userService: UserService, private mockDataService: MockDataService) {
        this._allItems = this.mockDataService.generatePTItems(this.userService.users);
        this._allItems[0].assignee = this.userService.users[0];
    }

    public getItem(id: string) {
        const selectedItem = _.find(this._allItems, i => i.id == id);
        return Promise.resolve(selectedItem);
    }
    public addNewPTItem(newItem: INewItem, item: any) {

    }
}
