import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'character-item',
    templateUrl: './character-item.component.html',
    styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit {

    @Input()
    displayName: string = 'NoName';

    @Input()
    group: string = 'NoGroup';

    @Input()
    avatarFileName: string = '';

    @Input()
    tags: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    getAvatarPath(): string {
        return '/assets/character-avatar/' + this.avatarFileName;
    }

    getTagList(): string[] {
        return this.tags.split(',');
    }

}
