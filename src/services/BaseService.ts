import axios, {AxiosInstance} from 'axios';

const BaseUrl =
    location.protocol +
    "//" +
    location.hostname +
    (location.port ? ":" + location.port : "");

const apiClient = axios.create({
    baseURL: BaseUrl + "/api/",
    withCredentials: false,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

class BaseService {
    apiClient: AxiosInstance;

    constructor() {
        this.apiClient = apiClient;
    }

    static delete<T>(suffix: string, params: any): Promise<ServiceResponse<T>> {
        let interpolatedSuffix = BaseService.replacePathVariables(
            suffix,
            params
        );

        return apiClient.delete(interpolatedSuffix);
    }

    static get<T>(suffix: string, params?: any): Promise<ServiceResponse<T>> {
        let interpolatedSuffix = BaseService.replacePathVariables(
            suffix,
            params
        );

        return apiClient.get(interpolatedSuffix);
    }

    static post<T>(suffix: string, data: T, params?: any): Promise<ServiceResponse<T>> {
        let interpolatedSuffix = BaseService.replacePathVariables(
            suffix,
            params
        );

        return apiClient.post(interpolatedSuffix, data);
    }

    static put<T>(suffix: string, data: T, params: any): Promise<ServiceResponse<T>> {
        let interpolatedSuffix = BaseService.replacePathVariables(
            suffix,
            params
        );

        return apiClient.put(interpolatedSuffix, data);
    }

    /**
     * Interpolates urls with necessary data automatically, given the placeholder
     * is found in the params object passed in.
     *
     * Example: url: "/api/persons/{id}" params: { id: 1 }
     * Result: url: "/api/persons/1
     *
     * @param url The URL (normally just the suffix, but can be a full URL
     * @param params The params object
     * @private
     */
    private static replacePathVariables(url: string, params: any): string {
        if (params == null) {
            return url;
        }

        const pattern: RegExp = /(?:{(.*?)})/g;
        const dictionary: string[] = [];

        let matches: RegExpExecArray | null = null;
        do {
            matches = pattern.exec(url);

            if (matches) {
                dictionary.push(matches[1]);
            }
        } while (matches);

        for (let p in dictionary) {
            if (params.hasOwnProperty(p) && params[p]) {
                const value = params[p];
                url = url.replace("\{" + p + "\}", value);
            }
        }

        return url;
    }
}

export { BaseService };
