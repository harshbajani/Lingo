import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2dtTeJXMSzByHgr2qVzjgrPqCIm",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};