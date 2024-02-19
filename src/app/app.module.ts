import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './app-routing-lazy.module';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


// import { AccountComponent } from './account/account.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProductComponent } from './product/product.component';
// import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    // AccountComponent,
    // DashboardComponent,
    // ProductComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
