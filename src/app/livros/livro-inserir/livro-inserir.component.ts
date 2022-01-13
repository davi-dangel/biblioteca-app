import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Livro } from 'src/app/models/livro.model';
import { LivroService } from 'src/app/services/livro.services';

@Component({
	selector: 'app-livro-inserir',
	templateUrl: './livro-inserir.component.html',
	styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent implements OnInit {

	cadastroLivro: FormGroup;
    livroParaCadastro: Livro
    titulo = new FormControl('', [ Validators.required])

	constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, 
                private livroService: LivroService) { }

	ngOnInit(): void {
        this.criarFormGroup()
	}

    criarFormGroup(): void{
        this.cadastroLivro = this.formBuilder.group({
            titulo: this.titulo,
            subtitulo: [''],
            autores: ['', Validators.required],
            anoPublicacao: ['', [Validators.required, Validators.min(29), Validators.max(new Date().getFullYear())]],
            numPaginas: ['', [Validators.required, Validators.min(3)]],
            editora: [''],
            edicao: [''],
            categorias: ['', Validators.required],
            leituraStatus: ['', Validators.required],
            dataLeituraFim: ['']
        })
    }

    inserirLivro(){
        if(this.cadastroLivro.dirty && this.cadastroLivro.valid){

            this.livroParaCadastro = Object.assign(this.cadastroLivro.value)
            this.livroParaCadastro.categorias = this.livroParaCadastro.categorias.toString().split(' ')
            this.livroParaCadastro.autores = this.livroParaCadastro.autores.toString().split(' ')

            this.livroService.inserir(JSON.stringify(this.livroParaCadastro)).subscribe(
                sucesso => {
                    alert("Salvo com sucesso")
                }, falha => {
                    console.log("ERRO: ", falha)
                    alert("Inserção falhou \n " + falha.e)
                }
            )
        }
    }
}
