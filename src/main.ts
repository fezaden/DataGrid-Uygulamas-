import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import {  ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
bootstrapApplication(AppComponent,{
  providers: [importProvidersFrom(ModalModule.forRoot(),CommonModule)],
});