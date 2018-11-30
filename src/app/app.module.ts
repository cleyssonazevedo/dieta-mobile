import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUICalendarModule } from 'nativescript-ui-calendar/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent, HistoricoComponent, HomeComponent } from './pages';
import { PratosModule } from './services/pratos';

@NgModule({
    imports: [
        NativeScriptModule,
        CommonModule,
        AppRoutingModule,
        NativeScriptUICalendarModule,
        NativeScriptUIDataFormModule,

        PratosModule
    ],
    declarations: [
        AppComponent,

        HomeComponent,
        CadastrarComponent,
        HistoricoComponent
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
