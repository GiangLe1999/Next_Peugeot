import dbConnect from "@/lib/db";
import User from "@/model/User";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      async profile(profile) {
        await dbConnect();
        const oldUser = await User.findOne({ email: profile.email });
        const userProfile = {
          name: profile.name || profile.login,
          email: profile.email,
          role: "user",
        };
        if (!oldUser) {
          const newUser = new User({
            ...userProfile,
            provider: "google",
          });

          await newUser.save();
        } else {
          userProfile.role = oldUser.role;
        }
        return { id: profile.sub, ...userProfile };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as any).role;
      return token;
    },

    async session({ session }) {
      //Fetch về data cần thiết để update session
      await dbConnect();
      const user = await User.findOne({ email: session.user?.email });
      if (user)
        session.user = {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        } as any;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
