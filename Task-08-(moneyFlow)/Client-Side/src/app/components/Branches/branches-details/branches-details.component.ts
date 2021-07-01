import { Component, Input, OnInit } from '@angular/core';
import {
  defualtBranch,
  IBranch,
  SwiftService,
} from 'src/app/services/swift.service';

@Component({
  selector: 'app-branches-details',
  templateUrl: './branches-details.component.html',
  styleUrls: ['./branches-details.component.css'],
})
export class BranchesDetailsComponent implements OnInit {
  @Input() branch: IBranch = defualtBranch;
  constructor(private swiftService: SwiftService) {}

  ngOnInit(): void {}
}
