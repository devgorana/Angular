import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], startWith: string): any {
    
    if (!array || !startWith) {
        return array;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    debugger
    return array.filter(a => a.todo.toLowerCase().startsWith(startWith.toLowerCase()));
    // let temp: string[] = [];
    // debugger
    // //temp = array.filter(a => a.toLowerCase().startsWith(startWith.toLowerCase()));
    // var temp2 = array.filter((val: any) => val.todo.toLowerCase().startsWith(startWith) || val.id.toLowerCase().startsWith(startWith) || val.assignDate.toLowerCase().startsWith(startWith));
    // return temp2;
  }

}