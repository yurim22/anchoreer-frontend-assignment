import { Get } from '@/shared/constant/https';
import { IDuties } from './type';

export const getDutiesInfo = async () => {
	const response = await Get<IDuties[]>(`/v1/duties.json`);

	return response;
};
