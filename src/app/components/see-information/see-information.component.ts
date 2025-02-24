import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InformationService } from 'src/app/service/information.service';

@Component({
  selector: 'app-see-information',
  templateUrl: './see-information.component.html',
  styleUrls: ['./see-information.component.css']
})
export class SeeInformationComponent implements OnInit {
  currentInformation: any[] = [];
  title!: string;
  services: any[] = [];
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private informationService: InformationService){}

  ngOnInit(): void {
    this.title = this.config.data.title;
    this.loadDataInfo();
  }

  loadDataInfo(){
    this.informationService.getInformationByName(this.title).subscribe({
      next: data => {
        this.services = data[0].services;
      },
      error: err => {

      }
    })
  }
}
