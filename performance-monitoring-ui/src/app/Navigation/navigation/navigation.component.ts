import { Component, OnInit } from '@angular/core';
import { APIService } from '../../Services/api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  hosts: any[] = [{
    name: 'data.hostName',
    checked: true
  }];

  constructor(public api: APIService) {
    
    console.log('NavigationComponent.constructor');
  }

  ngOnInit() {
    console.log('NavigationComponent.ngOnInit');
    this.test();
  }

  onChange(i, isChecked: boolean) {
    this.hosts[i].checked = isChecked;
    console.log(this.hosts);
  }

  test(){
    console.log(this.api.performanceData);
    this.api.performanceData.map(data => {
      
      
      this.hosts.push({
        name: data.hostName,
        checked: true
      })
    })
  }

}
