import { Injectable } from '@angular/core';
import { Member } from './member'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor() { }

  getCastMambers(): Observable<Member[]> {
    let castMemebers: Member[] = [
      {
        first_name: 'First_Name_1',
        last_name: 'Last_Name_1',
        bio: 'Bio_1',
        job_title: 'Job_Title_1',
        age: 11,
        avatar_url: 'assets/cast/avatar_mock.jpg',
      },
      {
        first_name: 'First_Name_2',
        last_name: 'Last_Name_2',
        bio: 'Bio_2',
        job_title: 'Job_Title_2',
        age: 22,
        avatar_url: 'assets/cast/avatar_mock.jpg',
      },
      {
        first_name: 'First_Name_3',
        last_name: 'Last_Name_3',
        bio: 'Bio_3',
        job_title: 'Job_Title_3',
        age: 33,
        avatar_url: 'assets/cast/avatar_mock.jpg',
      }
    ]
    return of(castMemebers);
  }
}
