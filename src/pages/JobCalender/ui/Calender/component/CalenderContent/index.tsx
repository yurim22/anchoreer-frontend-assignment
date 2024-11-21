import {
	addDays,
	endOfMonth,
	endOfWeek,
	format,
	startOfMonth,
} from 'date-fns/fp';
import styles from './CalenderContent.module.scss';
import classNames from 'classnames/bind';
import { startOfWeek } from 'date-fns';
import { useCallback, useEffect, useMemo } from 'react';
import CalenderCell from '../CalenderCell';
import { useRecruitsQuery } from '@/pages/JobCalender/hook/api/useRecruitsQuery';
import { useFilterJobs } from '@/pages/JobCalender/hook/common/useFilterJobs';
import { useRecruitStore } from '@/shared/store/useRecruitStore';

const cx = classNames.bind(styles);

interface IContentProps {
	currentMonth: Date;
}
const CalenderContent = ({ currentMonth }: IContentProps) => {
	const weekStart = startOfWeek(startOfMonth(currentMonth));
	const weekEnd = endOfWeek(endOfMonth(currentMonth));

	const { data: recruitsInfo } = useRecruitsQuery();
	const { setRecruitInfo } = useRecruitStore();

	const { monthlyRecruits, mapRecruitsWithDay } = useFilterJobs(
		recruitsInfo,
		weekStart,
		weekEnd,
	);

	useEffect(() => {
		if (monthlyRecruits) {
			setRecruitInfo(monthlyRecruits);
		}
	}, [monthlyRecruits]);

	const mapRecruits = useMemo(() => {
		return mapRecruitsWithDay();
	}, [mapRecruitsWithDay]);

	const renderCalenderRow = useCallback(() => {
		const rows = [];
		let currentDay = weekStart;

		while (currentDay <= weekEnd) {
			const week = [];
			for (let i = 0; i < 7; i++) {
				const dayKey = format('yyyy-MM-dd')(currentDay);
				const recruits = mapRecruits.get(dayKey);

				week.push(
					<CalenderCell
						key={currentDay.toISOString()}
						day={currentDay}
						companies={recruits ?? []}
					/>,
				);
				currentDay = addDays(1)(currentDay);
			}
			rows.push(
				<div
					className={cx('calender-row')}
					key={currentDay.toISOString()}
				>
					{week}
				</div>,
			);
		}

		return rows;
	}, [weekStart, weekEnd]);

	return <div className={cx('calender-body')}>{renderCalenderRow()}</div>;
};

export default CalenderContent;
