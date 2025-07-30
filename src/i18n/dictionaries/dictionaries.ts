// src/lib/messages.ts
export async function getMessages(locale: string) {
    return (await import(`../dictionaries/${locale}.json`)).default;
}