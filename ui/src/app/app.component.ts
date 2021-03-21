import { Component } from '@angular/core';
import { AppService } from './app.service';

import { Person } from '../app/person'

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

  constructor(private appService: AppService) { }

  public addName(person: Person): void {
    this.appService.getMessage(person).subscribe((data: any) => {
      this.msg = data.content
      this.msgs.push(this.msg)
    })
  }

}
