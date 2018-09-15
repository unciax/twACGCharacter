import { Component, OnInit, Inject } from '@angular/core';
import { CharacterListModel } from './chara-list-model';
import { JsonLoaderService } from '../shared/json-loader.service';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

@Component({
    selector: 'chara-list',
    templateUrl: './chara-list.component.html'
})
export class CharacterListComponent implements OnInit {

    constructor(@Inject(JsonLoaderService) private jsonLoader: JsonLoaderService, @Inject(Router) private router: Router) { }

    public list: CharacterListModel[] = [];

    ngOnInit() { }

    ngAfterViewInit() {
        this.loadCharacterList();
    }

    public loadCharacterInfo(charaCode: string) {
        this.router.navigate(['/show']);
    }

    private loadCharacterList() {
        this.jsonLoader.loadFormAssets("character-list.json").subscribe(
            result => {
                this.list = result;
            }
        );
    }
}
