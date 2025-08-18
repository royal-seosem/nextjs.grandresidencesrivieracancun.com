const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || '';
export const cdn = (srcPath: string) => {
    return `${cdnUrl}/${srcPath.startsWith('/') ? srcPath.slice(1) : srcPath}`;
}