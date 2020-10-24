import { AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() valuePrepareFunction: (arg: any) => any;
  @Input() row: any;
  @Input() value: any;
  @Input() columnSetting: any = {};
  @ViewChild('container', { read: ViewContainerRef }) private container: ViewContainerRef;
  @Output() customEvent = new EventEmitter();
  private componentRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  ngOnInit(): void {


  }
  ngOnChanges(): void {
    if (this.valuePrepareFunction) {
      this.value = this.valuePrepareFunction(this.value);
    }

  }
  ngAfterViewInit(): void {
    if (this.columnSetting.type !== 'custom') {
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.columnSetting.renderComponent);
    const viewContainerRef = this.container;
    this.componentRef = this.container;
    viewContainerRef.clear();
    const componentRef: any = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as any).value = this.value;
    (componentRef.instance as any).row = this.row;
    (componentRef.instance as any).customEvent.subscribe(val => this.customEvent.emit(val));
  }
  ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
