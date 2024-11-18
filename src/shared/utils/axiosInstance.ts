import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';
import { API_SERVER_PATH } from '../constant/server';

export const instance = axios.create({
	baseURL: API_SERVER_PATH,
	timeout: 3000,
});

const onRequest = (
	config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
	const { method, url } = config;
	console.log(`[API-REQUEST] ${method?.toUpperCase()} ${url}`);

	config.headers['Content-Type'] = 'application/json; charset=utf-8';

	return config;
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
	// [TODO] 기본적인 에러 처리 필요

	return res;
};

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
	if (axios.isAxiosError(error)) {
		const { method, url } = error.config as InternalAxiosRequestConfig;
		if (error.response) {
			const { statusCode, message } = error.response.data;
			console.log(
				`🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${statusCode} : ${message}`,
			);
		}
	} else {
		console.log(`🚨 [API] | Error ${error.message}`);
	}
	return Promise.reject(error);
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onResponse, onError);
