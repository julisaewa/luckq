export class CalendarEvent {
  id: number;
  day: number;
  month: number;
  year: number;
  kind: string;
  text: string;

  constructor(id: number, day: number, month: number, year: number, kind: string, text: string) {
    this.id = id;
    this.day = day;
    this.month = month;
    this.year = year;
    this.kind = kind;
    this.text = text;
  }
}
