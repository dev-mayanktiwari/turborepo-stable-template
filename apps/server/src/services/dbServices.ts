import { prisma } from "@workspace/db";

export default {
  createUser: async (data: { name: string; email: string }) => {
    return await prisma.user.create({
      data,
    });
  },
};
