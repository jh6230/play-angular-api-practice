import { Component } from '@angular/core';
import { AppService } from './app.service';

import { Person } from '../app/person'
import { Response } from '../app/address'

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
  msg:     string
  msgs:    string[] = []
  zipcode: string
  address: string[]

  constructor(private appService: AppService) { }

  addName(person: Person): void {
    this.appService.getMessage(person).subscribe((data: any) => {
      this.msg = data.content
      this.msgs.push(this.msg)
    })
  }

  getAddress(zipcode: string): void {
    this.appService.getAddress(zipcode).subscribe(
      response => this.address = response.results.map(
        r => r.address1 + r.address2 + r.address3),
        err => alert(err)
    )}
}
