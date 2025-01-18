import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, Subject } from 'rxjs';
import { ProductsListComponent } from './products-list/products-list.component';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // A tanár webapijának elérési útja
  url="https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app./"

  // Ebben az objektum típusú változóban tároljuk a downloadAll metódusban megszerzett adatokat
  adatSub=new Subject()



  constructor(private http:HttpClient) {
    //A termékek lap megnyitásakor lefut a downloadAll metódus
    this.downloadAll()
  }

  //visszatér az adatSub metódussal, ami a tanár webapijából kinyert adatokat tartalmazza
  getAll(){
    return this.adatSub
  }

  //lekéri a tanár webapijából az adatokat, majd megszűrve betölti az adatSub változóba
  private downloadAll(){
    this.http.get(this.url+".json").subscribe(
      (res:any)=>{
          let adattomb=[]
          for (const key in res) {
            adattomb.push({azon:key, ...res[key]})
            }
          this.adatSub.next(adattomb)
          }


    )
  }

  //új cikk felvétele
  newData(data:any){
    this.http.post(this.url+".json",data).forEach(
      ()=>this.downloadAll()
    )
  }

  //a már meglévő cikk módosítása
  updateData(data:any){
    this.http.put(this.url+data.azon+".json",data).forEach(
      ()=>this.downloadAll()
    )
  }

  //a törölni kívánt cikk eltávolítása
  deleteData(data:any){
    this.http.delete(this.url+data.azon+".json").forEach(
      ()=>this.downloadAll()
    )
  }
}
