import { Component, OnInit, ViewChild } from '@angular/core';
import { AcLayerComponent, AcNotification, ActionType } from 'angular-cesium';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MockDataProviderService } from 'src/app/mock-data-provider.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  @ViewChild(AcLayerComponent, {static: false}) layer: AcLayerComponent;

  circles$: Observable<AcNotification>;
  Cesium = Cesium;
  show = true;

  constructor(private mockDataProvider: MockDataProviderService) {
  }

  ngOnInit() {
    this.circles$ = this.mockDataProvider.getDataSteam$().pipe(map(entity => ({
        id: entity.id,
        actionType: ActionType.ADD_UPDATE,
        entity: entity,
      }
    )));
  }

}
