import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayList } from 'src/app/shared/models/play-list/play-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayslistsService {

  url: 'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json'

  constructor(private http: HttpClient) { }


  getPlaylists(): Observable<PlayList> {
    return this.http.get<PlayList>(this.url);
  }

}
