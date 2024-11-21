import styles from './CalenderHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IHeaderProps {
	// 현재 날짜
	current: Date;

	// 이전 달 이동 함수
	prevMonth: () => void;

	// 다음 달 이동 함수
	nextMonth: () => void;

	// 날짜 포맷 함수
	formatDate: (date: Date, form: string) => string;
}

const CalenderHeader = (props: IHeaderProps) => {
	const { prevMonth, nextMonth, formatDate, current } = props;

	return (
		<div className={cx('calender-header')}>
			<div className={cx('calender-heder__nav')}>
				<button
					type="button"
					className={cx('navbar__button')}
					onClick={prevMonth}
				>
					<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_left_linear-29fe8f95f4a81020b2b6f910f746536882afc36a3a2aa0f0c8a2cc6178ce4c33.svg" />
				</button>
				<span className={cx('navbar__date')}>
					{formatDate(current, 'yyyy-MM')}
				</span>
				<button
					type="button"
					className={cx('navbar__button')}
					onClick={nextMonth}
				>
					<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
				</button>
			</div>
		</div>
	);
};

export default CalenderHeader;
