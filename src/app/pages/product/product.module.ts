
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouting } from './product.routing';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormProductComponent } from './form-product/form-product.component';

@NgModule({
  declarations: [ProductComponent, FormProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRouting,
    SharedModule
  ]
})
export class ProductModule { }
