import { Component, OnInit } from '@angular/core';
import { LivroService } from '../services/livro.services';
import { Livro } from '../models/livro.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  livros: Livro[] = []

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.buscarLivros()
  }

  

  buscarLivros() {
    this.livroService.consultarTodos().subscribe(
      sucesso => {
        this.livros = sucesso
      },
      falha => {
        console.log("Error: ", falha)
      }
    )
  }

}
