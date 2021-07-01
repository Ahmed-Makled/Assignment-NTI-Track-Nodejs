import { Component, OnInit } from '@angular/core';
import { SwiftService } from 'src/app/services/swift.service';

@Component({
  selector: 'app-new-branch',
  templateUrl: './new-branch.component.html',
  styleUrls: ['./new-branch.component.css'],
})
export class NewBranchComponent implements OnInit {
  name: string = '';
  balance: number = 0;
  constructor(private swiftService: SwiftService) {}

  errors: string[] = [];
  ngOnInit(): void {}

  createNewBranch() {
    console.log(this.name, this.balance);
    this.swiftService.CreateBranch(this.name, this.balance);
  }
}
