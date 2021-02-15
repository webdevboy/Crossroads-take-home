import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommitListService {
  constructor(
    private http: HttpClient
  ) {}

  getCommits() {
    return this.http.get('https://api.github.com/repos/webdevboy/Crossroads-take-home/commits');
  }
}
