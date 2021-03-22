import { Component } from '@angular/core';
import { AppService } from './app.service';

import { Person } from '../app/person'
import { Address } from '../app/address'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloAngular';

  person: Person = {
    name: '',
    age:  null
  }
  msg:   string
  msgs:  string[] = []
  zipcode: string
  address: string
  addresses: string[] = []

  constructor(private appService: AppService) { }

  addName(person: Person): void {
    this.appService.getMessage(person).subscribe((data) => {
      this.msg = data.content
      this.msgs.push(this.msg)
    })
  }

  getAddress(zipcode: string): void {
    this.appService.getAddress(zipcode).subscribe((data) => {
     this.address = data.results.map(r => r.address2)
     this.addresses.push(this.address)
    })

  }

}
