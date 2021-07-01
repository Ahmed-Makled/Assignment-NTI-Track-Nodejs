import { Component, OnInit } from '@angular/core';
import { ITransaction, SwiftService } from 'src/app/services/swift.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  constructor(private swiftService: SwiftService) {}

  get transactions(): ITransaction[] {
    return this.swiftService.getTransactions;
  }

  ngOnInit(): void {}
}
