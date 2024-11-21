import { getRecruitsInfo } from '@/shared/api/recruits/recruits';
import { useQuery } from '@tanstack/react-query';

// 공고 쿼리 함수
export const useRecruitsQuery = () => {
	return useQuery({
		queryKey: ['recruitsInfo'],
		queryFn: () => getRecruitsInfo(),
	});
};
