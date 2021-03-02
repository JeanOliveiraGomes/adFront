import { Component, OnInit } from '@angular/core';
import { ApiService } from './../apiProvider/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private credentials = {
    username: '',
    password: ''
  };

  constructor(private apiService: ApiService,  private router: Router) {}

  public logar() {
    this.apiService.post('api/auth', this.credentials).subscribe((data: any) => {
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('userDetails', JSON.stringify(data.userDetails));
    this.router.navigate(['pessoa']);
 }, error => {
    console.log(error);
    alert(error.error.message);
 });
}
  ngOnInit() {

  }

}
