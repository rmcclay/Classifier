import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders({
  })
};

@Injectable({
  providedIn: 'root'
})
export class DocReviewService {

  constructor(private http: HttpClient) { }

  classifyDoc(form: FormData): Observable<string> {
    return this.http.post<string>('http://localhost:4600/uploadFile', form);
  }
}
