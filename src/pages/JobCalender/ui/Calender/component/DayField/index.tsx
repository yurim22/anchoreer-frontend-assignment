import { DAYS } from '@/pages/JobCalender/constant/calender';
import styles from './DayField.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DayField = () => {
	return (
		<div className={cx('calender-days')}>
			{Object.keys(DAYS).map((day: string) => (
				<div className={cx('date')} key={day}>
					{day}
				</div>
			))}
		</div>
	);
};

export default DayField;
