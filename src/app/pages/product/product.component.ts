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
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren("matCellDef") matCellDefs: QueryList<ElementRef>;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    "id",
    "productName",
    "salePrice",
    "quantity",
    "provider",
    
  ]; // "costPrice","minStock",
  productList = [
    {
      id: 1,
      productName: "agua sao lourenço",
      salePrice: 10.00,
      quantity: 48,
      provider: "Joaozinho",
      minStock: 20,
    },
    {
      id: 2,
      productName: "gás liquigas",
      salePrice: 99.00,
      quantity: 15,
      provider: "liquigas",
      minStock: 5,
    },
  ];

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
    this.router.navigate(["product/edit-add"]);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addNewProduct(): void {
    sessionStorage.removeItem("isEditing");
    this.router.navigate(["product/edit-add"]);
  }
}
