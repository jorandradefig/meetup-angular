import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-george',
  templateUrl: './george.component.html',
  styleUrls: ['./george.component.scss']
})
export class GeorgeComponent implements OnInit {

  films;

  constructor(private restangular: Restangular) { }

  ngOnInit() {
    this.restangular.allUrl('george', 'http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino').getList().toPromise().then((function(data) {
      this.films = data;
    }).bind(this));
  }

}
