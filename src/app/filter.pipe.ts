import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: any, search: any): any {
    if(search === undefined) return courses;
    return courses.filter(function(course){
      return course.title.toLowerCase().includes(search.toLowerCase());
    })
  }

}
