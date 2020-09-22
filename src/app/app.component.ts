import { from, Observable } from 'rxjs';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AcNotification, ActionType } from 'angular-cesium';
import { map } from 'rxjs/operators';
import { MockDataProviderService } from './mock-data-provider.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cesium-app';
  entities$: Observable<AcNotification>;
  Cesium = Cesium;

  constructor(private dataProvider: MockDataProviderService) {}

  ngOnInit() {
    this.entities$ = this.dataProvider.getDataSteam$().pipe(map(entity => ({
      id: entity.id,
      actionType: ActionType.ADD_UPDATE,
      entity: entity,
    })));

  }

}
