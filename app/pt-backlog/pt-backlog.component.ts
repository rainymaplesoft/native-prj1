import { Component, ChangeDetectorRef, OnInit, AfterViewInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { AddItemModalComponent } from './shared/add-item-modal.component';
import { ModalDialogOptions, ModalDialogService } from 'nativescript-angular/directives/dialogs';
import { Page } from "ui/page";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-pro-ui/sidedrawer';

import { ActionItem } from "ui/action-bar";
import { BacklogService } from './../services/backlog.service';
import { PTDomain } from "../typings/domain";
import INewItem = PTDomain.INewItem;

@Component({
    moduleId: module.id,
    selector: 'pt-backlog',
    templateUrl: 'pt-backlog.component.html',
    styleUrls: ['pt-backlog.component.css']
})

export class PtBacklogComponent implements AfterViewInit, OnInit {
    selectedViewIndex: number;
    constructor(private backlogService: BacklogService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef) {
        this.selectedViewIndex = 1;
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    public drawer: RadSideDrawer;

    ngAfterViewInit() {
        console.log(this.drawerComponent);
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.drawerLocation = SideDrawerLocation.Right;
        // this._changeDetectionRef.detectChanges();
    }

    ngOnInit() { }

    public selectedFilteredView(itemFilterIndex: number, pageTitle: string) {
        this.selectedViewIndex = itemFilterIndex;
    }
    public showSlideout() {
        this.drawer.showDrawer();
    }

    public showAddItemModal() {
        const options: ModalDialogOptions = {
            context: { promptMsg: "Add item" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(AddItemModalComponent, options).then((newItem: INewItem) => {
            if (newItem != null) {
                this.backlogService.addNewPTItem(newItem, null);
            }
        });
    }
    public logoutTap() {
        alert('logout')
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }
}