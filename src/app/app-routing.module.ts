import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CadastrarComponent, HistoricoComponent, HomeComponent } from './pages';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/(homeTab:home//cadastrarTab:cadastrar//historicoTab:historico)'
    },

    {
        path: 'home',
        component: HomeComponent,
        outlet: 'homeTab'
    },
    {
        path: 'cadastrar',
        component: CadastrarComponent,
        outlet: 'cadastrarTab'
    },
    {
        path: 'historico',
        component: HistoricoComponent,
        outlet: 'historicoTab'
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
