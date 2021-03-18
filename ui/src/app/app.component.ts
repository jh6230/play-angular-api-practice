import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloAngular';

  name: string = ''
  names: string[] = []

  addName(name: string): void {
    this.names.push(name)
  }



}
