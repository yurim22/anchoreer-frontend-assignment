import styles from './JobCalender.module.scss';
import classNames from 'classnames/bind';
import FilterInput from './ui/FilterInput/FilterInput';

const cx = classNames.bind(styles);

const JobCalender = () => {
	const date = ['SUN', 'MON', 'THU', 'WED', 'THR', 'FRI', 'SAT'];

	return (
		<div className={cx('job-calender__container')}>
			<FilterInput />
			<div className={cx('calender')}>
				<div className={cx('calender-header')}>
					<div className={cx('calender-heder__nav')}>
						<button
							type="button"
							className={cx('navbar__button')}
							// onClick={goBack}
						>
							<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_left_linear-29fe8f95f4a81020b2b6f910f746536882afc36a3a2aa0f0c8a2cc6178ce4c33.svg" />
						</button>
						<span className={cx('navbar__date')}>2024-11</span>
						<button
							type="button"
							className={cx('navbar__button')}
							// onClick={goBack}
						>
							<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
						</button>
					</div>
				</div>
				<div className={cx('calender-days')}>
					{date.map((d) => (
						<div className={cx('date')}>{d}</div>
					))}
				</div>
				<div className={cx('calender-body')}>
					<div className={cx('calender-row')}>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className={cx('calender-row')}>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
						<div className={cx('calender-row__cell')}>
							<div className={cx('calender-row__day')}>1</div>
							<div className={cx('calender-row__content')}>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'start',
										)}
									>
										시
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
								<div className={cx('calender-row__company')}>
									<div
										className={cx(
											'calender-row__label',
											'end',
										)}
									>
										끝
									</div>
									<span className={cx('calender-row__name')}>
										앵커리어
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobCalender;
