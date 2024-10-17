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
    let result = this.appService.validate(form)
    if(result.error.length == 0){
      res.redirect("/siker")
    }else{
      return result;
    }
  }
}