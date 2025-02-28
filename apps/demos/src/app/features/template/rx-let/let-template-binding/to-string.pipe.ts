import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString',
  standalone: false,
})
export class ToStringPipe implements PipeTransform {
  transform(value: number): string {
    return value + '';
  }
}
