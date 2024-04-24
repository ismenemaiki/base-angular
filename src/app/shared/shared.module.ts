import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AvatarModule } from "../common/components/avatar/avatar.module";
import { TableComponent } from "../common/components/table/table.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { HttpClient } from "@angular/common/http";

import { IConfig, NgxMaskModule } from "ngx-mask";
import { createTranslateLoader } from "../app.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";

const maskOptions: Partial<IConfig> | (() => Partial<IConfig>) = {};

const importExport = [
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  AvatarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatTooltipModule,
  MatSortModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatListModule
];

@NgModule({
  declarations: [TableComponent],
  imports: [importExport, NgxMaskModule.forRoot(maskOptions)],
  exports: [importExport, TableComponent],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  entryComponents: [],
})
export class SharedModule {}
