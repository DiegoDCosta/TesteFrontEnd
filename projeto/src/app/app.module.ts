import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes'
import { MaterialModule } from './material';
import { LayoutComponent } from './layout/layout.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AbasComponent } from './shared/abas/abas.component';
import { AdicionarNotasComponent } from './shared/adicionar-notas/adicionar-notas.component';
import { CadastrarNotasComponent } from './shared/cadastrar-notas/cadastrar-notas.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ClientesComponent,
    HomeComponent,
    AbasComponent,
    AdicionarNotasComponent,
    CadastrarNotasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    routing
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
