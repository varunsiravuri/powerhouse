import {z} from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";
import TextareaAutosize from "react-textarea-autosize";
import { ArrowUpIcon , Loader2Icon } from "lucide-react";
import { useMutation, useQuery , useQueryClient } from "@tanstack/react-query";

import {cn} from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import {Button} from "@/components/ui/button";
import {Form, FormField} from "@/components/ui/form";

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
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaAutosize from "react-textarea-autosize";
import { ArrowUpIcon, Loader2Icon } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

interface Props {
  projectId: String;
}

export const MessageForm = ({ projectId }: Props) => {
  return <div>Message Form</div>;
};
