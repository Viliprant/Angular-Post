import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DeviceData } from '../models/DeviceData';
import { DeviceService } from '../services/device-service.service';

@Component({
  selector: 'app-one-appareil-view',
  templateUrl: './one-appareil-view.component.html',
  styleUrls: ['./one-appareil-view.component.scss']
})
export class OneAppareilViewComponent implements OnInit {

  nameDevice: string = '';
  deviceData: DeviceData = new DeviceData('', false);

  constructor(private route: ActivatedRoute, private _deviceService: DeviceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nameDevice = params.get('name') || '';
      this.deviceData = this._deviceService.getOneDevice(this.nameDevice);
    })
  }

}
