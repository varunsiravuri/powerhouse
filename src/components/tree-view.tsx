import { TreeItem } from "@/types";
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
                        
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    )

};
