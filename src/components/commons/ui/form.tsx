"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import {Slot} from "@radix-ui/react-slot"
import {
    Controller,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
    FormProvider,
    useFormContext,
    useFormState,
} from "react-hook-form"

import {cn} from "@/lib/utils"
import {Label} from "@/components/commons/ui/label"
import {Input} from "@/components/commons/ui/input";
import {Button} from "@/components/commons/ui/button";

const Form = FormProvider

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
)


const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
      ...props
  }: ControllerProps<TFieldValues, TName>) => {
    return (
        <FormFieldContext.Provider value={{name: props.name}}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    )
}

const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext)
    const itemContext = React.useContext(FormItemContext)
    const {getFieldState} = useFormContext()
    const formState = useFormState({name: fieldContext.name})
    const fieldState = getFieldState(fieldContext.name, formState)

    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>")
    }

    const {id} = itemContext

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    }
}

type FormItemContextValue = {
    id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
    {} as FormItemContextValue
)

function FormItem({className, ...props}: React.ComponentProps<"div">) {
    const id = React.useId()

    return (
        <FormItemContext.Provider value={{id}}>
            <div
                data-slot="form-item"
                className={cn("grid px-1",
                    'border border-boder-input rounded-xs mb-5 relative',
                    className)}
                {...props}
            />
        </FormItemContext.Provider>
    )
}

function FormLabel({
                       className,
                       ...props
                   }: React.ComponentProps<typeof LabelPrimitive.Root>) {
    const {error, formItemId} = useFormField()

    return (
        <Label
            data-slot="form-label"
            data-error={!!error}
            className={cn("data-[error=true]:text-destructive",
                "text-sm text-label",
                className)}
            htmlFor={formItemId}
            {...props}
        />
    )
}

function FormInput({className, ...props}: React.ComponentProps<"input">) {
    return (
        <Input className={cn("border-0 text-xs h-auto", className)} {...props}/>
    )
}

function FormButton({className, ...props}: React.ComponentProps<"button">) {
    return (
        <Button className={cn("bg-accent py-2.5 px-10 rounded-sm uppercase text-sm font-bold", className)} {...props}/>
    )
}

function FormControl({...props}: React.ComponentProps<typeof Slot>) {
    const {error, formItemId, formDescriptionId, formMessageId} = useFormField()

    return (
        <Slot
            data-slot="form-control"
            id={formItemId}
            aria-describedby={
                !error
                    ? `${formDescriptionId}`
                    : `${formDescriptionId} ${formMessageId}`
            }
            aria-invalid={!!error}
            {...props}
        />
    )
}

function FormDescription({className, ...props}: React.ComponentProps<"p">) {
    const {formDescriptionId} = useFormField()

    return (
        <p
            data-slot="form-description"
            id={formDescriptionId}
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        />
    )
}

function FormMessage({className, ...props}: React.ComponentProps<"p">) {
    const {error, formMessageId} = useFormField()
    const body = error ? String(error?.message ?? "") : props.children

    if (!body) {
        return null
    }

    return (
        <p
            data-slot="form-message"
            id={formMessageId}
            className={cn("absolute -bottom-1/2 left-0 text-destructive text-sm", className)}
            {...props}
        >
            {body}
        </p>
    )
}

export {
    useFormField,
    Form,
    FormItem,
    FormInput,
    FormButton,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
}
