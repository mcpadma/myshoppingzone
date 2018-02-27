import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { userDetails } from './userdetail';

@Injectable()
export class UserdetailService {

private getUrl = "/api/datas";
private postUrl = "/api/data";

  constructor(private http: Http) { }


getUserDetails() {
    return this.http.get(this.getUrl)
      .map((response: Response) => response.json());
  }

addUserDetails(userdetails: userDetails){
  let headers = new Headers({'content-Type':'application/json'});
  let options = new RequestOptions({headers:headers});
  return this.http.post(this.postUrl, JSON.stringify(userdetails), options)
  .map((response: Response) => response.json());
}

}
