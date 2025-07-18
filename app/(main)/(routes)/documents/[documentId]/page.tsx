"use client"

import React, { use } from "react";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentIdPageProps {
    params: Promise<{
        documentId: Id<"documents">;
    }>;
};


const DocumentIdPage = ({
   params
}: DocumentIdPageProps) => {
    const Editor = useMemo(() => dynamic(() => import("@/components/editor"), {ssr: false}), []);

    const { documentId } = use(params);

    const document = useQuery(api.document.getById, {
        documentId: documentId,
    });

    const update = useMutation(api.document.update);

    const onChange = (content: string) => {
        update({
        id: documentId,
        content,
        });
    };


    if(document === undefined ){
        return (
            <div>
                <Cover.Skeleton />
                <div className="md: max-w-3xl lg:max-w-4xl mx-auto mt-10">
                    <Skeleton className="h-14 w-[50%]" />
                    <Skeleton className="h-14 w-[80%]" />
                    <Skeleton className="h-14 w-[40%]" />
                    <Skeleton className="h-14 w-[60%]" />
                </div>
            </div>
        );
    }

    if(document === null){
        return (
            <div>
                Not found
            </div>
        );
    }
    return(
        <div className="pb-40">
            <Cover url={document.coverImage}/>
            <div className="md:max-w-3xl lg:max-w-2xl mx-auto lg:mr-auto lg:ml-24">
                <Toolbar initialData={document} />
                <Editor
                    onChange= {onChange}
                    initialContent = {document.content}
                />
            </div>
        </div>
    );
}

export default DocumentIdPage;