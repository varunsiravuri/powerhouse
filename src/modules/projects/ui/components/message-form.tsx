import {z} from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";
import TextareaAutosize from "react-textarea-autosize";
import { ArrowUpIcon , Loader2Icon } from "lucide-react";
import { useMutation, useQuery , useQueryClient } from "@tanstack/react-query";
interface Props{
    projectId: String;
};

export const MessageForm = ({ projectId }: Props) => {
    return (
        <div>
            Message Form 
        </div>
    );
};