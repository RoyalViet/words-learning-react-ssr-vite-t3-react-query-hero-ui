import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: `${__dirname}/schema.ts`,
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true, // Hiển thị chi tiết khi chạy migration
  strict: true, // Đảm bảo migration chính xác
});
