import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let text = "Email: ";
    return text + value;
  }

}
