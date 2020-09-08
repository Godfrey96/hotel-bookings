import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

// import services
import { AlertifyService } from 'src/app/services/alertify.service';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  editForm: FormGroup;
  custSubmitted: boolean;

  constructor(private fb: FormBuilder,
             private router: Router,
             private alertify: AlertifyService,
             private detailsService: DetailsService
             ) { }

  ngOnInit() {
    this.editDetails();
  }

  editDetails(){
    this.editForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [ Validators.required, Validators.maxLength(10)]],
      roomType: ['', Validators.required],
      nbrRooms: ['', Validators.required],
      adult: ['', Validators.required],
      chld: ['', Validators.required],
      nbrGuests: ['', Validators.required],
      checkin: ['', Validators.required],
      checkout: ['', Validators.required]
    });
  }

  onSubmit(){
    this.custSubmitted = true;
    if(this.editForm.valid){
      this.detailsService.setFormData(this.editForm.value);
      this.alertify.success('Thank you for your booking please complete payment')
      this.router.navigate(['/app-card-details']);
    }else{
      this.alertify.error('Kindly provide all the required fields');
    }

    //console.log(this.editForm);
  }

  // get methods for all form controls
  get firstName(){
    return this.editForm.get('firstName') as FormControl;
  }

  get lastName(){
    return this.editForm.get('lastName') as FormControl;
  }

  get email(){
    return this.editForm.get('email') as FormControl;
  }

  get mobile(){
    return this.editForm.get('mobile') as FormControl;
  }

  get roomType(){
    return this.editForm.get('roomType') as FormControl;
  }

  get nbrRooms(){
    return this.editForm.get('nbrRooms') as FormControl;
  }

  get adult(){
    return this.editForm.get('adult') as FormControl;
  }

  get chld(){
    return this.editForm.get('chld') as FormControl;
  }

  get nbrGuests(){
    return this.editForm.get('nbrGuests') as FormControl;
  }

  get checkin(){
    return this.editForm.get('checkin') as FormControl;
  }

  get checkout(){
    return this.editForm.get('checkout') as FormControl;
  }

}
