import { puter } from "@heyputer/puter.js";
import { ROOMIFY_RENDER_PROMPT } from "./constants";

export const fetchAsDataUrl = async (url: string): Promise<string> => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText || response.status}`);
    }

    const blob = await response.blob();

    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject(new Error('Failed to convert blob to Data URL'));
            }
        };
        reader.onerror = () => {
            reject(reader.error || new Error('FileReader error'));
        };
        reader.readAsDataURL(blob);
    });
};


export const generate3DView = async ({ sourceImage }: Generate3DViewParams) => {
    const dataUrl = sourceImage.startsWith('data:')
        ? sourceImage
        : await fetchAsDataUrl(sourceImage);

    const base64Data = dataUrl.split(',')[1];
    const mimeType = dataUrl.split(';')[0].split(':')[1];

    if (!base64Data || !mimeType) throw new Error('Invalid source image payload ');


    const response = await puter.ai.txt2img(ROOMIFY_RENDER_PROMPT, {
        model: 'gemini-2.5-flash-image-preview',
        input_image: base64Data,
        input_image_mime_type: mimeType,
    })


    const rawImageUrl = (response as HTMLImageElement).src ?? null;

    if (!rawImageUrl) return { renderedImage: null, renderedPath: undefined };

     const renderedImage = rawImageUrl.startsWith('data:')
        ? rawImageUrl
        : await fetchAsDataUrl(rawImageUrl);

    return { renderedImage, renderedPath: undefined };
}