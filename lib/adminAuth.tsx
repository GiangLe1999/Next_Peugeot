import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserType } from "@/types";

export const isAdmin = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user as UserType;
  return user && user.role === "admin";
};
