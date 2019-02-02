import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList: string[] = ["keyur","denish"];
  errorMsg: string = '';
  fname: string = 'Hiten';

  constructor() { }

  ngOnInit() {
    this.friendsList.push("vinit");
  }

  addNewFriend():void{
    let ifExist = this.friendsList.indexOf(this.fname);
    if(ifExist !== -1){
      this.errorMsg = name+ ' Already Exist';
    }else{
      this.errorMsg = '';
      this.friendsList.push(this.fname);
    }        
  }

  delete(idx):void{
    let deletedName = this.friendsList[idx];
    this.friendsList.splice(idx,1);
    this.errorMsg = deletedName +" is deleted.";
  }

}
