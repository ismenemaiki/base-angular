import { ClientRouting } from './client.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { TableModule } from 'src/app/common/components/table/table.module';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRouting,
    TableModule
  ]
})
export class ClientModule { }
