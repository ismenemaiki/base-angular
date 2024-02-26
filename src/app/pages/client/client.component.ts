import {
  AfterContentInit,
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
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit, AfterContentInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren("matCellDef") matCellDefs: QueryList<ElementRef>;
  displayedColumns: string[] = ["id", "name", "phoneNumber", "address"];
  dataSource: MatTableDataSource<any>;

  clientList = [
    {
      id: 1,
      name: "Maiki",
      phoneNumber: 1199990000,
      address: " Rua Penedo da Saudade, 37 Rua Penedo da Saudade, 37",
    },
    { id: 2, name: "Bruno", phoneNumber: 1199990000, address: "Rua XYZQ" },
    { id: 3, name: "Helen", phoneNumber: 1199990000, address: "Rua XYZW" },
    { id: 4, name: "Juliano", phoneNumber: 1199990000, address: "Rua XYZE" },
    { id: 5, name: "Beatriz", phoneNumber: 1199990000, address: "Rua XYZR" },
    { id: 6, name: "Carlos", phoneNumber: 1199990000, address: "Rua XYZT" },
    { id: 7, name: "Jean", phoneNumber: 1199990000, address: "Rua XYZY" },
    { id: 8, name: "Gabriel", phoneNumber: 1199990000, address: "Rua XYZU" },
    { id: 9, name: "Daniela", phoneNumber: 1199990000, address: "Rua XYZI" },
    { id: 10, name: "Eduardo", phoneNumber: 1199990000, address: "Rua XYZO" },
    { id: 11, name: "Maria", phoneNumber: 1199990000, address: "Rua XYZO" },
    { id: 12, name: "Jessica", phoneNumber: 1199990000, address: "Rua XYZO" },
  ];

  constructor(private router: Router) {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.clientList);
    }, 100);
  }
  
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }

  ngOnInit(): void {}

  addNewClient() {
    sessionStorage.removeItem("isEditing");
    this.router.navigate(["client/edit-add"]);
  }

  onRowClick(row: any) {
    sessionStorage.setItem("isEditing", JSON.stringify(row));
    this.router.navigate(["client/edit-add"]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
