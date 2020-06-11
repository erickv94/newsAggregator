import { NewsApiNew } from '../interfaces/NewsApiNew';

export function NewsApiParse(article: NewsApiNew) {
  const parsedArticle = {
    title: article.title,
    author: article.author,
    url: article.url,
    publishedAt: new Date(article.publishedAt),
  };
  return parsedArticle;
}
