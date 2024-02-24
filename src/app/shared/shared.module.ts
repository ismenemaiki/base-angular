import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
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
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { NgxMaskModule } from "ngx-mask";
import { maskOptions, createTranslateLoader } from "../app.module";

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
];

@NgModule({
  declarations: [TableComponent],
  imports: [
    importExport,
    NgxMaskModule.forRoot(maskOptions),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [importExport, TableComponent],
  entryComponents: [],
})
export class SharedModule {}
