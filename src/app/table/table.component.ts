import {
  AfterViewInit, Component, EventEmitter,
  Input, OnChanges, OnInit, Output
} from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() gridData = [];

  @Input() settings = {
    column: {}
  };
  @Output() customEvent = new EventEmitter<{ data: Object, value: string }>();
  @Output() itemClick = new EventEmitter<{ key: string, item: string, rowData: Object }>();
  /** Table variable */
  public tableHeader: { key: string, value: any }[] = [];

  /** Table variable end  */
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(): void {
    this.setTableHeader();

  }
  ngAfterViewInit(): void {
  }

  setTableHeader(): void {
    const column = this.settings.column;
    const key = Object.keys(column);
    const value: any = Object.values(column);

    for (let i = 0; i < key.length; i++) {

      this.tableHeader.push(
        { key: key[i], value: value[i] }
      );
    }
  }
  OnCustomEvent(ev): void {
    this.customEvent.emit(ev);
  }
  itemClicked(headValue, item, rowData): void {
    if (headValue.value.clickable) {
      const data = {
        key: headValue.key,
        item,
        rowData
      };
      this.itemClick.emit(data);
    }

  }
}

export interface TableConfiguration {
  column: any;
}


