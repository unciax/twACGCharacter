import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CharacterListComponent } from './character/chara-list.component';
import { JsonLoaderService } from './shared/json-loader.service';
import { CharacterDetailComponent } from './character/chara-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        AppNavbarComponent,
        CharacterListComponent,
        CharacterDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [
        JsonLoaderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
