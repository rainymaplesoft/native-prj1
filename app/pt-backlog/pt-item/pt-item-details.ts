import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/directives/dialogs";

import { ItemTypePickerModalComponent } from './../shared';
import { PTDomain } from '../../typings/domain';
import { ItemTypeEnum, PriorityEnum, StatusEnum } from "../../shared/static-data";
import IPTItem = PTDomain.IPTItem;
import { BacklogService } from "../../services/backlog.service";

@Component({
    moduleId: module.id,
    selector: 'pt-item-details',
    templateUrl: 'pt-item-details.html'
})

export class PTItemDetailsComponent implements OnInit {

    item: IPTItem;

    constructor(
        private backlogService: BacklogService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef) { }

    ngOnInit() {
        this.backlogService.getItem('2').then(item => {
            this.item = item;
        })
    }

    public showTypeModal() {
        const options: ModalDialogOptions = {
            context: { itemTitle: this.item.title, promptMsg: "Select item type" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(ItemTypePickerModalComponent, options).then((res: ItemTypeEnum) => {
            if (res) {
                console.log(res);
                this.item.type = res;
            }
        });
    }
}