import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  validate(form){
    form.error = []
    let now = new Date()
    let date = new Date(form.date)
    console.log(now, date)
    if(form.name.length <= 0){
      form.error.push("A név mező nem lehet üres!")
    }
    if(!/[a-zA-Z1-9]+@+[a-zA-Z1-9]/.test(form.email)){
      form.error.push("Nem valid az email cím!")
    }
    if(now > date){
      form.error.push("A foglalás időpontja nem lehet a multban!")
    }
    if(!(form.audiance > 0 && form.audiance < 11)){
      form.error.push("A foglalás 1-10 személyre szólhat!")
    }
    return form
  }
}
