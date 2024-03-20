import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreditComponent } from "./credit.component";
import { FormCreditComponent } from "./form-credit/form-credit.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: CreditComponent },
      { path: "edit-add", component: FormCreditComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class CreditRouting {}
