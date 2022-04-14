import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm:FormGroup;
  id :string|number='';
  product : any;
  fileBase64:any = null;
  img :any;
  status:number=0;

  constructor(private productService:ProductService , private route:ActivatedRoute,private router:Router) { 

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
    this.id = this.route.snapshot.params['id'];

    // get data
    if (this.id) {

      this.productService.show(this.id,'?status=1').subscribe((res) => {

        // check res

        this.product = res;
        this.productForm.patchValue({
          name:this.product.name,
          price:this.product.price,
          image_url:this.product.image_url,
          desc:this.product.desc,
          status:this.product.status,
        });
      },
      (er)=>{
        if(er.status == 404){
          this.router.navigate(['/404']);
        }
      });

      
    }else{
      this.product = {
        'name':"",
        "price": '',
        "image_url":'',
        "desc":'',
      }
    }
  }

  updateProduct(data:any){
     // status
     if(data.status == true){
      this.status = 1;
    }else{
      this.status = 0;
    }

    // file
    if(this.fileBase64){
      this.img = this.fileBase64;
    }else{
      this.img = this.product.image_url;
    }
    this.productService.update(this.id,{
      ...data,
      image_url : this.img,
      status:this.status
    }).subscribe(()=>{
      this.router.navigate(['/admin/phones']);
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
