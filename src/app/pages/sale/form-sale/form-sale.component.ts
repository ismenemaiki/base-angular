import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-sale",
  templateUrl: "./form-sale.component.html",
  styleUrls: ["./form-sale.component.scss"],
})
export class FormSaleComponent implements OnInit {
  filteredProductList: any;
  selectedProduct: any;
  searchTerm: string = '';

  productList = [
    { productName: "Skol", price: "9,00" },
    { productName: "Agua 500ml", price: "2,00" },
    { productName: "Gás Ultragas", price: "120,00" },
    { productName: "Ruffes", price: "5,00" },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredProductList = this.productList;
  }
  applyFilter(searchValue: string): void {
    this.searchTerm = searchValue;
    if (!searchValue) {
      this.filteredProductList = this.productList;
    } else {
      this.filteredProductList = this.productList.filter(product =>
        product.productName.includes(searchValue)
      );
    }
  }

  isSelected(item: any): boolean {
    return this.selectedProduct && this.selectedProduct.productName === item.productName;
  }

  toggleSelection(item: any): void {
    if (this.isSelected(item)) {
      this.selectedProduct = null; // Desmarca o produto se já estiver selecionado
    } else {
      this.selectedProduct = item; // Seleciona o produto se não estiver selecionado
    }
  }
}
