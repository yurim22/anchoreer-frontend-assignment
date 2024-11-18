import styles from './JobCalender.module.scss';
import classNames from 'classnames/bind';
import FilterInput from './ui/FilterInput/FilterInput';
import Calender from './ui/Calender/Calender';

const cx = classNames.bind(styles);

const JobCalender = () => {
	return (
		<div className={cx('job-calender__container')}>
			{/* <FilterInput /> */}
			<Calender />
		</div>
	);
};

export default JobCalender;
