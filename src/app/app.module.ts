import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponentComponent } from './pokemon-component/pokemon-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { PokéAPIService } from './pokéapi.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponentComponent,
    FilterPokemonPipePipe,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Line to add
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [PokéAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
