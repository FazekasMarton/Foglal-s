import { Controller, Get, Post, Query, Redirect, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    let form = {
      name: "",
      email: "",
      date: "",
      audiance: 1,
      error: []
    }
    return form;
  }

  @Get("/siker")
  @Render('siker')
  getSiker(){}
  
  @Get("/order")
  @Render('index')
  validate(@Query() form, @Res() res) {
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
    if(form.error.length == 0){
      res.redirect("/siker")
    }else{
      return form;
    }
  }
}