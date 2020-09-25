import { from, Observable } from 'rxjs';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AcNotification, ActionType } from 'angular-cesium';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  entities = [
    {
      id: '0',
      position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 300000),
    },
    {
      id: '1',
      position: Cesium.Cartesian3.fromDegrees(-120.0, 40.0, 300000),
    }
  ];

  boxDimensions = new Cesium.Cartesian3(800000, 400000, 800000);
  boxes$: Observable<AcNotification>;
  Cesium = Cesium;

  constructor() {}
  ngOnInit() {
    console.log( Cesium.Cartesian3.fromDegrees(-120.0, 40.0, 300000))
    this.boxes$ = from(this.entities).pipe(map(entity => ({
          id: entity.id,
          actionType: ActionType.ADD_UPDATE,
          entity: entity,
        }
    )));
  }

}

asdadsasdasddsa