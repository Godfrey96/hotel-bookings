import { Injectable } from '@angular/core';

//import interface
import { IDetails } from 'src/app/model/IDetails';
import { ICardDetails } from 'src/app/model/ICardDetails';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  formData: IDetails;
  cardData: ICardDetails;

constructor() { }

setFormData(data){
  this.formData = data;
  //console.log(this.formData);
}

setCardData(data){
  this.cardData = data;
  //console.log(this.cardData);
}

getFormData(){
  return this.formData;
}

getCardData(){
  return this.cardData;
}

}
