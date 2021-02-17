import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mykeyvalue'
})

// the native pipe "keyvalue" don't work for me 
// and I decaded to implment custom pipi

export class MyKeyValuePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const arr: any = [];
    Object.keys(value).forEach(key => {
      let obj: any = {}
      obj.key = key;
      obj = {...obj, value : {...Object.assign({}, value[key])} };
      arr.push(obj)
    })
    return arr;
  }
}

