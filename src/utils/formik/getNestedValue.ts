import { FormikErrors, FormikTouched } from 'formik'


export const getNestedValue = <T extends object = {}>(values: FormikErrors<T> | FormikTouched<T>, name: string) => {
    let val: typeof values | string | null | undefined = values;

    if (/\./.test(name)) {
        for (const level of name.split('.')) {
            if (val!.hasOwnProperty(level)) {
                val = (val![level as keyof typeof values] as FormikErrors<T>)
            } else {
                val = null
                break;
            }
        }
    }
    else val = (val![name as keyof typeof values] as string | undefined);

    return val;
}
