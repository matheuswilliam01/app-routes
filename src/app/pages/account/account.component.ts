import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public name: string | undefined;
  private route: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => { //consumir dados
        this.name = params["name"];
      },
      error: (error) => { //caso tenha um erro
        console.log(error);
      },
      complete: () => { //completar ciclo de consumo de dados
        console.log("Completo!");
      }
    });
  }

}
