import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      const { baseUrl } = req;
      if (baseUrl.indexOf("api") === 1) {
        next();
      } else {
        res.sendFile(join(__dirname, '..', 'frontend/build/index.html'));
      }
    }
  }
}
