import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectSearch'
})
export class ProjectSearchPipe implements PipeTransform {

  transform(projects: any[], searchText: any): any[] {
    if (searchText === undefined) {
      return projects;
    } else {
      return projects.filter(project =>
        project.name.toLowerCase().includes(searchText.toLowerCase()) ||
        project.titleProject.toLowerCase().includes(searchText.toLowerCase()) ||
        project.skill.toLowerCase().includes(searchText.toLowerCase()) ||
        project.length.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // if (!filter) {
    //   return items;
    // }
    // if (!Array.isArray(items)) {
    //   return items;
    // }
    // if (filter && Array.isArray(items)) {
    //   const filterKeys = Object.keys(filter);
    //   if (defaultFilter) {
    //     return items.filter(item => {
    //       filterKeys.reduce((x, keyName) => {
    //         // tslint:disable-next-line:no-unused-expression
    //         return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === null;
    //       });
    //     });
    //   } else {
    //       return items.filter(item => {
    //         return filterKeys.some((keyName) => {
    //           return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === null;
    //       });
    //     });
    //   }
    // }
  }

}
