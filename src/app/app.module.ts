import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadsUiComponent } from './uploads-ui/uploads-ui.component';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    UploadsUiComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
