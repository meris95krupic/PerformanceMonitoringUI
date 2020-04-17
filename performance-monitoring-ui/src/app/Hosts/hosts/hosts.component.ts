import { Component, OnInit } from '@angular/core';
import { APIService } from '../../Services/api.service';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {

  constructor(public api: APIService) {
    
  }

  ngOnInit(): void {
    
  }

}
