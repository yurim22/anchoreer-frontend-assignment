import styles from './JobCalender.module.scss';
import classNames from 'classnames/bind';
import FilterInput from './ui/FilterInput/FilterInput';
import RecruitModal from './ui/RecruitModal/RecruitModal';
import Calender from './ui/Calender/Calender';
import ApiQueryWrapper from '@/shared/component/ApiQueryWrapper/ApiQueryWrapper';

const cx = classNames.bind(styles);

const JobCalender = () => {
	return (
		<div className={cx('job-calender__container')}>
			{/* 직무 정보 필터 */}
			<FilterInput />

			<ApiQueryWrapper>
				{/* 채용 달력 */}
				<Calender />

				{/* 상세 모달 */}
				<RecruitModal />
			</ApiQueryWrapper>
		</div>
	);
};

export default JobCalender;
