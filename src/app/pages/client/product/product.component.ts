import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products :any;

  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
    this.getList()
  }

  // get list
  getList(){
    this.ProductService.get()
    .subscribe((data)=>{
      console.log(data)
      this.products = data;
    })
  }
  
}
