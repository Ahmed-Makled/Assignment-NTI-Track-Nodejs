import { Component, OnInit } from '@angular/core';
import { IBranch, SwiftService } from 'src/app/services/swift.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private swiftService: SwiftService) {}

  ngOnInit(): void {
    this.swiftService.fetchBracnhes();
    this.swiftService.fetchTransaction();
  }
}
