module.exports = {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: "postgresql://postgres:1@192.168.100.169:5432/fintech_db?schema=public",
  },
};