import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = 'MINHA NOTÍCIA';
  contentDescription: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic totam laudantium, iure quis vero ipsam eaque rem molestiae alias officiis! Explicabo alias dignissimos repudiandae temporibus recusandae quisquam, nostrum illum!';
  private id: string | null = "0";


  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null ) {
    const result = dataFake.filter(article => article.id === id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
