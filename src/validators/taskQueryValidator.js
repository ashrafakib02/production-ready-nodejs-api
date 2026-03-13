import { z } from "zod";

export const taskQuerySchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  status: z.enum(["pending", "in_progress", "completed"]).optional(),
  sortBy: z.enum(["createdAt", "updatedAt", "dueDate", "title"]).optional().default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
  search: z.string().min(1).optional()
});