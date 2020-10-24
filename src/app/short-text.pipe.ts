import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, length: number = 10): string {
    try {
      if (value == undefined || value == null) {
        return value
      }

      const biggestWord = 50;
      const ellipses = '...';
      if (typeof value === 'undefined') { return value; }
      if (value.length <= length) { return value; }
      if (length < ellipses.length) { return ''; }
      // .. truncate to about correct lenght
      let truncatedText = value.slice(0, length + biggestWord);

      // .. now nibble ends till correct length
      while (truncatedText.length > length - ellipses.length) {
        const lastSpace = truncatedText.lastIndexOf(' ');
        if (lastSpace === -1) {
          truncatedText = '';
          break;
        }
        truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/, '');
      }
      return truncatedText + ellipses;
    } catch (error) {

      return value
    }
  }
}
