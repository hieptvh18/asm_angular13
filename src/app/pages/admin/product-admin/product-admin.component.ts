import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  products :any;
  searchText!:string;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(params : any=''){
    this.productService.get(params).subscribe(data=>{
      this.products = data;
    })
  }

  // delete
  remove(id:string|number){
    // confirm
    if(confirm('Warning! You definitely delete?')){

      this.productService.destroy(id).subscribe(()=>{
        return this.getList();
      })
    }
  }

  // change status
  parentChangeStatus(newStatus:number,student:any){

    this.productService.update(student.id,{
      // get all student value , gan  new status
      ...student,
      status:newStatus

    }).subscribe(res=>{
      this.getList()
    })
  }

  // search
  search(key:any){
    this.getList('?name_like='+key.data)
  }

}
