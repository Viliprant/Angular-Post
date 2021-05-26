import { DeviceData } from '../models/DeviceData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devicesList : DeviceData[] = [
    new DeviceData("PC", false),
    new DeviceData("Apple", true),
    new DeviceData("Samsung", true),
    new DeviceData("Huawei", false),
    new DeviceData("Mac", true),
    new DeviceData("HP", true),
  ];

  constructor() {

  }

  getDevices(): Observable<DeviceData[]> {
    return of(this.devicesList);
  }
  turnOn(name : string): void{
    this.devicesList = this.devicesList.map((device) =>{
      if(device.Name == name && !device.Status){
        device.Status = !device.Status;
      }
      return device;
    })
  }
  turnOff(name : string): void{
    this.devicesList = this.devicesList.map((device) =>{
      if(device.Name == name && device.Status){
        device.Status = !device.Status;
      }
      return device;
    })
  }

  turnOffAll(): void{
    this.devicesList = this.devicesList.map((device) =>{
      if(device.Status){
        device.Status = !device.Status;
      }
      return device;
    })
  }
  turnOnAll(): void{
    this.devicesList = this.devicesList.map((device) =>{
      if(!device.Status){
        device.Status = !device.Status;
      }
      return device;
    })
  }

}
