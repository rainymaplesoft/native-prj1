import { Injectable } from '@angular/core';
import * as fileSystemModule from 'file-system';
import * as faker from 'faker';
import * as _ from 'lodash';

import * as constModule from '../shared/constants';
import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../shared/static-data';

import { PTDomain } from '../typings/domain';
import IUser = PTDomain.IUser;
import IPTItem = PTDomain.IPTItem;
import ITask = PTDomain.ITask;
import IComment = PTDomain.IComment;

@Injectable()
export class MockDataService {

    constructor() { }

    private getUserAvatars(path) {
        var avatarList: Array<string> = [];
        var currentAppFolder = fileSystemModule.knownFolders.currentApp();
        var menAvatarsFile = currentAppFolder.getFile(path);
        var fileText = menAvatarsFile.readTextSync();

        var lines = fileText.split('\n');
        for (var i = 0; i < lines.length; i++) {
            avatarList.push(lines[i]);
        }
        return avatarList;
    }

    public generateUser(avatarsMen: string[]): IUser {
        let genderBool = faker.random.boolean();
        let genderInt = parseInt(genderBool + '');
        let firstName = faker.name.firstName(genderInt);
        let lastName = faker.name.lastName(genderInt);
        var avatar = _.sample(avatarsMen);

        let user: IUser = {
            id: faker.random.uuid(),
            fullName: firstName + ' ' + lastName,
            avatar: avatar
        };
        return user;
    }

    public getMeUser(): IUser {
        let avatarMe = this.getUserAvatars('images/avatars/base64/me.txt')[0];
        let userMe: IUser = {
            id: faker.random.uuid(),
            fullName: 'Alex Ziskind',
            avatar: avatarMe
        };
        return userMe;
    }

    public generateUsers(): Array<IUser> {
        let avatarsLi = this.getUserAvatars('images/avatars/base64/base64.txt');
        let users = _.times(constModule.NUM_USERS, () => {
            return this.generateUser(avatarsLi);
        });
        let userMe = this.getMeUser();
        users.unshift(userMe);
        return users;
    }

    public generatePTItem(users: Array<IUser>): IPTItem {
        let typeStr = ItemTypeEnum[_.random(1, 4)];
        let priorityStr = PriorityEnum[_.random(1, 4)];
        let statusStr = StatusEnum[_.random(1, 4)];

        let ptItem: IPTItem = {
            id: faker.random.uuid(),
            title: this.toTitleCase(faker.lorem.words()),
            dateCreated: faker.date.past(1),
            dateModified: faker.date.past(1),
            type: ItemTypeEnum[typeStr],
            estimate: _.random(1, 24),
            priority: PriorityEnum[priorityStr],
            status: StatusEnum[statusStr],
            assignee: _.sample(users),
            tasks: this.generateTasks(),
            comments: this.generateComments(users)
        };

        return ptItem;
    }

    public generatePTItems(users: Array<IUser>): Array<IPTItem> {
        let items = _.times(constModule.NUM_PT_ITEMS, () => {
            return this.generatePTItem(users);
        });
        return items;
    }

    public generateTasks(): Array<ITask> {
        let numTasks = _.random(5, 20);
        let tasks = _.times(numTasks, () => {
            return this.generateTask();
        });
        return tasks;
    }

    public generateTask(): ITask {
        let task: ITask = {
            id: faker.random.uuid(),
            title: this.toTitleCase(faker.lorem.words()),
            dateCreated: faker.date.past(1),
            dateModified: faker.date.past(1),
            completed: faker.random.boolean()
        };
        return task;
    }

    public generateComments(users: Array<IUser>): Array<IComment> {
        let numComments = _.random(0, 5);
        let comments = _.times(numComments, () => {
            return this.generateComment(users);
        });
        return comments;
    }

    public generateComment(users: Array<IUser>): IComment {
        let comment: IComment = {
            id: faker.random.uuid(),
            title: this.toTitleCase(faker.lorem.sentence(20, 40)),
            dateCreated: faker.date.past(1),
            dateModified: faker.date.past(1),
            user: _.sample(users)
        };
        return comment;
    }


    private toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }
}