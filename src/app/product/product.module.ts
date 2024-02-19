import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProductRoutingModule } from './product-routing.module';
import { TooltipModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ProductRoutingModule,
    TooltipModule
  ]
})
export class ProductModule { }
