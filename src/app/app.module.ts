import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CorrentistasComponent } from './components/correntistas/correntistas.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MovimentacaoListComponent,
    MovimentacaoNewComponent,
    HomeComponent,
    CorrentistasComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
