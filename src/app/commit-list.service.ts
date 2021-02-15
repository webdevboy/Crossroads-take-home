import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { REPO_AUTHOR, REPO_NAME_SLUG } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class CommitListService {
  constructor(
    private http: HttpClient
  ) {}

  getCommits() {
    return this.http.get(`https://api.github.com/repos/${REPO_AUTHOR}/${REPO_NAME_SLUG}/commits`);
  }
}
