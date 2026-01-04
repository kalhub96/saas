import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const formData = await req.formData();
    const email = formData.get("email");
    
    if (!email) {
        return NextResponse.json(
            { error: "Email is required" },
            { status: 400 }
        );
    }

    console.log(`New waitlist signup: ${email}`);

    return NextResponse.redirect(
        new URL("/success", req.url)
    );
}