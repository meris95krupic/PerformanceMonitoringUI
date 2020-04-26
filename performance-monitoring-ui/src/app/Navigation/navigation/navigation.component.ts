import { Component, OnInit } from '@angular/core';
import { APIService } from '../../Services/api.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  subscription: Subscription;
  hosts: any[] = [];
  charts: any[] = [
    {
      chart: "memory",
      checked: true
    },
    {
      chart: "cpu",
      checked: true
    },
    {
      chart: "temperature",
      checked: true
    },
    {
      chart: "network",
      checked: true
    },
    {
      chart: "disks",
      checked: true
    }
  ];
  autoUpdate: any[] = [
    {
      txt: '1 min',
      minutes: 1,
      checked: true
    },
    {
      txt: '5 min',
      minutes: 5,
      checked: false
    },
    {
      txt: '15 min',
      minutes: 15,
      checked: false
    },
    {
      txt: '30 min',
      minutes: 30,
      checked: false
    },
    {
      txt: '1 h',
      minutes: 60,
      checked: false
    }
  ];
  timeRange: any[] = [
    {
      txt: '5 minutes',
      minutes: 5,
      checked: false
    },
    {
      txt: '15 minutes',
      minutes: 15,
      checked: false
    },
    {
      txt: '30 minutes',
      minutes: 30,
      checked: false
    },
    {
      txt: '1 hour',
      minutes: 60,
      checked: false
    },
    {
      txt: '3 hour',
      minutes: 60,
      checked: false
    },
    {
      txt: '12 hour',
      minutes: 60,
      checked: false
    },
    {
      txt: '1 day',
      minutes: 60,
      checked: false
    }
  ];


  // TODO: PATCH DATA
  // filterObject: any = {
  //   "m": 60,
  //   "hostIds": [
  //     1,
  //     2,
  //     3
  //   ],
  //   "resourceTypes": [
  //     "cpu",
  //     "memory",
  //     "temperature",
  //     "disks",
  //     "network"
  //   ]
  // }

  constructor(public api: APIService) {
    
  }

  ngOnInit() {
    this.getPerformanceData();
    const source = interval(3000);//TODO: use autoUpade
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => console.log('AUTO_UPDATE !!!'));
  }

  onChangeHost(i, isChecked: boolean) {
    this.hosts[i].checked = isChecked;
    console.log('onChangeHost: ', this.hosts);
  }

  onChangeChart(i, isChecked: boolean) {
    this.charts[i].checked = isChecked;
    console.log('onChangeChart: ', this.charts);
  }
  
  onChangeAutoUpdate(i, isChecked: boolean) {
    this.autoUpdate.forEach((x) => {
      if(x.checked) x.checked = false;
    });
    this.autoUpdate[i].checked = isChecked;
    console.log('onChangeAutoUpdate: ', this.autoUpdate);
  }
  
  onChangeTimeRange(i, isChecked: boolean) {
    this.timeRange.forEach((x) => {
      if(x.checked) x.checked = false;
    });
    this.timeRange[i].checked = isChecked;
    console.log('onChangeTimeRange: ', this.timeRange);
  }

  getPerformanceData(){
    this.api.getPerformanceData().subscribe((data:any) => {
      data.map(x => {
        this.hosts.push({
          name: x.hostName,
          checked: true
        })
      });
    })
  }

}
