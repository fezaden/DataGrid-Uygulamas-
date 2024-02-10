
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes), 
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment)),
      provideFirestore(() => getFirestore()),
      ModalModule.forRoot()
    
    ]),]
};
