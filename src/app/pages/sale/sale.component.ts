import {
  Component,
  ElementRef,
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
  selector: "app-sale",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.scss"],
})
export class SaleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren("matCellDef") matCellDefs: QueryList<ElementRef>;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    "id",
    "itemName",
    "salePrice",
    "quantity",
    "payment",
  ];

  units = [
    { describe: "unidade", unit: "UN" },
    { describe: "kilograma", unit: "KG" },
    { describe: "litro", unit: "L" },
    { describe: "peça", unit: "PÇ" },
  ];

  productList = [];

  ngOnInit(): void {}
  constructor(private router: Router) {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.productList);
    }, 100);
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }

  onRowClick(row: any): void {
    sessionStorage.setItem("isEditing", JSON.stringify(row));
    this.router.navigate(["sale/sell"]);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
