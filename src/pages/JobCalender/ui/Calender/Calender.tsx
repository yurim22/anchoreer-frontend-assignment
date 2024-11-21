import CalenderContent from './component/CalenderContent';
import CalenderHeader from './component/CalenderHeader';
import DayField from './component/DayField';
import styles from './Calender.module.scss';
import classNames from 'classnames/bind';
import { useMoveMonth } from '../../hook/common/useMoveMonth';

const cx = classNames.bind(styles);

const Calender = () => {
	const calenders = useMoveMonth();

	return (
		<div className={cx('calender')}>
			{/* 달력 헤더 */}
			<CalenderHeader {...calenders} />

			{/* 달력 날짜 */}
			<DayField />

			{/* 달력 컨텐츠 */}
			<CalenderContent currentMonth={calenders.current} />
		</div>
	);
};

export default Calender;
