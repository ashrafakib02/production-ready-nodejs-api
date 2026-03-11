import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { databaseUrl } from "./env.js";

const adapter = new PrismaPg({
  connectionString: databaseUrl
});

const prisma = new PrismaClient({ adapter });

export default prisma;