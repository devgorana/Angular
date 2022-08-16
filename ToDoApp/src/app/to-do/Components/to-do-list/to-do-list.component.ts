import { Component, OnInit } from '@angular/core';
import { ToDoList } from 'src/app/Model/toDoList.Model';
import { FetchToDoDataService } from 'src/app/Services/fetch-to-do-data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  searchTerm:string = "";
  highlightAction: string = "None";
  p: number = 1;
  ToDoDetails: ToDoList[] = [];
  constructor(private fetchToDoDataService: FetchToDoDataService) { }
  
  ngOnInit(): void {
    this.fetchToDoDataService.getData().subscribe((data:any) => {
      this.ToDoDetails =data;
      //console.log(data);
    })
  }



}
