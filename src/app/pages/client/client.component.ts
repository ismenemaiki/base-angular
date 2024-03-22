import {
  AfterContentInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { ClientService } from "src/app/services/client.service";

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
    
  clientList: any;

  constructor(
    private service: ClientService,
    private router: Router) {

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.clientList);
    }, 100);
  }

  loadClientList(): void {
    this.service.getClientList().subscribe(res => {
      this.clientList = res;
    });
  } 
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }
  filterList() {
    (this.dataSource as any) = this.service.getListFiltred(this.clientList, [{ name: 'Helen'}]);
    this.closeModal('filterModal');
  }

  ngOnInit(): void {
    this.loadClientList()
  }

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

  openModal(id: string): void {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }
  }

  closeModal(id: string): void {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.setAttribute('aria-modal', 'false');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }
  }
}
