import { Component } from '@angular/core';

import { CommitListService } from '../commit-list.service';
import { REPO_NAME } from '../../app-config';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list-component.html',
  styleUrls: ['./commit-list-component.css']
})
export class CommitListComponent {
  commits = this.commitListService.getCommits();
  repo_name = REPO_NAME;

  constructor(private commitListService: CommitListService) {}

}
