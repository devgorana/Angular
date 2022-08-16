import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], startWith: string): any {
    
    if (!array || !startWith) {
        return array;
    }
    //return array.filter(a => a.todo.toLowerCase().startsWith(startWith.toLowerCase()));
    let temp: any[] = [];
    temp = array.filter((val: any) => val.todo.toLowerCase().startsWith(startWith) || val.id.toLowerCase().startsWith(startWith) || val.assignDate.toLowerCase().startsWith(startWith));
    return temp;
  }

}