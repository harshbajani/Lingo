import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2dtTeJXMSzByHgr2qVzjgrPqCIm",
  "user_2dzI5Etv4Rb1Q6IADc7rh8tP1p1"
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};