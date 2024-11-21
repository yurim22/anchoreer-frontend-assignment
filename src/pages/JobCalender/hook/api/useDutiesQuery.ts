import { getDutiesInfo } from '@/shared/api/duties/duties';
import { useQuery } from '@tanstack/react-query';

export const useDutiesQuery = () => {
	return useQuery({
		queryKey: ['duties'],
		queryFn: () => getDutiesInfo(),
	});
};
