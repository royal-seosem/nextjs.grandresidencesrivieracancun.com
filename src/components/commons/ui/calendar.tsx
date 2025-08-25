"use client"

import * as React from "react"
import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon,} from "lucide-react"
import {DayButton, DayPicker, getDefaultClassNames} from "react-day-picker"
import {format} from "date-fns"

import {cn} from "@/lib/utils"
import {Button, buttonVariants} from "@/components/commons/ui/button"
import {RateRequest, useRate} from "@/components/commons/shared/booking/useRates";

function Calendar({
                      className,
                      classNames,
                      showOutsideDays = true,
                      captionLayout = "label",
                      buttonVariant = "ghost",
                      formatters,
                      components,
                      rateRequest,
                      ...props
                  }: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>["variant"],
    rateRequest?: RateRequest
}) {
    const defaultClassNames = getDefaultClassNames()
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn(
                "bg-background group/calendar [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent shadow-lg",
                String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
                String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
                className
            )}
            captionLayout={captionLayout}
            formatters={{
                formatMonthDropdown: (date) =>
                    date.toLocaleString("default", {month: "short"}),
                ...formatters,
            }}
            classNames={{
                root: cn("w-fit", defaultClassNames.root),
                months: cn(
                    "flex gap-4 flex-col md:flex-row relative ",
                    defaultClassNames.months
                ),
                month: cn("flex flex-col w-full", defaultClassNames.month, 'bg-booking-bg'),
                nav: cn(
                    "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
                    defaultClassNames.nav,
                ),
                button_previous: cn(
                    buttonVariants({variant: buttonVariant}),
                    "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
                    defaultClassNames.button_previous
                ),
                button_next: cn(
                    buttonVariants({variant: buttonVariant}),
                    "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
                    defaultClassNames.button_next
                ),
                month_caption: cn(
                    "flex items-center justify-center w-full",
                    defaultClassNames.month_caption,
                    'text-base font-medium bg-white pb-4 pt-2'
                ),
                dropdowns: cn(
                    "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
                    defaultClassNames.dropdowns
                ),
                dropdown_root: cn(
                    "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
                    defaultClassNames.dropdown_root
                ),
                dropdown: cn(
                    "absolute bg-popover inset-0 opacity-0",
                    defaultClassNames.dropdown
                ),
                caption_label: cn(
                    "select-none font-medium",
                    captionLayout === "label"
                        ? "text-base"
                        : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
                    defaultClassNames.caption_label,
                    'bg-white'
                ),
                table: "w-full border-collapse",
                weekdays: cn("flex", defaultClassNames.weekdays, 'bg-white pb-2'),
                weekday: cn(
                    "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
                    defaultClassNames.weekday,
                    'text-accent text-sm uppercase '
                ),
                week: cn("flex w-full", defaultClassNames.week),
                week_number_header: cn(
                    "select-none w-(--cell-size)",
                    defaultClassNames.week_number_header,
                ),
                week_number: cn(
                    "text-[0.8rem] select-none text-muted-foreground",
                    defaultClassNames.week_number
                ),
                day: cn(
                    "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-xs [&:last-child[data-selected=true]_button]:rounded-r-xs group/day aspect-square select-none",
                    defaultClassNames.day,
                ),
                range_start: cn(
                    defaultClassNames.range_start,
                    "rounded-l-xs  bg-white",
                ),
                range_middle: cn(defaultClassNames.range_middle, "rounded-none bg-[#f5dcab] ",),
                range_end: cn(defaultClassNames.range_end, "rounded-r-xs  bg-white",),
                today: cn(
                    "text-accent-foreground rounded-xs data-[selected=true]:rounded-none ",
                    defaultClassNames.today,
                    "before:content-[''] before:absolute before:top-0 before:right-0 before:h-0 before:w-0 before:border-[7px] before:border-solid before:border-[#227BD7] before:border-b-transparent before:border-l-transparent"
                ),
                outside: cn(
                    "text-muted-foreground aria-selected:text-muted-foreground",
                    defaultClassNames.outside
                ),
                disabled: cn(
                    "text-muted-foreground opacity-50",
                    defaultClassNames.disabled
                ),
                hidden: cn("invisible", defaultClassNames.hidden),
                ...classNames,
            }}
            components={{
                Root: ({className, rootRef, ...props}) => {
                    return (
                        <div
                            data-slot="calendar"
                            ref={rootRef}
                            className={cn(className)}
                            {...props}
                        />
                    )
                },
                Chevron: ({className, orientation, ...props}) => {
                    if (orientation === "left") {
                        return (
                            <ChevronLeftIcon className={cn("size-4", className)} {...props} />
                        )
                    }

                    if (orientation === "right") {
                        return (
                            <ChevronRightIcon
                                className={cn("size-4", className)}
                                {...props}
                            />
                        )
                    }

                    return (
                        <ChevronDownIcon className={cn("size-4", className)} {...props} />
                    )
                },
                DayButton: (props) => CalendarDayButton({...props, rateRequest}),
                WeekNumber: ({children, ...props}) => {
                    return (
                        <td {...props}>
                            <div className="flex size-(--cell-size) items-center justify-center text-center">
                                {children}
                            </div>
                        </td>
                    )
                },
                ...components,
            }}
            {...props}
        />
    )
}

function CalendarDayButton({
                               className,
                               day,
                               modifiers,
                               rateRequest,
                               children,
                               ...props
                           }: React.ComponentProps<typeof DayButton> & {
    rateRequest?: RateRequest,
}) {
    const defaultClassNames = getDefaultClassNames()

    const ref = React.useRef<HTMLButtonElement>(null)
    React.useEffect(() => {
        if (modifiers.focused) ref.current?.focus()
    }, [modifiers.focused])


    let dayRequest = day.date;

    if (day.date < new Date()) {
        dayRequest = new Date();
    }

    const completeRateRequest: RateRequest = {
        adults:        rateRequest?.adults        ?? 0,
        children:      rateRequest?.children      ?? 0,
        childAge:      rateRequest?.childAge      ?? [],
        currency:      rateRequest?.currency      ?? "USD",
        month:         dayRequest,                        // siempre el mes del día visible
        discountCode:  rateRequest?.discountCode  ?? "",
        hotelCode:     rateRequest?.hotelCode     ?? "",
        ratePlanCode:  rateRequest?.ratePlanCode  ?? "",
        roomTypeCode:  rateRequest?.roomTypeCode  ?? "",
        rooms:         rateRequest?.rooms         ?? 1,
    };


    const {data} = useRate({
        ...completeRateRequest,
        month: dayRequest
    });

    const key = format(day.date, "yyyy-MM-dd");
    const price = data?.get(key) || null;


    return (
        <Button
            ref={ref}
            variant="ghost"
            size="icon"
            data-day={format(day.date, "yyyy-MM-dd")}
            data-selected-single={
                modifiers.selected &&
                !modifiers.range_start &&
                !modifiers.range_end &&
                !modifiers.range_middle
            }
            data-range-start={modifiers.range_start}
            data-range-end={modifiers.range_end}
            data-range-middle={modifiers.range_middle}
            className={cn(
                // "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
                defaultClassNames.day,
                'flex flex-col gap-0',
                'border border-transparent',
                'text-base font-normal aspect-square w-[52px] h-[52px]',
                'data-[selected-single=true]:bg-booking-bg data-[selected-single=true]:border-accent data-[selected-single=true]:rounded-xs',
                'data-[range-start=true]:bg-booking-bg data-[range-start=true]:border-accent data-[range-start=true]:rounded-xs',
                'data-[range-end=true]:bg-booking-bg data-[range-end=true]:border-accent data-[range-end=true]:rounded-xs',
                className
            )}
            {...props}
        >
            <span>{children}</span>
            {rateRequest && price && (
                <span className="text-[11px]"> ${(price.rate.minRate - price.rate.discount).toFixed(0)} </span>
            )}
        </Button>
    )
}

export {Calendar, CalendarDayButton}
