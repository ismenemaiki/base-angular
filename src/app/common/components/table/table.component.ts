import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
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
  @Input() displayedColumns: string[];
  @Input() data: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren("matCellDef") matCellDefs: QueryList<ElementRef>;
  
  dataSource: MatTableDataSource<any>;

  constructor(
    private router: Router) {
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
    sessionStorage.setItem('isEditing', JSON.stringify(row))
    this.router.navigate(['client/edit-add']);
  }
}
