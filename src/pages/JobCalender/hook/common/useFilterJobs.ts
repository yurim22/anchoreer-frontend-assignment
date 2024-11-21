import { IRecruits } from '@/shared/api/recruits/type';
import { addDays, isAfter, isBefore } from 'date-fns/fp';
import { ICompanyInfo } from '../../type/company';
import { TYPE } from '../../constant/company';

export const useFilterJobs = (
	recruitsInfo: IRecruits[] | undefined,
	start: Date,
	end: Date,
) => {
	// 월별 공고 정보
	const monthlyRecruits = recruitsInfo?.filter((info) => {
		const includeStart =
			isAfter(start)(info.start_time) && isBefore(end)(info.end_time);
		const includeEnd =
			isBefore(end)(info.end_time) && isAfter(start)(info.end_time);

		return includeStart || includeEnd;
	});

	const filterByDuty = (duties: number[]) => {
		return monthlyRecruits?.filter((recruit) =>
			recruit.duty_ids.some((duty) => duties.includes(duty)),
		);
	};

	// 공고 정렬 함수 (start 먼저, end 나중에)
	const sortByType = (companiesInfo: ICompanyInfo[]) => {
		return companiesInfo.sort((a: ICompanyInfo, b: ICompanyInfo) => {
			if (a.type === TYPE.START && b.type === TYPE.END) return -1;
			if (a.type === TYPE.END && b.type === TYPE.START) return 1;
			return 0;
		});
	};

	// 날짜별 공고 정보 맵핑 함수
	const mapRecruitsWithDay: () => Map<string, ICompanyInfo[]> = () => {
		const dateMap = new Map();

		let currentDay = start;
		while (currentDay <= end) {
			dateMap.set(currentDay.toISOString().split('T')[0], []);
			currentDay = addDays(1)(currentDay);
		}

		monthlyRecruits?.forEach((recruit) => {
			const startDate = recruit.start_time.split(' ')[0];
			const endDate = recruit.end_time.split(' ')[0];

			if (dateMap.has(startDate)) {
				dateMap.get(startDate).push({
					type: 'start',
					company: recruit.company_name,
					id: recruit.id,
				});
			}
			if (dateMap.has(endDate)) {
				dateMap.get(endDate).push({
					type: 'end',
					company: recruit.company_name,
					id: recruit.id,
				});
			}
		});

		// 날짜별 데이터 정렬
		for (const [key, value] of dateMap.entries()) {
			dateMap.set(key, sortByType(value));
		}

		return dateMap;
	};

	return { monthlyRecruits, mapRecruitsWithDay };
};
