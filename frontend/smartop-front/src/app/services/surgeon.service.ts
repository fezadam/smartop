import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Surgeon } from '../models/surgeon.model';
import { Observable } from 'rxjs';

@Injectable()
export class SurgeonService {
  private serviceUrl = 'http://localhost:8080/api/surgeons';

  constructor(private http: HttpClient) {}

  getInformations(): Observable<Surgeon[]> {
    return this.http.get<Surgeon[]>(this.serviceUrl);
  }
}
