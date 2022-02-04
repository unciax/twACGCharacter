import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/spa/home', pathMatch: 'full' },
    {
        path: 'spa',
        component: AppComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: CharacterListComponent },
            { path: '**', redirectTo: '/spa/home', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
