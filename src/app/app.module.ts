import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomClassDirectiveDirective } from './custom-class-directive.directive';
import { CustomStylesDirective } from './custom-styles.directive';
import { CustomDirectiveTimesDirective } from './custom-directive-times.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomClassDirectiveDirective,
    CustomStylesDirective,
    CustomDirectiveTimesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
