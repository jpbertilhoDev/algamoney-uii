import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//PRIMENG IMPORTS
import { AccordionModule } from 'primeng/accordion';
import { MenuItem, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';

import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //PRIMENG IMPORTS
    InputTextModule,
    ButtonModule,
    TableModule,
    ToastModule,
    PaginatorModule,
    TooltipModule,
    SidebarModule,
    ToolbarModule,
    SplitButtonModule,


  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
