import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    async doSomething() {
        setInterval(() => {
            console.log('doing something');
        }, 1000);
    }
}