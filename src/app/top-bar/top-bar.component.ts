import { Component, OnInit } from '@angular/core';
import { ApplicationConfigService } from '../application-config.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private applicationConfigService: ApplicationConfigService) { }

  ngOnInit() {
  }

}
