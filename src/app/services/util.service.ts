import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }
  public capitalize(word): string {
    return word.charAt(0).toUpperCase() + word.substr(1);
  }
}
