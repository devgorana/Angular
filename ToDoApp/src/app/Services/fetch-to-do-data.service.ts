import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchToDoDataService {

  url="/assets/Data/ToDoData.json";
  constructor(private http: HttpClient) { }

  getData(): any{
    return this.http.get<any[]>(this.url);
  }
}
