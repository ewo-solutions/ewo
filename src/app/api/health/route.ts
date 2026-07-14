import { NextResponse } from "next/server";

/** Temporary diagnostic for the email setup. Returns booleans and Vercel's
    own non-secret build metadata only — never the key value. Safe to remove
    once the contact form is confirmed working. Visit /api/health. */
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    resendKeyPresent: Boolean(process.env.RESEND_API_KEY),
    enquiryToSet: Boolean(process.env.ENQUIRY_TO),
    enquiryFromSet: Boolean(process.env.ENQUIRY_FROM),
    vercelEnv: process.env.VERCEL_ENV ?? "(not on Vercel)",
    gitBranch: process.env.VERCEL_GIT_COMMIT_REF ?? "(unknown)",
    commit: (process.env.VERCEL_GIT_COMMIT_SHA ?? "").slice(0, 7) || "(unknown)",
  });
}
