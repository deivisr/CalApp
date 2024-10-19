import prisma from "@/app/lib/db";
import { requireAuth } from "@/app/lib/hooks";
import { nylas, nylasConfig } from "@/app/lib/nylas";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest){
    const session = await requireAuth();
    const url = new URL(req.url);
    const code = url.searchParams.get('code');
    if(!code){
        return Response.json({error: "No authorization code provided"}, {status: 400});
    }
    try {
        const response = await nylas.auth.exchangeCodeForToken({
            clientSecret: nylasConfig.apiKey,
            clientId: nylasConfig.clientId,
            redirectUri: nylasConfig.redirectUri,
            code,
        });
        const {grantId, email} = response;
        await prisma.user.update({
            where: {
                id: session.user?.id
            },
            data: {
            grantId: grantId,
                grantEmail: email,
            },
        });
    } catch (error) {
        return Response.json({error: "Failed to exchange code for token"}, {status: 500});
    }
    return redirect("/dashboard");
}