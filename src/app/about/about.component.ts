import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Locality, LocalityInterface } from 'src/util/locality';
import { AboutService } from './service/about.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  //Select ID
  selectedLocality!: number;
  nome!: any;

  //Object
  locality = {} as LocalityInterface;

  //Lista
  localityList!: LocalityInterface[];

  //Form
  LocalityForm!: FormGroup;

  constructor(
    public FormBuilder: FormBuilder,
    private localityService: AboutService
  ) {}

  ngOnInit() {
    this.LocalityForm = this.FormBuilder.group({
      id: [''],
      enduser: [''],
      site: [''],
      floor: [''],
      room: [''],
    });

    //this.id =  this.route.snapshot.params['id'];
    // Lista de localidades
    this.getAllData();
  }

  addData() {
    this.localityService.postLocality(this.locality).subscribe((data) => {
      //console.log(data);
      window.location.reload();
    });
  }

  getAllData() {
    this.localityService.getAllLocalitys().subscribe((dataReceive) => {
      this.localityList = dataReceive;
      //console.log(this.localityList);
    });
  }

    animal = {
      enduser: 1 ,
      id: 2
    }

  getDataByID(): void {
    this.localityService.getLocalityById().subscribe((locality:any) => {

      console.log(locality)


      this.FormBuilder.group({
        enduser: [''],
        id: [''],
        site: [''],
        floor: [''],
        room: [''],
      });
    });
  }
}
