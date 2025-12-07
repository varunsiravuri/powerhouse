import { CopyCheckIcon, CopyIcon } from "lucide-react";
import {useState, useMemo, useCallback, Fragment} from "react";

import { Hint } from "./hint";
import { Button } from "./ui/button";
import { CodeView } from "./code-view";
import { ResizableHandle,ResizablePanelGroup,ResizablePanel } from "./ui/resizable";

import { Breadcrumb, BreadcrumbEllipsis,BreadcrumbItem,BreadcrumbPage,BreadcrumbList,BreadcrumbSeparator } from "./ui/breadcrumb";

type FileCollection = { [path: string]: string};

function getLanguageFromExtension(filename: string): string{
    const extension = filename.split(".").pop()?.toLowerCase();
    return extension || "text";
};

interface FileExplorerProps{
    files: FileCollection;
};

export const FileExplorer = ({
    files,
}:FileExplorerProps) =>{
    const [selectedFile, setSelectedFile] = useState<string | null>(() => {
        const fileKeys = Object.keys(files);
        return fileKeys.length > 0 ? fileKeys[0] : null;

    });

    return(
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={30} minSize={30} className="bg-sidebar">
                <p>TODO: Tree view is yet to date. </p>
            </ResizablePanel>
            <ResizableHandle className="hover:bg-primary transition-colors" />
            <ResizablePanel defaultSize={70} minSize={50}>

            </ResizablePanel>
        </ResizablePanelGroup>
    )
};
