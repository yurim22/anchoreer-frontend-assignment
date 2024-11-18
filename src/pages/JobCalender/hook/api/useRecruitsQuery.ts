import { getRecruitsInfo } from '@/shared/api/recruits/recruits';
import { useQuery } from '@tanstack/react-query';

export const useRecruitsQuery = () => {
	return useQuery({
		queryKey: ['recruitsInfo'],
		queryFn: () => getRecruitsInfo(),
	});
};
