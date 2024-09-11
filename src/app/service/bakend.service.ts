import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class BackendService {

    baseUrl = environment.baseURL;


    httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

    constructor(
        private httpClient: HttpClient
    ){}

    signIn(request: any): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + '/api/v1/auth/login', request)
    }

    signUp(request: any): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + '/api/v1/client/create', request)
    }

    getDashboardCard(clientId: any): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl + '/api/v1/bank-account/dash/' + clientId)
    }

    getDataChart(bankAccountId: any): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl + '/api/v1/movement/chart/' + bankAccountId)
    }

    getTransfer(bankAccountId: any): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl + '/api/v1/transfer/find-all-by-bank-account/' + bankAccountId)
    }

}