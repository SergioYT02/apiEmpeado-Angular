import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    
    return items.filter(item => this.objectContainsValue(item, searchText));
  }

  private objectContainsValue(obj: any, searchText: string): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && this.valueContainsSearchText(obj[key], searchText)) {
        return true;
      }
    }
    return false;
  }

  private valueContainsSearchText(value: any, searchText: string): boolean {
    if (typeof value === 'string' || value instanceof String) {
      return value.toLowerCase().includes(searchText);
    }
    if (typeof value === 'object' && value !== null) {
      return this.objectContainsValue(value, searchText);
    }
    return false;
  }
}
