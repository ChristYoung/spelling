import axios, { AxiosRequestConfig } from 'axios';

export const fetchRequest = async <T>(
    config?: AxiosRequestConfig,
): Promise<T> => {
    const { url, method, data } = config;
    try {
        const fetchData = await axios.request<T>({ url, method, data });
        return fetchData.data;
    } catch (error) {
        return error;
    }
};
