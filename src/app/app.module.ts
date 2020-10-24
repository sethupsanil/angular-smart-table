import { BadgeComponent } from './badge/badge.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { GridItemComponent } from './table/grid-item/grid-item.component';
import { ShortTextPipe } from './short-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,BadgeComponent, GridItemComponent, ShortTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[BadgeComponent],
  exports: [ShortTextPipe]
})
export class AppModule { }
