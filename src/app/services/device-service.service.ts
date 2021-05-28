import { DeviceData } from '../models/DeviceData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth-service.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeviceService{

  devicesList : DeviceData[] = [
    new DeviceData("PC", false),
    new DeviceData("Apple", true),
    new DeviceData("Samsung", true),
    new DeviceData("Huawei", false),
    new DeviceData("Mac", true),
    new DeviceData("HP", true),
  ];

  constructor(private _authService: AuthService) {

  }

  getDevices(): Observable<DeviceData[]> {
    return of(this.devicesList);
  }

  getOneDevice(name : string): DeviceData {
    let device: DeviceData = new DeviceData('', false);
    if(this._authService.isSignedIn())
    {
      device = this.devicesList.filter((device: DeviceData) => device.Name == name)[0] || device;
    }
    return device
  }

  turnOn(name : string): void{
    if(this._authService.isSignedIn())
    {
      this.devicesList = this.devicesList.map((device) =>{
        if(device.Name == name && !device.Status){
          device.Status = !device.Status;
        }
        return device;
      })
    }
  }
  turnOff(name : string): void{
    if(this._authService.isSignedIn())
    {
      this.devicesList = this.devicesList.map((device) =>{
        if(device.Name == name && device.Status){
          device.Status = !device.Status;
        }
        return device;
      })
    }
  }

  turnOffAll(): void{
    if(this._authService.isSignedIn())
    {
      this.devicesList = this.devicesList.map((device) =>{
        if(device.Status){
          device.Status = !device.Status;
        }
        return device;
      })
    }
  }
  turnOnAll(): void{
    if(this._authService.isSignedIn())
    {
      this.devicesList = this.devicesList.map((device) =>{
        if(!device.Status){
          device.Status = !device.Status;
        }
        return device;
      })
    }
  }
}
