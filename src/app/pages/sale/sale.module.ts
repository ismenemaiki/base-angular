
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaleRouting } from './sale.routing';
import { SaleComponent } from './sale.component';
import { FormSaleComponent } from './form-sale/form-sale.component';

@NgModule({
  declarations: [SaleComponent, FormSaleComponent],
  imports: [
    CommonModule,
    FormsModule,
    SaleRouting,
    SharedModule
  ]
})
export class SaleModule { }
