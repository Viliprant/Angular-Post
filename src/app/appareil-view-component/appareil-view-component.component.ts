import { Component, OnInit } from '@angular/core';
import { DeviceData } from 'src/models/DeviceData';

@Component({
  selector: 'app-appareil-view-component',
  templateUrl: './appareil-view-component.component.html',
  styleUrls: ['./appareil-view-component.component.scss']
})
export class AppareilViewComponentComponent implements OnInit {

  devicesList : DeviceData[] = [
    new DeviceData("PC", false),
    new DeviceData("Apple", true),
    new DeviceData("Samsung", true),
    new DeviceData("Huawei", false),
    new DeviceData("Mac", true),
    new DeviceData("HP", true),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
