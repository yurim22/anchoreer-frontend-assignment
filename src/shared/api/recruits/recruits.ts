import { Get } from '@/shared/constant/https';
import { IRecruits } from './type';

// 채용 일정 정보
export const getRecruitsInfo = async () => {
	const response = await Get<IRecruits[]>(`/v1/recruits.jso`);

	return response;
};
