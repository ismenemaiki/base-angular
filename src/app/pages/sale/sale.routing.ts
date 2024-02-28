import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { FormSaleComponent } from './form-sale/form-sale.component';

@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forChild([
      {path: '', component: SaleComponent},
      {path: 'edit-add', component: FormSaleComponent}
    ])
  ],
  exports: [RouterModule]
})
export class SaleRouting { }
