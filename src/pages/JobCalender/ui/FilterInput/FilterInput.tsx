import styles from './FilterInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FilterInput = () => {
	return (
		<div className={cx('filter__container')}>
			<div className={cx('filter__top')}>
				<section className={cx('category-filter')}>
					<div className={cx('category-filter__name')}>
						<button className={cx('category-filter__button')}>
							<span>직무</span>
							<div className={cx('button__border')}>
								<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
							</div>
						</button>
					</div>
					<div className={cx('category-select__modal')}>
						<div className={cx('category-select__body')}>
							<div className={cx('category-modal__title')}>
								<h5>직무</h5>
								<button>x</button>
							</div>
							<div className={cx('category-modal__content')}>
								<div className={cx('duty-groups__container')}>
									<div className={cx('duty-group__section')}>
										<div className={cx('duty-group__list')}>
											<div className={cx('duty__item')}>
												<input type="checkbox" />
												<div
													className={cx('duty__name')}
												>
													name
												</div>
												<div
													className={cx(
														'right-indicator',
													)}
												>
													<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
												</div>
											</div>
											<div className={cx('duty__item')}>
												<input type="checkbox" />
												<div
													className={cx('duty__name')}
												>
													name
												</div>
												<div
													className={cx(
														'right-indicator',
													)}
												>
													<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
												</div>
											</div>
											<div className={cx('duty__item')}>
												<input type="checkbox" />
												<div
													className={cx('duty__name')}
												>
													name
												</div>
												<div
													className={cx(
														'right-indicator',
													)}
												>
													<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
												</div>
											</div>
										</div>
									</div>
									<div className={cx('duty-group__detail')}>
										<div
											className={cx(
												'duty-group__section',
												'middle-group__section',
											)}
										>
											<div
												className={cx(
													'duty-group__list',
												)}
											>
												<div
													className={cx('duty__item')}
												>
													<input type="checkbox" />
													<div
														className={cx(
															'duty__name',
														)}
													>
														name
													</div>
													<div
														className={cx(
															'right-indicator',
														)}
													>
														<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
													</div>
												</div>
												<div
													className={cx('duty__item')}
												>
													<input type="checkbox" />
													<div
														className={cx(
															'duty__name',
														)}
													>
														name
													</div>
													<div
														className={cx(
															'right-indicator',
														)}
													>
														<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
													</div>
												</div>
												<div
													className={cx('duty__item')}
												>
													<input type="checkbox" />
													<div
														className={cx(
															'duty__name',
														)}
													>
														name
													</div>
													<div
														className={cx(
															'right-indicator',
														)}
													>
														<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default FilterInput;
