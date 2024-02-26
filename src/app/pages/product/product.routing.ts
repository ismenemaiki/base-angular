import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FormProductComponent } from './form-product/form-product.component';

@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forChild([
      {path: '', component: ProductComponent},
      {path: 'edit-add', component: FormProductComponent}
    ])
  ],
  exports: [RouterModule]
})
export class ProductRouting { }
