import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Product } from "src/app/common/models/product.model";

@Component({
  selector: "app-form-product",
  templateUrl: "./form-product.component.html",
  styleUrls: ["./form-product.component.scss"],
})
export class FormProductComponent implements OnInit {
  isEditing: any;
  productModel: Product;

  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.isEditing = JSON.parse(sessionStorage.getItem("isEditing"));
    if (this.isEditing) {
      this.productModel = this.isEditing;
    } else {
      this.productModel = new Product();
    }
  }

  triggerAction(isEditing: boolean) {
    this.openSnackBar(isEditing);
    this.router.navigate(["/product"]);
    sessionStorage.removeItem("isEditing");
  }

  openSnackBar(isEditing: boolean) {
    if (isEditing) {
      this._snackBar.open("Produto editado com sucesso!", "fechar", {
        duration: 5000,
      });
    } else {
      this._snackBar.open("Produto cadastrado com sucesso!", "fechar", {
        duration: 5000,
      });
    }
  }
}
