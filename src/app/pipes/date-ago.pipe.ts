import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  standalone: true
})
export class DateAgoPipe implements PipeTransform {

  transform(currentDateStringify: string): string {
    let message = "Justo ahora"
    if (currentDateStringify) {
      const currentTime = Date.now()
      const messageTime = parseInt(currentDateStringify)
      const differenceInSeconds = Math.floor((currentTime - messageTime) / 1000);
      if (differenceInSeconds < 29) return message;
      const intervals: { [key: string]: number } = {
        'año': 60 * 60 * 24 * 365,
        'mes': 60 * 60 * 24 * 30,
        'semana': 60 * 60 * 24 * 7,
        'dia': 60 * 60 * 24,
        'hora': 60 * 60,
        'minuto': 60,
        'segundo': 1
      };
      message = "Hace"
      for (const i in intervals) {
        const timesInInterval = Math.floor(differenceInSeconds / intervals[i]);
        if (timesInInterval > 0) {
          if (timesInInterval === 1) {
            return message += ' ' + timesInInterval + ' ' + i;
          } else {
            return message += ' ' + timesInInterval + ' ' + i + 's';
          }
        }
      }
    }
    return message;
  }

}
