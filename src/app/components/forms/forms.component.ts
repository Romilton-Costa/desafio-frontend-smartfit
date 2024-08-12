import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '../../types/location.interface';
import { GetUnitsService } from '../../services/get-units.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  @Output() submitEvent= new EventEmitter();
  results:Location[]=[];
  filteredResults: Location[] = [];
  formGroup!:FormGroup;

  constructor(
    private formBuider:FormBuilder,
    private unitService:GetUnitsService,
    private filterUnitsService:FilterUnitsService
  ){}
  
  ngOnInit():void{
    this.formGroup=this.formBuider.group({
      hour:'',
      showClosed:false
    })
  }

  onSubmit():void{

  }

}
