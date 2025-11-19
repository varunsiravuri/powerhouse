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

const formSchema =z.object({
    value: z.string()
        .min(1, {message: "Value is required"})
        .max(10000, {message: "Value is too long"}),
})

export const MessageForm = ({ projectId }: Props) => {
    const [isFocused, setIsFocused]= useState(false);
    const showUsage = false;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            value: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "relative border p-4 pt-1 rounded-xl bg-sidebar dark:bg:sidebar transition-all",
            isFocused && "shadow-xs",
            showUsage && "rounded-t-none",
          )}
        >
          <FormField 
            control ={form.control}
            name="value"
            render={({field}) =>(
                <TextareaAutosize
                    {...field}
                    onFocus={()=> setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    minRows={2}
                    maxRows={8}
                    className="pt-4 resize-none border-none w-full outline-none bg-transparent"
                    placeholder=" Turn your Ideas into reality! "
                    onKeyDown={(e) => {
                        if(e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                            e.preventDefault();
                            form.handleSubmit(onSubmit)(e);
                        }
                    }}

                />
            )}
          />
        </form>
      </Form>
    );
};