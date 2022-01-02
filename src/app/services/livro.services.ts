import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro.model';
import { BaseService } from './base.sevices';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LivroService extends BaseService{
    
    constructor(private http: HttpClient) { 
        super();
    }

    consultarTodos() : Observable<Livro[]>{
        let response = this.http
            .get(this.UrlService + 'livros', this.obterHeaderJson())
            .pipe(
                map(this.extrairDados)
            );
        return response;
    }

}