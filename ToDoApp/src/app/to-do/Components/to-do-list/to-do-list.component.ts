import { Component, OnInit } from '@angular/core';
import { ToDoList } from 'src/app/Model/toDoList.Model';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';
import { FetchToDoDataService } from 'src/app/Services/fetch-to-do-data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [FilterPipe]
})
export class ToDoListComponent implements OnInit {
  searchTerm:string = "";
  highlightAction: string = "None";
  p: number = 1;
  ToDoDetails: ToDoList[] = [];
  ToDoDetailsAll: ToDoList[] = [];
  constructor(private fetchToDoDataService: FetchToDoDataService, private filter: FilterPipe) { }
  
  ngOnInit(): void {
    this.fetchToDoDataService.getData().subscribe((data:any) => {
      this.ToDoDetails =data;
      this.ToDoDetailsAll = data;
      //console.log(data);
    })
  }

  applyFilter(startWith: string) {
    startWith = startWith.trim(); // Remove whitespace
    startWith = startWith.toLowerCase(); // Datasource defaults to lowercase matches
    
    this.ToDoDetails = this.filter.transform(this.ToDoDetailsAll, startWith);
    // this.ToDoDetails = this.ToDoDetails.filter((val: any) => val.todo.toLowerCase().startsWith(startWith) || val.id.toLowerCase().startsWith(startWith) || val.assignDate.toLowerCase().startsWith(startWith));
    
    this.p = 1;
  }

}
