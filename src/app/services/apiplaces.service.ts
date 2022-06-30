import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiplacesService {


  constructor(public http: HttpClient) { }

  

  dir:string="assets/files/places.json"

  getTodos(){
    return this.http.get(this.dir)
    .pipe(
      map((res: any)=>{
        return res.todos;
      }
      )
    )
  }

 
  getAllbyId(id:string): Observable <any>{
    return this.http.get(this.dir)
    .pipe(
      map((res: any)=>{
        return res.todos;
      }
      )
    )
  }

  


    

}
