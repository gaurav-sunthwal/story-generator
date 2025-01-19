import axios, {type AxiosInstance} from 'axios';

// Axios client configuration with retry logic
const createAxiosClient = (): AxiosInstance => {
    const client = axios.create({
        timeout: 1000000,
        proxy:{
            port: 8080,
            host:"localhost",
            protocol:"http"
        }
    });

    client.interceptors.response.use(
        response => response,
        async error => {
            const config = error.config;
            if (!config || config.__retryCount >= 3) {
                return Promise.reject(error);
            }

            config.__retryCount = (config.__retryCount || 0) + 1;
            return client(config);
        }
    );

    return client;
};

const axiosClient = createAxiosClient();

// Types
interface ThemeResponse {
    data: { themes: string[] };
    file: string;
}

interface Chapter {
    chapter_number: number;
    chapter_title: string;
    content: string;
}

interface StoryResponse {
    data: {
        chapters: Chapter[];
        title: string;
    };
}

interface PoemResponse {
    data: {
        poem: string;
    };
}

interface CaptionResponse {
    data: {
        captions: string[];
    };
}

// Theme API
class ThemeAPI {
    private readonly baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async generateThemes(file: File): Promise<ThemeResponse> {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axiosClient.post<ThemeResponse>(
            `${this.baseUrl}/sketch2story/generateThemes`,
            formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
            }
        );
        return response.data;
    }
}

// Story API
class StoryAPI {
    private readonly baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async generateThemes(file: File): Promise<any> {
        const formData = new FormData();
        formData.append('file', file);

        return await axiosClient.post<ThemeResponse>(
            `${this.baseUrl}/sketch2story/generateThemes`,
            formData,
            {
                headers: {'Content-Type': 'multipart/form-data'},
            }
        );
    }

    async generateChapters(
        themes: string[],
        image_uid: string
    ): Promise<StoryResponse> {
        const payload = { themes, image_uid };

        const response = await axiosClient.post<StoryResponse>(
            `${this.baseUrl}/sketch2story/generateChapters`,
            payload,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        return response.data;
    }

    async generateStory(
        themes: string[],
        image_uid: string,
        tone: string,
        chapters_res: StoryResponse["data"],
        size: string,
        backstory: string
    ): Promise<StoryResponse> {
        const payload = { themes, image_uid, tone, chapters_res, size, backstory };

        const response = await axiosClient.post<StoryResponse>(
            `${this.baseUrl}/sketch2story/generateStory`,
            payload,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        return response.data;
    }
}

// Poem API
class PoemAPI {
    private readonly baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async generateThemes(file: File): Promise<ThemeResponse> {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axiosClient.post<ThemeResponse>(
            `${this.baseUrl}/img2poem/generateThemes`,
            formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
            }
        );
        return response.data;
    }

    async generatePoem(
        image_uid: string,
        themes: string[],
        settings: string[]
    ): Promise<PoemResponse> {
        const payload = { image_uid, themes, settings };

        const response = await axiosClient.post<PoemResponse>(
            `${this.baseUrl}/img2poem/generatePoem`,
            payload,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        return response.data;
    }

    async generateCaptions(
        image_uid: string,
        themes: string[]
    ): Promise<CaptionResponse> {
        const payload = { image_uid, themes };

        const response = await axiosClient.post<CaptionResponse>(
            `${this.baseUrl}/cc/generateCaptions`,
            payload,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        return response.data;
    }
}

// Export classes
export { ThemeAPI, StoryAPI, PoemAPI };