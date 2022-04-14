import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products :any;
  sortValue:string; //0 la asc, 1 desc
  searchText!:string;

  constructor(private ProductService:ProductService) {
    this.sortValue = 'asc';
   }

  ngOnInit(): void {
    this.getList()
  }

  // get list
  getList(){
    this.ProductService.get('?status=1')
    .subscribe((data)=>{
      this.products = data;
    })
  }
  
  // sort by price
  sortPrice(value:string){
    this.ProductService.get('?status=1&_sort=price&_order='+value)
    .subscribe((data)=>{
      this.products = data;
      
      // sxep xong => gan sortValue moi
      if(this.sortValue == 'desc'){
        this.sortValue = 'asc'; 
      }else{
        this.sortValue = 'desc'; 
      }

    })

  }

  // search
  onSearch(e:any){
    const key = e.target.value;

    this.ProductService.get('?name_like='+key)
    .subscribe((data)=>{
      this.products = data;
    })
  }
  
}
