import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { DestinationComponent } from './destination/destination.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CheckboxComponent },
  { path: 'bath', component: DestinationComponent }, // Add this route

];


@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    DestinationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
