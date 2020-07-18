import { Component, OnInit } from '@angular/core';
import { DogsBreeds } from '../../models/dogs-breeds';
import { NewDogs } from '../../models/new-dogs';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-dogs',
  templateUrl: './add-dogs.component.html',
  styleUrls: ['./add-dogs.component.css']
})
export class AddDogsComponent implements OnInit {

  public dogs_breeds: DogsBreeds = {status: "", message: [""]};
  public seleccionado: string;
  public dog: NewDogs;

  constructor(
    private apiservice: ApiService,
    private router: Router,
    public snackbar: MatSnackBar) {
    this.dog = new NewDogs( 0, '', '', '');
  }

  ngOnInit(): void {
    this.apiservice.getDogsBreeds().subscribe(dogs_breeds => (this.dogs_breeds = dogs_breeds));
    console.log("ngOnInit, FIN");
  }

  onSubmit(){
    console.log(this.dog);
    this.saveDogByBreed(this.dog);
    this.addDogQty(this.dog.breed);
    this.openSnackBar("Información guardada!", "OK");
    this.router.navigate(['home']);
  }

  public saveDogByBreed(dog){
    let newDog;
    let count_dogs;
    if(localStorage.getItem("dogs-" + dog.breed) === null){
      newDog = [];
      dog.id = 1;
      newDog.push(dog);
      localStorage.setItem("dogs-" + dog.breed, JSON.stringify(newDog));
    }else{
      newDog = JSON.parse(localStorage.getItem("dogs-" + dog.breed));
      count_dogs = newDog.length;
      dog.id = count_dogs + 1;
      newDog.push(dog);
      localStorage.setItem("dogs-" + dog.breed, JSON.stringify(newDog));
    }
  }

  public addDogQty(breed){
    if(breed){
      let get_breed = localStorage.getItem("qty-" + breed);

      if(!get_breed){
        localStorage.setItem("qty-" + breed, "0");
        let qty_breed: number = +get_breed;
        let set_qty = qty_breed + 1;
        localStorage.setItem("qty-" + breed, set_qty.toString());
      }else{
        let qty_breed: number = +get_breed;
        let set_qty = qty_breed + 1;
        localStorage.setItem("qty-" + breed, set_qty.toString());
      }
    }
  }

  public openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
       duration: 2000,
    });
 }

}
