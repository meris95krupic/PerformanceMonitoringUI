import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {

  hosts: any[] = [
    {
      host: 'Host-Meris',
      os: 'Linux',
      processor: 'intel i-7',
      manufacturer: 'Asus'
    },
    {
      host: 'Host-Bojka',
      os: 'Windows',
      processor: 'intel i-3',
      manufacturer: 'Medion'
    },
    {
      host: 'Host-Vadin',
      os: 'Mac',
      processor: 'intel i-5',
      manufacturer: 'Acer'
    },
    {
      host: 'Host-Vadin',
      os: 'Free-BSD',
      processor: 'intel i-7',
      manufacturer: 'Intel'
    },
    {
      host: 'Host-Vadin',
      os: 'Ubuntu',
      processor: 'intel i-5',
      manufacturer: 'BSD Cooperations'
    },
    {
      host: 'Host-Vadin',
      os: 'MintOS',
      processor: 'intel i-5',
      manufacturer: 'Acer'
    },
    {
      host: 'Host-Vadin',
      os: 'RedHat',
      processor: 'intel i-5',
      manufacturer: 'Acer'
    },
    {
      host: 'Host-Vadin',
      os: 'KaliLinux',
      processor: 'intel i-9',
      manufacturer: 'The SAFEST One'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
