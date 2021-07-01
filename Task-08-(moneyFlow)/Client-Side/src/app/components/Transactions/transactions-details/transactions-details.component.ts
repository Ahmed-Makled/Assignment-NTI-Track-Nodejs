import { Component, Input, OnInit } from '@angular/core';
import {
  defualtTransaction,
  ITransaction,
} from 'src/app/services/swift.service';

@Component({
  selector: 'app-transactions-details',
  templateUrl: './transactions-details.component.html',
  styleUrls: ['./transactions-details.component.css'],
})
export class TransactionsDetailsComponent implements OnInit {
  @Input() transaction: ITransaction = defualtTransaction;
  constructor() {}

  cancel() {
    console.log('Removed...!!');
  }
  ngOnInit(): void {}
}
