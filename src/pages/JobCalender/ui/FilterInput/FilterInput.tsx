import { useEffect, useState } from 'react';
import FilterGroup from './component/FilterGroup';
import styles from './FilterInput.module.scss';
import classNames from 'classnames/bind';
import { useDutiesQuery } from '../../hook/api/useDutiesQuery';
import buildHierarchy from '../../utils/buildHierarchy';
import { useRecruitStore } from '@/shared/store/useRecruitStore';
import { IHierarchy } from '../../type/company';

const cx = classNames.bind(styles);

const FilterInput = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { setSelectedDuty, selectedDuty } = useRecruitStore();

	const { data: duties } = useDutiesQuery();
	const hierarchy = duties && buildHierarchy(duties);

	useEffect(() => {
		// hierarchy && setSelectedDuty(hierarchy);

		const flattenHierarchy = (hierarchy: IHierarchy[]): any => {
			return hierarchy.flatMap((node: IHierarchy) =>
				node.children
					? [node, ...flattenHierarchy(node.children)]
					: [node],
			);
		};

		hierarchy && setSelectedDuty(flattenHierarchy(hierarchy));
	}, [hierarchy]);

	return (
		<div className={cx('filter__container')}>
			<div className={cx('filter__top')}>
				<section className={cx('category-filter')}>
					<div className={cx('category-filter__name')}>
						<button
							className={cx('category-filter__button')}
							onClick={() => setIsOpen(!isOpen)}
						>
							<span>직무</span>
							<div className={cx('button__border')}>
								<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
							</div>
						</button>
					</div>

					{isOpen && hierarchy && (
						<FilterGroup
							hierarchy={hierarchy}
							setIsOpen={setIsOpen}
						/>
					)}
				</section>
			</div>
		</div>
	);
};

export default FilterInput;
