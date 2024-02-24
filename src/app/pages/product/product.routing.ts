import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forChild([{path: '', component: ProductComponent}])
  ],
  exports: [RouterModule]
})
export class ProductRouting { }
