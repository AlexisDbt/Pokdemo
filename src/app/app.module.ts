import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponentComponent } from './pokemon-component/pokemon-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { PokéAPIService } from './pokéapi.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponentComponent,
    FilterPokemonPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Line to add
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokéAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
