
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouting } from './product.routing';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRouting
  ]
})
export class ProductModule { }
