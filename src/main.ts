import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import {  ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
bootstrapApplication(AppComponent,{
  providers: [importProvidersFrom(ModalModule.forRoot(),CommonModule),provideHttpClient()],
});