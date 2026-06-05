import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-logout.component',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})

export class LogoutComponent implements OnInit {
  constructor(private readonly hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit() {
    this.hardcodedAuthService.logout();
  }

}
