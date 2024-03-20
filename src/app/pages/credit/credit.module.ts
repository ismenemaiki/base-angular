import { CreditRouting } from './credit.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './credit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormCreditComponent } from './form-credit/form-credit.component';

@NgModule({
  declarations: [CreditComponent, FormCreditComponent],
  imports: [
    CommonModule,
    CreditRouting,
    SharedModule
  ]
})
export class CreditModule { }
