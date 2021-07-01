import { Component, OnInit } from '@angular/core';
import { ITransaction, SwiftService } from 'src/app/services/swift.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css'],
})
export class NewTransactionComponent implements OnInit {
  type: string = '';
  note: string = '';
  fromId: string = '';
  toID: string = '';
  amount: number = 0;
  constructor(private swiftService: SwiftService) {}

  errors: string[] = [];
  ngOnInit(): void {}

  createNewTransaction() {
    // console.log(this.type, this.note, this.amount, this.fromId, this.toID);
    this.swiftService.CreateTransaction(
      this.type,
      this.note,
      this.fromId,
      this.toID,
      this.amount
    );
  }
}
