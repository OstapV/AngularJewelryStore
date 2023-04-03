import { Component, OnInit } from '@angular/core';
import { Saler } from 'src/app/models/saler';
import { SalerService } from 'src/app/services/saler.service';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard-saler',
  templateUrl: './dashboard-saler.component.html',
  styleUrls: ['./dashboard-saler.component.css']
})
export class DashboardSalerComponent implements OnInit {

  salerDetails !: FormGroup;
  salerObj : Saler = new Saler();
  salerList : Saler[] = [];
  term : string;

  constructor(private formBuilder : FormBuilder,
              private salerService : SalerService) { }


  ngOnInit(): void {
    this.getAllSalers();

    this.salerDetails = this.formBuilder.group({
      id : [''],
      name : [''],
      isManager : [false]
    });
  }

  addSaler() {
    console.log(this.salerDetails);
    this.salerObj.id = this.salerDetails.value.id;
    this.salerObj.name = this.salerDetails.value.name;
    this.salerObj.isManager = this.salerDetails.value.isManager;
    console.log(this.salerObj);

    this.salerService.addSaler(this.salerObj).subscribe(res => {
      console.log(res);
      this.getAllSalers();
    }, err => {
      console.log(err);
    });
  }

  getAllSalers() {

    this.salerService.getAllSalers().subscribe(res => {
      this.salerList = res;
      console.log(res);
    }, err => {
      console.log("fetch error");
    });
  }

  editSaler(saler : Saler) {
    this.salerDetails.controls['id'].setValue(saler.id);
    this.salerDetails.controls['name'].setValue(saler.name);
    this.salerDetails.controls['isManager'].setValue(saler.isManager);
    console.log(this.salerDetails);
  }

  updateSaler() {
    console.log("update start");
    this.salerObj.id = this.salerDetails.value.id;
    this.salerObj.name = this.salerDetails.value.name;
    this.salerObj.isManager = this.salerDetails.value.isManager;
    console.log(this.salerObj);

    this.salerService.updateSaler(this.salerObj).subscribe(res => {
      console.log(res);
      this.getAllSalers();
    }, err => {
      console.log("update" + err);
    })
  }

  deleteSaler(saler : Saler) {
      this.salerService.deleteSaler(saler).subscribe(res => {
        console.log("deleted");
        this.getAllSalers();
      }, err => {
        console.log(err);
      })
  }
}
