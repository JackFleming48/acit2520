import { Strategy as GitHubStrategy } from 'passport-github2';
import { PassportStrategy } from '../../interfaces/index';
import { Request } from 'express';
import { Profile } from 'passport-github2';

const githubStrategy: GitHubStrategy = new GitHubStrategy(
    {
        clientID: "Iv23lijfVAwrd96bxWVC",
        clientSecret: "385dbbfac7833aaa46e440e69cef05ffaa5e1a3b",
        callbackURL: "http://localhost:8000/auth/github/callback",
        passReqToCallback: true,
    },

    async (req: Request, accessToken: string, refreshToken: string, profile: Profile, done: (err: any, user?: any) => void) => {
        done(null, profile);
    }
)
const passportGitHubStrategy: PassportStrategy = {
    name: 'github',
    strategy: githubStrategy,
};

export default passportGitHubStrategy;
