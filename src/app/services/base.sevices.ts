import { HttpHeaders } from "@angular/common/http"

export abstract class BaseService {

    protected UrlService: string = "http://localhost:6500/api/"

    protected obterHeaderJson(){
        return {
            headers: new HttpHeaders({
                'content-type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': 'http://localhost:4200' ,
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            })
        };
    }

    protected extrairDados(response: any){
        return response
    }
}