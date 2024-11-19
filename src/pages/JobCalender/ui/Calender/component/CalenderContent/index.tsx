import { addDays, endOfMonth, endOfWeek, startOfMonth } from 'date-fns/fp';
import styles from './CalenderContent.module.scss';
import classNames from 'classnames/bind';
import { startOfWeek } from 'date-fns';
import { useCallback, useMemo } from 'react';
import CalenderCell from '../CalenderCell';
import { useRecruitsQuery } from '@/pages/JobCalender/hook/api/useRecruitsQuery';
import { useFilterJobs } from '@/pages/JobCalender/hook/common/useFilterJobs';

const cx = classNames.bind(styles);

interface IContentProps {
	currentMonth: Date;
}
const CalenderContent = ({ currentMonth }: IContentProps) => {
	const weekStart = startOfWeek(startOfMonth(currentMonth));
	const weekEnd = endOfWeek(endOfMonth(currentMonth));

	const { data: recruitsInfo } = useRecruitsQuery();

	const filterRecruits = useMemo(() => {
		if (recruitsInfo) {
			return useFilterJobs(recruitsInfo, weekStart, weekEnd);
		}
		return null;
	}, [recruitsInfo, weekStart, weekEnd]);

	const renderCalenderRow = useCallback(() => {
		const rows = [];
		let currentDay = weekStart;

		while (currentDay <= weekEnd) {
			const week = [];
			for (let i = 0; i < 7; i++) {
				const dayKey = currentDay.toISOString().split('T')[0];
				const recruits = filterRecruits
					?.mapRecruitsWithDay()
					.get(dayKey);

				week.push(
					<CalenderCell
						key={currentDay.toISOString()}
						day={currentDay}
						companies={recruits}
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
	}, [weekStart, weekEnd, filterRecruits]);

	return <div className={cx('calender-body')}>{renderCalenderRow()}</div>;
};

export default CalenderContent;
