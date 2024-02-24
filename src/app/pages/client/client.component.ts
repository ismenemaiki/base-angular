import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "phoneNumber", "address"];
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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addNewClient() {
    sessionStorage.removeItem('isEditing')
    this.router.navigate(['client/edit-add']);
  }
}
