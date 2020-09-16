import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BsDatepickerConfig, MonthPickerComponent, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';

//import services
import { DetailsService } from 'src/app/services/details.service';
import { IDetails } from 'src/app/model/IDetails';
import { MONTH } from 'ngx-bootstrap/chronos/units/constants';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  paymentForm: FormGroup;
  paySubmitted: boolean;
  displayMessage: string;
  displayFormData: IDetails;

  bsValue: Date = new Date();
  minMode: BsDatepickerViewMode = 'month';

  datePickerConfig: Partial<BsDatepickerConfig>;
  minDate: Date;
  minMonth: Date;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private detailsService: DetailsService) {
                this.datePickerConfig = Object.assign({},
                  {
                    containerClass: 'theme-dark-blue',
                     dateInputFormat: 'MM/YYYY',
                     //selectDay: false,
                     minMode : this.minMode
                     //showWeekNumbers: false
                    });
                this.minMonth = new Date();
                this.minMonth.setMonth(this.minMonth.getMonth());
              }

  ngOnInit() {
    this.displayData();
    this.buildForm();
    //this.displayData();
  }

  displayData(){
    this.displayFormData = this.detailsService.getFormData();
  }

  buildForm(){
    this.paymentForm = this.formBuilder.group({
      nameOnCard: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(1111111111111111), Validators.max(9999999999999999)]],
      expiryMonth: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(1), Validators.max(12)]],
      //expiryYear: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.min(1111), Validators.max(9999)]],
      cardCVVNumber: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.min(111), Validators.max(999)]]
    });
  }

  get f(){
    return this.paymentForm.controls;
  }

  onSubmit(){
    this.paySubmitted =true;
    if(this.paymentForm.valid){
      this.detailsService.setCardData(this.paymentForm.value);
      this.displayMessage = "Payment Successful!";
      this.router.navigate(['/app-display-details']);
    }else{
      this.displayMessage = "Payment Failed!";
    }
    //console.log(this.paymentForm);
  }

  /*displayData(){
    this.displayFormData = this.detailsService.getFormData();
  }*/

}
