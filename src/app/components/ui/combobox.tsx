"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "utils";
import {
  Button,
  Command,
  Popover,
  CommandItem,
  CommandEmpty,
  CommandInput,
  CommandGroup,
  PopoverContent,
  PopoverTrigger,
} from "components";

type ComboboxProps = {
  className?: string;
  classNameOpenMenu?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Combobox = ({
  value,
  options,
  setValue,
  className,
  placeholder,
  classNameOpenMenu,
}: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`${className} justify-between`}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className={`${classNameOpenMenu} p-0`}>
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>Nenhum item encontrado</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue: React.SetStateAction<string>) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { Combobox };
