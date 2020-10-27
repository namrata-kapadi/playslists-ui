import { Component, Inject, OnInit } from '@angular/core';
import { PlayslistsService } from 'src/app/core/services/playslists.service';
import { PlayList } from '../../models/play-list/play-list.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playList: PlayList;

  constructor(@Inject(DOCUMENT) private document: Document, private playslistsService: PlayslistsService) { }

  ngOnInit(): void {

    this.playslistsService.getPlaylists().subscribe(
      data => {
        if (data) {
          this.playList = data;
        }
      }
    );

  }

  // another way to redirect
  openList(url: string): void {
    this.document.location.href = url;
  }

}
