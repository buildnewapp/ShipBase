-- Migration for users table updates
ALTER TABLE "users" ADD COLUMN "email_verified" boolean DEFAULT false NOT NULL;
ALTER TABLE "users" ADD COLUMN "name" text;
ALTER TABLE "users" ADD COLUMN "image" text;
