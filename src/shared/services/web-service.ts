import { axiosInstance } from '@middleware/middleware';
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type HttpRequestType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

type ApiType<T> = {
	URL: string;
	method?: HttpMethod;
	headers?: Record<string, string>;
	body?: T;
	params?: Record<string, unknown>;
	queryParams?: Record<string, unknown>;
	responseType?: HttpRequestType;
};

const makeApi = <T>({
	URL,
	method,
	headers: headerParams,
	body,
	params,
	queryParams,
	responseType
}: ApiType<T>) => {
	const config = {
		method,
		url: URL,
		params,
		queryParams,
		headers: { ...headerParams },
		data: body,
		responseType
	};
	return axiosInstance(config);
};

//INFO: Use this request method from your individual services
const GET = <T>({
	URL,
	headers,
	body,
	params,
	queryParams,
	responseType
}: ApiType<T>) => {
	return makeApi<T>({
		URL: `${axiosInstance.getUri()}${URL}`,
		method: "GET",
		headers,
		body,
		params,
		queryParams,
		responseType
	});
};

const POST = <T>({ URL, headers, body }: ApiType<T>) => {
	return makeApi<T>({
		URL: `${axiosInstance.getUri()}${URL}`,
		method: "POST",
		headers,
		body
	});
};

const PUT = <T>({ URL, headers, body }: ApiType<T>) => {
	return makeApi<T>({
		URL: `${axiosInstance.getUri()}${URL}`,
		method: "PUT",
		headers,
		body
	});
};

const DELETE = <T>({ URL, headers, body }: ApiType<T>) => {
	return makeApi<T>({
		URL: `${axiosInstance.getUri()}${URL}`,
		method: "DELETE",
		headers,
		body
	});
};

const PATCH = <T = undefined>({ URL, headers, body, params }: ApiType<T>) => {
	return makeApi<T>({
		URL: `${axiosInstance.getUri()}${URL}`,
		method: "PATCH",
		headers,
		body,
		params
	});
};

export { GET, POST, PUT, DELETE, PATCH };
