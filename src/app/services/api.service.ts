import { Injectable } from '@angular/core';
import { DogsBreeds } from '../models/dogs-breeds';
import { HttpClient } from "@angular/common/http";
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dogs: DogsBreeds = {status: "", message: [""]};
  private dogs_breeds_service_url = "https://dog.ceo/api/breeds/list";
  private dogs_breeds_img_url = "https://dog.ceo/api/breed/";


  constructor(private http: HttpClient) { }

  public getDogsBreeds(): Observable<DogsBreeds>{
    //return this.http.get<DogsBreeds>(this.dogs_breeds_service_url);
    return this.http.get<DogsBreeds>(this.dogs_breeds_service_url);
  }

  public getDogsBreedsImg(breed){
    return this.http.get(`${this.dogs_breeds_img_url}${breed}/images`);
  }

}
