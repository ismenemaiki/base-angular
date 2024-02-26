import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() displayedColumns: any[];
  @Input() data: any;
  @Input() configs: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren("matCellDef") matCellDefs: QueryList<ElementRef>;

  @ContentChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<any>;

  dataSource: MatTableDataSource<any>;
  configsTable = [
    {
      header: [
        { label: "id", value: "ID" },
        { label: "name", value: "Nome" },
        { label: "phoneNumber", value: "Celular" },
        { label: "address", value: "Endereço" },
      ],
    },
  ];
  constructor(private router: Router) {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.data);
    }, 100);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClick(row: any) {
    sessionStorage.setItem("isEditing", JSON.stringify(row));
    this.router.navigate(["client/edit-add"]);
  }
}
