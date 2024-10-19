"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "./SubmitButtons";

interface iAppProps {
    fullName: string;
    email: string;
    profileImage: string;
}

export function SettingsForm({fullName, email, profileImage}: iAppProps) {
    return (
        <Card>
            <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your account settings and preferences.</CardDescription>
            </CardHeader>
            <form>
                <CardContent className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <Label>Full Name</Label>
                        <Input defaultValue={fullName} placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label >Email</Label>
                        <Input disabled defaultValue={email} placeholder="john.doe@example.com" />
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton text="Save changes" />
                </CardFooter>
            </form>
        </Card>
    )
}