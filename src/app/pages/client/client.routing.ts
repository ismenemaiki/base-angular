import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ClientComponent}])
  ],
  exports: [RouterModule]
})
export class ClientRouting { }
