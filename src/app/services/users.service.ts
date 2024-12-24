import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { postUserDTO } from '../models/api/postUser.model';
import { environment } from 'src/environments/environment';
import { GetOneUserResponse } from '../models/api/getOnseUser.model';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly _apiUrl = environment.api.url;
  private readonly _httpClient = inject(HttpClient)
  private readonly _storageService = inject(StorageService)

  readonly selectedUser$ = new BehaviorSubject<string | null>(this._selectedUserFromStorage);
  private readonly _suscription = this.selectedUser$.subscribe(res => this._selectedUserFromStorage = res);

  create(data: postUserDTO) {
    return this._httpClient.post(`${this._apiUrl}users`, data);
  }

  getOne(name: string) {
    return this._httpClient.get<GetOneUserResponse>(`${this._apiUrl}users/${name}`);
  }

  getAll() {
    return this._httpClient.get(`${this._apiUrl}users`);
  }

  exit(){
    this.selectedUser$.next(null)
  }

  get selectedUser() { return this._selectedUserFromStorage }
  private get _selectedUserFromStorage() { return this._storageService.getItemOnStorage('selectedUser', null) }
  private set _selectedUserFromStorage(data: string | null) { this._storageService.setItemOnStorage(data, 'selectedUser', null) }
}
