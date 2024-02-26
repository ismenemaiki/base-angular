import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Client } from "src/app/common/models/client.model";
import { ClientService } from "src/app/common/services/client/client.service";

@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClientComponent implements OnInit {
  clientModel: Client;
  isEditing: any;
  constructor(
    private _snackBar: MatSnackBar,
    private service: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditing = JSON.parse(sessionStorage.getItem('isEditing'));
    if (this.isEditing) {
      this.clientModel = this.isEditing;
    } else {
      this.clientModel = new Client
    }
  }

  triggerAction(isEditing: boolean) {
    const cliente = {
      name: this.clientModel.name,
      address: this.clientModel.address,
      phoneNumber: this.clientModel.phoneNumber,
      lastUpdate: new Date(),
      observation: this.clientModel.observation,
    };

    this.service.register(cliente).subscribe((res) => {
      console.log("CLIENTE CADATRADO =>", res);
    });
    
    this.openSnackBar(isEditing);
    this.router.navigate(['/client'])
    sessionStorage.removeItem('isEditing')
  }

  openSnackBar(isEditing: boolean) {
    if (isEditing) {
      this._snackBar.open("Cliente editado com sucesso!", "fechar", {
        duration: 5000,
      });
    } else {
      this._snackBar.open("Cliente cadastrado com sucesso!", "fechar", {
        duration: 5000,
      });
    }
  }
}
