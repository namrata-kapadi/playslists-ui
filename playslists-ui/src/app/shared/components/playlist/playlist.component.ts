import { Component, OnInit } from '@angular/core';
import { PlayslistsService } from 'src/app/core/services/playslists.service';
import { PlayList } from '../../models/play-list/play-list.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playList: PlayList;

  constructor(private playslistsService: PlayslistsService) { }

  ngOnInit(): void {

    this.playslistsService.getPlaylists().subscribe(
      data => {
        if (data) {
          this.playList = data;
        }
      }
    );

  }

}
