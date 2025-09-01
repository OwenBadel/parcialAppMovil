import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Storage {
  constructor() { }

  get<T>(key: string ): T | null {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return null;
} 

set(key: string, value:string){
  localStorage.setItem(key  , value);

}
}