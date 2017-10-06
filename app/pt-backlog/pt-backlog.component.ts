
import { Component, ChangeDetectorRef, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Page } from "ui/page";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-pro-ui/sidedrawer';
import { ActionItem } from "ui/action-bar";

@Component({
    moduleId: module.id,
    selector: 'pt-backlog',
    templateUrl: 'pt-backlog.component.html',
    styles: [`
            .side-drawer-panel{
                background-color:#333333;
            }
             `]
})

export class PtBacklogComponent implements AfterViewInit, OnInit {
    @ViewChild('mySideDrawer', { read: ElementRef }) public drawerComponent: RadSideDrawer;
    public _drawer: RadSideDrawer;

    constructor(private _changeDetectionRef: ChangeDetectorRef) { }

    ngOnInit() { }

    ngAfterViewInit() {
        console.log(this.drawerComponent);
        //this._drawer = this.drawerComponent.sideDrawer;
        this._drawer = this.drawerComponent;
        //this._drawer = this.drawerComponent['sideDrawer'];
        this._drawer.drawerLocation = SideDrawerLocation.Right;
        this._changeDetectionRef.detectChanges();


    }

    public showSlideout() {
        this._drawer.showDrawer();
    }

    public logoutTap() {
        alert('logout')
    }
}