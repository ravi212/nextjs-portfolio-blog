export function generateSlug(text: string) {
    return text
        .toLowerCase()                    
        .trim()                           
        .replace(/[^a-z0-9\s-]/g, '')   
        .replace(/\s+/g, '-')            
        .replace(/-+/g, '-');           
}

export const htmlToPlainText = (html: string) => {
    return html.replace(/<[^>]*>/g, '');
};