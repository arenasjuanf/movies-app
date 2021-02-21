import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {actorsResponse, movieDetail, RespuestaMDB } from '../interfaces/interfaces';

const url = environment.url;
const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private ejecutarQuery<T>( query: string ){
    query = url + query;
    query+= `&api_key=${apiKey}`
    return this.http.get( query);

  }

  constructor(private http: HttpClient) { 

  }

  getFeature(){

    const today = new Date();
    const lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0 ).getDate();
    const mes = today.getMonth();
    let mesString;
    if( mes < 10 ){
      mesString = `0` + mes;
    } else{
      mesString = mes;
    }


    const start = `${today.getFullYear()}-${mesString}-01`;
    const end = `${today.getFullYear()}-${mesString}-${lastDay}`;


    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}`);
  }

  getPopular(page:number){
    return this.ejecutarQuery(`/discover/movie?&sort_by=popularity.desc&page=${page}`)
  }

  getMovieDetails(id: string){
    return this.ejecutarQuery<movieDetail>(`/movie/${id}?a=1`);
  }

  getActores(id: string){
    return this.ejecutarQuery<actorsResponse>(`/movie/${id}/credits?a=1`)
  }

}
