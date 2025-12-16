import { TreeItem } from "@/types";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { 
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarProvider,
    SidebarRail,
 } from "@/components/ui/sidebar";
import { FileIcon } from "lucide-react";

interface TreeViewProps {
    data: TreeItem[];
    value?: string | null;
    onSelect?: (value: string) => void;
};

export const TreeView = ({
    data,
    value,
    onSelect,

}: TreeViewProps) => {
    return(
        <SidebarProvider>
            <Sidebar collapsible="none" className="w-full">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarContent>
                            <SidebarMenu>

                            </SidebarMenu>
                        </SidebarContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    )

};

interface TreeProps {
    item: TreeItem;
    selectedValue?: string | null;
    onSelect?: (value: string) => void;
    parentPath: string;
};

const Tree = ({item, selectedValue, onSelect, parentPath}: TreeProps) => {
    const [name, ...items] = Array.isArray(item) ? item : [item];
    const currentPath = parentPath ? `${parentPath}/name`: name;

    if(!items.length){
        //its a file 
        const isSelected = selectedValue === currentPath;

        return(
            <SidebarMenuButton 
                isActive={isSelected}
                className="data-[actuve=true]:bg-transparent"
                onClick={() => onSelect?.(currentPath)}
            >
                <FileIcon/> 
                <span className="truncate">
                    {name}
                </span>
            </SidebarMenuButton>
        )
    }

    return (
        <SidebarMenuItem>
            <Collapsible className="group/collapsible [&[data-state=oepn]>button>svg:first-child]:rotate-90">
                
            </Collapsible>
        </SidebarMenuItem>
    )

};