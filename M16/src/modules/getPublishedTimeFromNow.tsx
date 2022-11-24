import moment from 'moment';
import 'moment/locale/ru';

export function getPublishedTimeFromNow(utc: number): string {
  moment.locale('ru');
  return moment(String(utc), 'X').fromNow();
}
