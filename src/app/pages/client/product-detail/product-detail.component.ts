import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // define id detail
  private id:number|string =''; 
  product:any = '';
  productEr:any = '';

  constructor(private routes:ActivatedRoute,
    private productService: ProductService,
    private router:Router) { 
    }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];

    this.productService.show(this.id,'?status=1').subscribe((data)=>{
      // check data res
         this.productEr = data;
          if(this.productEr.status == 0){
            this.router.navigate(['/404'])
          }else{
            this.product = data;
          }   
     
    },
    (er)=>{
      if(er.status == 404)
            this.router.navigate(['/404'])
    })
  }

}
