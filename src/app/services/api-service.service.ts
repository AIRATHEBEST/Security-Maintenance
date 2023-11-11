import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SecLookup } from '../SecAccessLookup';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/Users');
  }

  getSecLookup():Observable<any>{
    return this.http.get<any>('http://localhost:3000/SecLookupCodes')

  }

  getSecLookupid(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/SecLookupCodes/${id}`);
  }


  getAccessGroup():Observable<any>{
    return this.http.get<any>('http://localhost:3000/SecAccessGroups')

  }
  getAccessGroupById(id:  string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/SecAccessGroups/${id}`);
  }

  postdata(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/Users', data).pipe(
      map((res: any) => res)
    );
  }

  postsecLookup(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/SecLookupCodes', data).pipe(
      map((res: any) => res)
    );
  }
  getsecLookup(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/SecLookupCodes')
  }

  // Update user data based on ID
  updateUser(id: string, data: any): Observable<any> {
    const url = `http://localhost:3000/Users/${id}`;
    return this.http.put(url, data).pipe(
      map((res: any) => res)
    );
  }

  // updateAccesscode(id: string, data: any): Observable<any> {
  //   const url = `http://localhost:3000/Users/${id}`;
  //   return this.http.put(url, data).pipe(
  //     map((res: any) => res)
  //   );
  // }

  updateAccesscode( data: SecLookup): Observable<any> {
    const url = `http://localhost:3000/SecLookupCodes/${data.id}`;
    console.log(url)
    return this.http.put(url, data).pipe(
      map((res: any) => res)
    );
  }


  deleteAccesscode(id: string): Observable<any> {
    const url = `http://localhost:3000/SecLookupCodes/${id}`;
    return this.http.delete(url).pipe(
      map((res: any) => res)
    );
  }

  addUserGroups(data: any): Observable<any> {
    const url = `http://localhost:3000/SecUserAccessGroups`;
    return this.http.post(url, data).pipe(
      map((res: any) => res)
    );
  }


  updateAccessgroup(id: string, data: any): Observable<any> {
    const url = `http://localhost:3000/SecAccessGroups/${id}`;
    return this.http.put(url, data).pipe(
      map((res: any) => res)
    );
  }

  // Get user details based on ID
  getUserDetails(id: string): Observable<any> {
    const url = `http://localhost:3000/Users/${id}`;
    return this.http.get<any>(url);
  }
  checkUsernameExist(username: string): Observable<boolean> {
    const url = `http://localhost:3000/Users?username=${username}`;
    return this.http.get<any[]>(url).pipe(
      map(users => users.length > 0)
    );
  }
  checkAccessCodeExists(accessCode: string): Observable<boolean> {
    const url = `http://localhost:3000/SecLookupCodes?sAccessCode=${accessCode}`;
    return this.http.get<any[]>(url).pipe(
      map(secCodes => secCodes.length > 0)
    );
  }

  // deleteUser(userId: string): Observable<any> {
  //   const url = `http://localhost:3000/Users/${userId}`;
  //   return this.http.delete(url).pipe(
  //     map((res: any) => res)
  //   );
  // }

  getProducts(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/Products');
  }


}


