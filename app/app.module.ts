import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SatPopoverModule } from '@ncstate/sat-popover';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { AppMaterialModules } from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule, 
    SatPopoverModule,
    // Material Modules
    AppMaterialModules
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    InlineEditComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
