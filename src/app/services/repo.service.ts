import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RepoService {
  constructor(private http: HttpClient) {}
  async getRepo(repoName: any) {
    const promise = this.http.get(
      `${environment.githubapiurl}/users/repos/${repoName}`
    );
    return await lastValueFrom(promise)
      .then((result) => result)
      .catch((error) => console.log(error));
  }
}
