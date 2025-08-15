import {z} from "zod";


type OnlyDigitsOptions = {
    min?: number;              // longitud mínima permitida (por defecto 1)
    max?: number;              // longitud máxima permitida (por defecto 20)
    allowEmpty?: boolean;      // permitir cadena vacía como valor válido (por defecto false)
    // toUndefinedOnEmpty?: boolean; // si allowEmpty: mapear '' -> undefined (por defecto false)
    message?: string;          // mensaje de error personalizado
};


export const onlyDigits = ({
                               min = 1,
                               max = 20,
                               allowEmpty = false,
                               // toUndefinedOnEmpty = false,
                               message,
                           }: OnlyDigitsOptions = {}) => {

    if (min < 0) throw new Error("min debe ser >= 0");
    if (max < min) throw new Error("max debe ser >= min");

    const pattern = new RegExp(`^\\d{${min},${max}}$`);
    const msg =
        message ??
        (allowEmpty
            ? `Solo dígitos (${min}–${max}) o vacío`
            : `Solo dígitos (${min}–${max})`);

    return z
        .string()
        .transform((s) => s.trim())
        .refine((s) => (allowEmpty && s === "") || pattern.test(s), {message: msg});

    // return toUndefinedOnEmpty
    //     ? schema.transform((s) => (s === "" ? undefined : s))
    //     : schema;
};
