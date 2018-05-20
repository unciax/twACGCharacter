import { Component, OnInit, Inject } from '@angular/core';
import { CharacterListModel } from './chara-list-model';
import { JsonLoaderService } from '../shared/json-loader.service';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'chara-list',
    templateUrl: './chara-list.component.html'
})
export class CharacterListComponent implements OnInit {

    constructor(@Inject(JsonLoaderService) private jsonLoader: JsonLoaderService) { }

    public list: CharacterListModel[] = [];

    ngOnInit() { }

    ngAfterViewInit() {
        this.loadCharacterList();
    }

    private loadCharacterList() {
        this.jsonLoader.loadFormAssets("character-list.json").subscribe(
            result => {
                this.list = result;
            }
        );
    }
}
