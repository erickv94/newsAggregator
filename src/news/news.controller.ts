import { Controller, Get } from '@nestjs/common';

@Controller('news')
export class NewsController {
  @Get()
  searchArticles() {
    return 'Here';
  }
}
