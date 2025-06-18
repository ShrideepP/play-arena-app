import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./database"; // your drizzle instance
import * as schema from "../db";
import { phoneNumber, admin, openAPI } from "better-auth/plugins";
import { sendOTP, signUpOnVerification } from "./sms-otp-service";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite",
    schema,
    usePlural: true,
  }),
  plugins: [phoneNumber({ sendOTP, signUpOnVerification }), admin(), openAPI()],
});
