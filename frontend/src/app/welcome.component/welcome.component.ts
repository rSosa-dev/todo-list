import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  name = ''

  ngOnInit() {
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
}
