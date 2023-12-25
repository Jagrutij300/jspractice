import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchText:any): any {
    console.log("pipe calling..");
    
    // return null;
    let text = searchText?.toLowerCase();
    console.log(text);
    return data.filtre((ele:any)=>{
    return  JSON.stringify(ele).toLowerCase().includes(text)
    })
  }

}
