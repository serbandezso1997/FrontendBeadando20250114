import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';
// import { FirebaseDataService } from './firebase-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  albums:any=[]
  columns:any
  items:any=[]

  constructor(
      public base:BaseService,
      private config:ConfigService)
      {
    this.base.getAlbums().subscribe(
      (res)=> this.albums=res
    )
    this.config.getLinks().subscribe(
      (res:any)=>this.columns=res["columns"]
    )
  }

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
