import passport from 'passport';

import { PassportStrategy } from '../interfaces';
import { Application } from 'express';

export default class PassportConfig {
    /*
     FIX ME 😭
     The problem with this class is... if the caller forgets to call
     the addStrategies method...our program won't work. 

     Solution: You should refactor this class to take a constructor
     which receives strategies: PassportStrategy[]. Internally...call 
     the addStrategies method within the constructor and make addStragies
     private from the outside world. This way, we can GUARANTEE that our
     passport strategies are added when this class is created. ⭐️
    */
//    I think it's fixed...
    constructor(strategies?: PassportStrategy[]) {
        this.addStrategies(strategies ?? [])
    }

    private addStrategies(strategies: PassportStrategy[]): void {
        strategies.forEach((passportStrategy: PassportStrategy) => {
            passport.use(passportStrategy.name, passportStrategy.strategy);
        });
    }

    public initialize(app: Application): void {
        app.use(passport.initialize());
        app.use(passport.session());
    }
}
