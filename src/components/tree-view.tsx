import { TreeItem } from "@/types";

interface TreeViewProps {
    data: TreeItem[];
    value?: string | null;
    onSelect?: (value: string) => void;
};