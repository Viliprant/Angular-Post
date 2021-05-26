import { Component, OnInit, Input } from '@angular/core';

// Models
import { DeviceData } from '../../models/DeviceData';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() deviceData?: DeviceData;

  constructor() { }

  ngOnInit(): void {
    
  }

}
