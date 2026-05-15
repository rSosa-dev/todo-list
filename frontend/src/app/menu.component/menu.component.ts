import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {

  constructor (public hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit(): void {
    
  }
}
