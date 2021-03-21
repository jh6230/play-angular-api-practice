import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map  } from 'rxjs/operators'
import { Observable } from 'rxjs/index'

import { Person } from '../app/person'

@Injectable()
export class AppService  {

  constructor(private http: HttpClient) { }

  public getMessage(person: Person): Observable<any> {
    const name: string = person.name
    const age: number  = person.age
    return this.http.get(`api/getMessage/${ name }/${ age }`).pipe(
      map(response => response)
    )
  }

}
