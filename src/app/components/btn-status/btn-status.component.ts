import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-status',
  templateUrl: './btn-status.component.html',
  styleUrls: ['./btn-status.component.css']
})
export class BtnStatusComponent implements OnInit {

   // input used share var or value Parent component to child component.
   @Input() status:number;
  
   // output used share var or value Child component to parent component.
   // Event emitter được thiết kế để báo cho component cha khi component con có sự thay đổi.
   @Output() changeStatus:EventEmitter<number>;

  constructor() {
    this.status=0;
    this.changeStatus = new EventEmitter()
   }

  ngOnInit(): void {
  }

  onChangeStatus(status:number){
    // bắn status mới dc gán ra lại cha
    this.changeStatus.emit(status)

      
  }

}
