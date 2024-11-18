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
			<CalenderHeader {...calenders} />
			<DayField />
			<CalenderContent currentMonth={calenders.current} />
		</div>
	);
};

export default Calender;
