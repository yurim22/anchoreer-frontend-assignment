import { memo } from 'react';

import styles from './CalenderCell.module.scss';
import classNames from 'classnames/bind';
import { format } from 'date-fns/fp';
import { ICompanyInfo } from '@/pages/JobCalender/type/company';
import { TYPE } from '@/pages/JobCalender/constant/company';

const cx = classNames.bind(styles);

interface ICalenderCellProps {
	day: Date;
	companies: ICompanyInfo[];
}

const CalenderCell = ({ day, companies }: ICalenderCellProps) => {
	const formattedDay: string = format('d')(day);

	return (
		<div className={cx('calender-row__cell')} key={formattedDay}>
			<div className={cx('calender-row__day')}>{formattedDay}</div>
			<div className={cx('calender-row__content')}>
				{companies
					? companies.map((info) => {
							return (
								<div
									className={cx('calender-row__company')}
									key={info.id}
								>
									<div
										className={cx(
											'calender-row__label',
											info.type === TYPE.START
												? 'start'
												: 'end',
										)}
									>
										{info.type === TYPE.START ? '시' : '끝'}
									</div>

									<div className={cx('calender-row__name')}>
										{info.company}
									</div>
								</div>
							);
						})
					: null}
			</div>
		</div>
	);
};

export default memo(CalenderCell);