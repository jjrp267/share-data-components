import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Parent1Component } from './ejemplo1/parent1/parent1.component';
import { Child1Component } from './ejemplo1/child1/child1.component';
import { Parent2Component } from './ejemplo2/parent2/parent2.component';
import { Child2Component } from './ejemplo2/child2/child2.component';
import { Parent3Component } from './ejemplo3/parent3/parent3.component';
import { Child3Component } from './ejemplo3/child3/child3.component';
import { Parent4Component } from './ejemplo4/parent4/parent4.component';
import { SiblingComponent } from './ejemplo4/sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component,
    Parent4Component,
    SiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
