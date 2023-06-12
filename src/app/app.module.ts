import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptor } from  './interceptors/interceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SharedComponent } from './shared/shared.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule,} from "@angular/material/dialog"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list'


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ToDoListComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // MatCardModule,
    // MatButtonModule,
    // MatIconModule,
    // MatMenuModule,
    // MatToolbarModule,
    // MatDialogModule,
    BrowserAnimationsModule,
    MatDialogModule,
     MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
