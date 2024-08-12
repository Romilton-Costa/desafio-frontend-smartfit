import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

  results=[];
  formGroup!:FormGroup;

  constructor(private formBuider:FormBuilder){}
  ngOnInit():void{
    this.formGroup=this.formBuider.group({
      hour:'',
      showClosed:false
    })
  }

  onSubmit():void{
    
  }

}
