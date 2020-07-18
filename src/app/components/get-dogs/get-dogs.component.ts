import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListDogs } from '../../models/list-dogs';
import { MatDialog } from '@angular/material/dialog';
import { NewDogs } from '../../models/new-dogs';
import { ApiService } from '../../services/api.service';
import { DogsBreeds } from '../../models/dogs-breeds';


@Component({
  selector: 'app-get-dogs',
  templateUrl: './get-dogs.component.html',
  styleUrls: ['./get-dogs.component.css']
})

export class GetDogsComponent implements OnInit {

  public breed_params: { breed: string};
  public displayedColumns: string[] = ['id_dog', 'dog_name', 'dog_dob', 'edad', 'acciones'];
  public listDogs;
  public number_order: number;


  constructor(
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog) { };


  ngOnInit(): void {
    this.breed_params = {
      breed: this.activeRoute.snapshot.params.breed
    };
    this.listDogs = this.getDogsByBreed(this.breed_params.breed);
    console.log("data: " + this.listDogs);
    this.number_order += 1;

  }

  getDogsByBreed(breed){
    let listDogs = [];
    if(breed){
      listDogs = JSON.parse(localStorage.getItem("dogs-" + breed));
    }
    return listDogs;
  }

  openDeleteDialog() {
    this.dialog.open(DeleteDogsDialog);
  }

  openEditDialog() {
    this.dialog.open(EditDogsDialog);
  }


}

@Component({
  selector: 'delete-dogs-dialog',
  templateUrl: 'delete-dogs-dialog.html',
  styleUrls: ['./get-dogs.component.css']
})

export class DeleteDogsDialog {
  public test = "tutututu";
  dog_item: NewDogs[];

  constructor(
    public dialog: MatDialog
  ){
    this.dog_item = [];
  }

  public deleteDog(){
    /*
    for(let i = 0; this.dog_item.length; i++){
      if(dog == this.dog_item[i]){
        this.dog_item.slice(i, 1);
      }
    }*/
    console.log("delete dogs");
  }

  public closeDialog(){
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'edit-dogs-dialog',
  templateUrl: 'edit-dogs-dialog.html',
  styleUrls: ['./get-dogs.component.css']
})

export class EditDogsDialog implements OnInit{

  public dogs_breeds: DogsBreeds = {status: "", message: [""]};

  constructor(
    public dialog: MatDialog,
    private apiservice: ApiService
  ){
  }

  ngOnInit(){
    this.apiservice.getDogsBreeds().subscribe(dogs_breeds => (this.dogs_breeds = dogs_breeds));
    console.log(this.dogs_breeds.message);
  }

  public closeEditDialog(){
    this.dialog.closeAll();
  }
}
