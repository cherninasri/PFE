import { ArrayType } from '@angular/compiler';

export interface insc {
  [ x:string ]:any;
  name?: string,
  email?: string,
  password?: string
}


export interface log {
  [ x:string ]:any;

  email?: string,
  password?: string
}
export class imgarr{
  name:string;
  type:string;
  size:number;
  constructor(name="",type="",size=0)
  {
    this.name=name;
    this.type=type;
    this.size=size;
  }

  }


export interface c {
  [ x:string ]:any;
  name?: string,
  email?: string,
  namepiece?: string,
  tel?: string,
   message?: string,
   image?: imgarr[],
}

export interface n {
  [ x:string ]:any;
  name?: string,
  email?: string,
  tel?: string,
  message?: string

}
export interface k {
  [ x:string ]:any;
  namepiece?: string,
  email?: string,
  tel?: string,


}
