import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "phoneNumber", "address"];
  configsTable = [
    { header: ["id", "name", "phoneNumber", "address"]}
    // header, cell, content
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
