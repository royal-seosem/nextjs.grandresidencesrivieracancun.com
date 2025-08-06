import * as React from "react"

import {cn} from "@/lib/utils"

function Input({className, type, ...props}: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "text-base border border-accent p-2 rounded-xs",
                className
            )}
            {...props}
        />
    )
}

export {Input}
