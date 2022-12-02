import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalityInterface } from 'src/util/locality';
import { AboutService } from './service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  localityID!: string;
  updateLocality!: LocalityInterface;
  locality = {} as LocalityInterface;
  searchLocalitys!: LocalityInterface[];
  customInterface: LocalityInterface = {
    id: '',
    enduser: '',
    site: '',
    floor: '',
    room: '',
  };

  constructor(
    private localityService: AboutService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllLocalitys();
  }

  // Todas localidades na lista
  getAllLocalitys() {
    this.localityService.getAllLocalitys().subscribe((localitys) => {
      //console.log(localitys);
      this.searchLocalitys = localitys;
    });
  }

  //Select no item da lista por ID
  onSelectedLocality(selectedID: any) {
    this.localityService.getLocalityById(selectedID).subscribe((locality) => {
      console.log(locality)
      this.customInterface.id = locality.id;
      this.customInterface.enduser = locality.enduser;
      this.customInterface.room = locality.room;
      this.customInterface.site = locality.site;
      this.customInterface.floor = locality.floor;
    })
  }

  //Limpar Campos
  clearLocality(customInterface: LocalityInterface) {
    this.customInterface = {
      enduser: '',
      site: '',
      floor: '',
      id: '',
      room: '',
    };

    this.locality = {
      enduser: '',
      site: '',
      floor: '',
      id: '',
      room: '',
    };
  }

  postLocality() {
    console.log(this.customInterface)
    if (this.customInterface.id || "" ) {
      alert("Atualizou")
    } else {
      alert("Salvou")
       this.localityService.postLocality(this.customInterface).subscribe((data) => {
       });
    }


  }
}
