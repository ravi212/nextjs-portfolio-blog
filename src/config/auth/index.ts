import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './config';
import { getUser } from '@/lib/user.action';
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        
        const result = await getUser(credentials);

        if(result?.success) {
          return result?.user;
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET
});