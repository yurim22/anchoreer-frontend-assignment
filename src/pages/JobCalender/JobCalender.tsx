import styles from './JobCalender.module.scss';
import classNames from 'classnames/bind';
import FilterInput from './ui/FilterInput/FilterInput';
import Calender from './ui/Calender/Calender';
import RecruitModal from './ui/RecruitModal/RecruitModal';

const cx = classNames.bind(styles);

const JobCalender = () => {
	return (
		<div className={cx('job-calender__container')}>
			<FilterInput />
			<Calender />
			<RecruitModal />
		</div>
	);
};

export default JobCalender;
