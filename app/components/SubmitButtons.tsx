"use client"

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import GoogleLogo from "@/public/google.svg";
import GithubLogo from "@/public/github.svg";
import { Loader2 } from "lucide-react";

export function GoogleAuthButton() {
    const {pending} = useFormStatus ()

    return (
        <>
        {pending ? (
            <Button disabled variant="outline" className="w-full">
                <Loader2 className="mr-2 size-4 animate-spin" /> Loading...
            </Button>
        ) : (
            <Button variant="outline" className="w-full">
                <img src={GoogleLogo.src} alt="Google logo" className="size-4 mr-2" />
                Sign in with Google
            </Button>
        )}
        </>
    );
}

export function GithubAuthButton() {
    const {pending} = useFormStatus ()

    return (
        <>
        {pending ? (
            <Button disabled variant="outline" className="w-full">
                <Loader2 className="mr-2 size-4 animate-spin" /> Loading...
            </Button>
        ) : (
            <Button variant="outline" className="w-full">
                <img src={GithubLogo.src} alt="Github logo" className="size-4 mr-2" />
                Sign in with Github
            </Button>
        )}
        </>
    );
}