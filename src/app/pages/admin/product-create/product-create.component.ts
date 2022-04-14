import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // define form
  productForm:FormGroup;
  fileBase64:any;
  status:number=0;

  constructor(private productService:ProductService , private router:Router) { 

     // define form-component
     this.productForm = new FormGroup({
      name: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      image_url: new FormControl('',Validators.required),
      desc: new FormControl('',
      [Validators.minLength(5),
        Validators.required]),
      status:new FormControl(0),
    });
  }

  ngOnInit(): void {
  }

  // save add 
  store(data : any){
    if(data.status == true){
      this.status = 1;
    }else{
      this.status = 0;
    }
    this.productService.store({
      ...data,
      image_url:this.fileBase64,
      status:this.status,
    })
    .subscribe(()=>{
      this.router.navigate(['/admin/phones'])
    })
  }

  upFile(e:any){
    const file = e.target.files[0];

    const read = new FileReader();

    read.onload = (data)=>{
      this.fileBase64 = data.target?.result;
    }
    read.readAsDataURL(file);
  }

}
