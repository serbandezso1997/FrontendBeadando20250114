import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://jsonplaceholder.typicode.com/albums/"
  // url="https://dolgozat2025-01-default-rtdb.europe-west1.firebasedatabase.app/"
  // url="https://dolgozat2025-01-default-rtdb.europe-west1.firebasedatabase.app"



  constructor(private http:HttpClient) { }

  // constructor(private db: AngularFireDatabase) { }

//   getData(path: string): Observable<any> {
//     return this.db.list(path).valueChanges();
// }

// addData(path: string, data: any): void {
//   this.db.list(path).push(data);
// }

  getAlbums(){
    return this.http.get(this.url)
    console.log(this.getAlbums)
  }
}
