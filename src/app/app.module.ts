import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LivroService } from './services/livro.services';
import { LivroInserirComponent } from './livros/livro-inserir/livro-inserir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivroInserirComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [
    LivroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
