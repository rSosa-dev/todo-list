import { ActivatedRoute, RouterLink } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute) { }

  name = ''

  ngOnInit() {
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
}
