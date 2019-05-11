import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Url } from 'url';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  url: any;
  information = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, 
  private socialSharing: SocialSharing) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe(result => {
      console.log('details: ', result);
      this.information = result;
    });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }


  async shareFacebook() {
    this.socialSharing.shareViaFacebook(null, null, this.url).then(() => {
    }).catch(e => {
      
    });
  }

}
