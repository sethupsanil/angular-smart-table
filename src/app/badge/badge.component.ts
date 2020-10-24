import { EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit, OnChanges {
  @Input() row: any;
  @Input() value: any;
  @Output() customEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  itemClick(ev): void {
    const data = {
      value: ev.target.value,
      data: this.row
    }
    this.customEvent.emit(data);
  }
}
