import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // define id detail
  private id:number|string;
  product:any;

  constructor(private routes:ActivatedRoute,
    private productService: ProductService) { 
      this.id = '';
    }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];

    this.productService.show(this.id).subscribe((data)=>[
      this.product = data
    ])
  }

}
