import { Component, OnInit } from '@angular/core';

//import services
import { DetailsService } from 'src/app/services/details.service';

// import interface
import { IDetails } from 'src/app/model/IDetails';
import { ICardDetails } from 'src/app/model/ICardDetails';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  displayFormData: IDetails;
  displayFormCard: ICardDetails;

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.displayData();
    this.displayCardData();
  }

  displayData(){
    this.displayFormData = this.detailsService.getFormData();
  }

  displayCardData(){
    this.displayFormCard = this.detailsService.getCardData();
  }

}
