"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, Server } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import { toast } from "react-hot-toast";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ApiAlertProps {
    title: string;
    description: string;
    variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "public",
    admin: "admin",
}

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
    public: "default",
    admin: "destructive",
}

export const ApiAlert: React.FC<ApiAlertProps> = ({ title, description, variant = "public" }) => {

    const onCopy = () => {
        toast.success("Copy to clipboard");
    }
    return (
        // <Alert>
        //     <Server className="h-4 w-4" />
        //     <AlertTitle className="flex items-center gap-x-2">
        //         {title}
        //         <Badge variant={variantMap[variant]}>
        //             {textMap[variant]}
        //         </Badge>
        //     </AlertTitle>
        //     <AlertDescription className="mt-4 flex items-center justify-between">
        //         <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        //             {description}
        //         </code>
        //         <Button variant="outline" size="icon" onClick={onCopy}>
        //             <Copy className="h-4 w-4" />
        //         </Button>
        //     </AlertDescription>
        // </Alert>
        <Card className="w-auto">
            <CardHeader className="flex justify-between">
                <div className="flex items-center">
                    <Server className="h-4 w-4 mr-2" />
                    <CardTitle>
                        {title}
                        <Badge variant={variantMap[variant]} className="mx-2">
                            {textMap[variant]}
                        </Badge>
                    </CardTitle>
                </div>
                <div className="flex items-center">
                    <CardDescription className="bg-muted rounded md:px-2 px-0.5 py-2 font-semibold font-sans">
                        {description}
                    </CardDescription>
                    <CopyToClipboard text={description}>
                        <Button variant="outline" size="icon" onClick={onCopy} className="md:ml-auto ml-2">
                            <Copy className="h-4 w-4" />
                        </Button>
                    </CopyToClipboard>
                </div>
            </CardHeader>
        </Card>
    );
}
