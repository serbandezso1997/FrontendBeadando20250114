import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  links:any

  constructor(
        public base:BaseService,
        private config:ConfigService,
        private http:HttpClient)
        {


      //a base service getAll metódusát meghívva átadjuk a cikkeket




      this.config.getLinks().subscribe(
        (res:any)=>this.links=res["koszonto"]
      )



    }
}
