import { Component } from '@angular/core';

import { CommitListService } from '../commit-list.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list-component.html',
  styleUrls: ['./commit-list-component.css']
})
export class CommitListComponent {
  commits = this.commitListService.getCommits();

  constructor(private commitListService: CommitListService) {}

}
