import { Component, OnInit } from '@angular/core';
import { CastService } from './cast.service';
import { Member } from './member';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  castMembers: Member[];

  constructor(private castService: CastService) { }

  ngOnInit(): void {
    this.castService.getCastMambers().subscribe(data => {
      this.castMembers = data;
    }
    );
  }
}
