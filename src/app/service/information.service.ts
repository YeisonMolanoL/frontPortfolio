import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  getInformationByName(name: string){
      return this.http.get<any>('assets/data/listDataIntegrations.json').pipe(
        map(data => data.filter((item: any) => item.name === name))
      );
  }
}
