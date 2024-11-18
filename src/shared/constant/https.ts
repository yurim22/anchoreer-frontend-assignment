import { AxiosRequestConfig } from 'axios';
import { instance } from '../utils/axiosInstance';

export interface CommonResponse<T> {
	code: string;
	data: T;
	message: string;
}

export const Get = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const response = await instance.get(url, config);
	return response.data;
};
