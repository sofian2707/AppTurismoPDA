import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { coment } from '../../environments/coments';


@Injectable({
  providedIn: 'root'
})
export class ApiplacesService {


  constructor(public http: HttpClient) { }

  url:string='https://62a93e72ec36bf40bdb4b2e4.mockapi.io/coments'
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

  
  public getComentarios(): Observable <coment[]>{
    return this.http.get<coment[]>(this.url);
  
    }
    
  public createComentario(comentario: coment):Observable <coment> {
    return this.http.post<coment>(this.url, comentario);
  
    }


    public deleteComent(id: string ) {
      return this.http.delete(`${this.url}/${id}`);
       }
}


