import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './config';
import { getUser } from '@/lib/actions';
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        
        const res = await getUser(credentials);

        if(res?.user) {
          return res?.user;
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET
});