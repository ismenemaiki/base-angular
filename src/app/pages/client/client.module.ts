import { ClientRouting } from './client.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { FormClientComponent } from './form-client/form-client.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClientRouting,
    SharedModule,
  ],
})
export class ClientModule { }
