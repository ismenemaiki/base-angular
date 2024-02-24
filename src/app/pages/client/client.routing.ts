import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { FormClientComponent } from './form-client/form-client.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ClientComponent},
      {path: 'edit-add', component: FormClientComponent}
    
    ])
  ],
  exports: [RouterModule]
})
export class ClientRouting { }
