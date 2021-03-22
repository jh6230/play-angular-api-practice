import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { map  } from 'rxjs/operators'
import { Observable, zip } from 'rxjs/index'

import { Person } from '../app/person'
import { Address} from '../app/address'

@Injectable()
export class AppService  {

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type','application/json'),
  };

  constructor(private http: HttpClient) { }

  public getMessage(person: Person): Observable<any> {
    const name: string = person.name
    const age: number  = person.age
    return this.http.get<any>(`api/getMessage/${ name }/${ age }`).pipe(
      map(response => response)
    )
  }

  public getAddress(zipcode: string): Observable<any> {
    return this.http.get<any>(`api/getAddress/${zipcode }`).pipe(
      map(response => response)
    )
  }

}
