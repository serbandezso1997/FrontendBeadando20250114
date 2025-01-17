import { ConfigService } from './../config.service';
import { Component } from '@angular/core';
import { BaseService } from '../base.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
// import { FirebaseDataService } from './firebase-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  // albums:any=[]
  // szortirozottAdatok = new Subject()
  columns:any
  items:any=[]
  oszlopok=["name","category","description","price"]
  adattomb:any=[]
  HozzaAdasSzoveg="Hozzáadás"
  ModositasSzoveg="Módosítás"
  TorlesSzoveg="Tőrlés"
// A kétnyelvűséghez
  links:any
  dropClose=true
  lang="Magyar"

  gombAtallit = true

  cikkek:any
  newCikk:any={}

  constructor(
      public base:BaseService,
      private config:ConfigService,
      private http:HttpClient)
      {


        //adatok betöltése
    //     this.base.getAll().subscribe(
    //       (res)=>this.cikkek=res
    //     )


    // this.base.getAlbums().subscribe(
    //   (res)=> this.albums=res
    // )
    // this.config.getLinks().subscribe(
    //   (res:any)=>this.columns=res["columns"]
    // )


    // this.gombBeallitasa
    this.base.getAll().subscribe(
      (res)=>this.cikkek=res
    )

    this.config.getLinks().subscribe(
      (res:any)=>this.links=res["menuItems"]
    )

    this.config.getLinks().subscribe(
      (res:any)=>this.columns=res["columns"]
    )

  }

  updateData(data:any){
    this.base.updateData(data)
  }

 deleteData(data:any){
    this.base.deleteData(data)
  }

 newData(){
    this.base.newData(this.newCikk)
    this.newCikk={}
  }

  showDatas (){
    this.base.getAll().subscribe(
      (res)=>this.cikkek=res
    )
  }


  gombBeallitasa(lang:string){
    this.lang=lang=="hu"?"Magyar":"English"
    this.config.setLang(lang)
    this.dropClose=true

    if(lang == "hu"){
      this.gombAtallit = true;
    }
    else{
      this.gombAtallit = false;
    }

  }




  // adatokMegjelenitese(){
  //   return this.http.get(this.base.url).subscribe(
  //     (res)=>this.albums=res
  //   )
  // }

//   constructor(private firebaseService: FirebaseDataService) {}

//   ngOnInit(): void {
//     this.firebaseService.getData('items').subscribe((data => {
//         this.items = data;
//     });
// }

// addData(): void {
//   this.firebaseService.addData('items', { name: 'New Item', value: 42 });
// }



}
