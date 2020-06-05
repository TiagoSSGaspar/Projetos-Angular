import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Conversao, ConversaoResponse} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = 'http://data.fixer.io/api/latest?access_key=084ae18a88deba1b9d2dd33f06b7be51';

  constructor(private httpClient: HttpClient) {
  }

  converte(conversao: Conversao): Observable<any> {
    const params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;


    return this.httpClient.get(this.BASE_URL + params);
  }

  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];

  }

  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);

  }

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;

  }
}
