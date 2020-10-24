import { ShortTextPipe } from './short-text.pipe';
import { BadgeComponent } from './badge/badge.component';
import { Component } from '@angular/core';
import { tableData } from './table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShortTextPipe]
})
export class AppComponent {
  title = 'angular-smart-table';
  tableData = tableData.results;
  public tableMoreOption = {
    mainIcon: 'fa-bars',
    option: [
      {
        icon: 'fa-eye',
        class: '',
        label: 'Browse Risk',
        event: 'browseRisk'
      },
      {
        icon: 'fa-eye',
        class: '',
        label: 'Browse Control',
        event: 'browseControl'
      },
      {
        icon: 'fa-edit',
        class: '',
        label: 'Edit',
        event: 'edit'
      },
      {
        icon: 'fa-trash',
        class: 'danger',
        label: 'Delete',
        event: 'delete'
      }
    ]
  };
  settings = {
    column: {
      '': {
        title: '',
        class: 'pointer',
        icon: 'fa fa-eye',
        type: 'custom',
        renderComponent: BadgeComponent,
        valuePrepareFunction: (value) => {
          return this.tableMoreOption;
        }
      },
      risk_id: {
        title: 'Risk Id',
        class: 'pointer',
        type: 'text'
      },
      risk_name: {
        title: 'Risk Name',
        class: 'pointer',
        type: 'text',
        valuePrepareFunction: (value) => {
          return this.short.transform(value);
        },
        clickable: true
      },
      risk_category_value: {
        title: 'Risk Category',
        class: 'pointer',
        type: 'html'
      },
      risk_identifier_value: {
        title: 'Risk Identifier',
        class: 'pointer',
        type: 'html'
      },
      residual_likelihood_value: {
        title: 'Risk Likelihood',
        class: 'pointer',
        type: 'html'
      },
      residual_impact_value: {
        title: 'Risk Rating',
        class: 'pointer',
        type: 'html'
      },
      risk_owner_value: {
        title: 'Risk Owner',
        class: 'pointer',
        type: 'html'
      },
      // date: {
      //   title: 'Date of Birth',
      //   class: 'pointer',
      //   type: 'custom',
      //   renderComponent: BadgeComponent
      // }
    }
  }
  constructor(private short: ShortTextPipe) {

  }
  customEvent(event) {
    console.log(event)
  }
  itemClick(event) {
    console.log(event)

   }
}
