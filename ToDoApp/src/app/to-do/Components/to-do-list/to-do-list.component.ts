import { Component, OnInit } from '@angular/core';
import { FetchToDoDataService } from 'src/app/Services/fetch-to-do-data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  //condition: boolean = true;
  searchTerm:string = "";
  highlightAction: string = "None";
  className = "rowHighlight"
  color = 'yellow';
  ToDoDetails: any;
  constructor(private fetchToDoDataService: FetchToDoDataService) { }
  
  ngOnInit(): void {
    this.fetchToDoDataService.getData().subscribe((data:any) => {
      this.ToDoDetails =data;
      //console.log(data);
    })
  }



}
