import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from '../digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html',
  styleUrls: ['./update-bank.component.css']
})
export class UpdateBankComponent implements OnInit {

  constructor(private DigiPayrollServiceService:DigipayrollServiceService,) { }

  ngOnInit(): void {
  }

}
