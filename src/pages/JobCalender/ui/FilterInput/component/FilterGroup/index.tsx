import classNames from 'classnames/bind';
import styles from './FilterGroup.module.scss';
import { IHierarchy } from '@/pages/JobCalender/type/company';
import DutyList from '../DutyList';
import { useState } from 'react';

const cx = classNames.bind(styles);

interface IFilterGroupProps {
	hierarchy: IHierarchy[];
	setIsOpen: (isOpen: boolean) => void;
}

const FilterGroup = ({ hierarchy, setIsOpen }: IFilterGroupProps) => {
	const [dutyList, setDutyList] = useState<IHierarchy[]>([]);

	// 직무 선택 함수
	const handleSelectDuty = (duty: IHierarchy, level: number) => {
		setDutyList((prev) => {
			const newSelected = prev.slice(0, level);
			newSelected[level] = duty;
			return newSelected;
		});
	};

	// 직무 리스트 렌더링 함수
	const renderDutyList = (duties: IHierarchy[], level: number) => (
		<div className={cx('duty-group__section')} key={level}>
			<DutyList
				hierarchy={duties}
				setFilterDuty={(duty) => handleSelectDuty(duty, level)}
				selectedDuty={dutyList[level]}
			/>
		</div>
	);

	return (
		<div className={cx('category-select__modal')}>
			<div className={cx('category-select__body')}>
				<div className={cx('category-modal__title')}>
					<h5>직무</h5>
					<button onClick={() => setIsOpen(false)}>
						<img
							src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/x_btn-067cbbb80c6e60dd22a2f6302252529d5b10dd90d943cf943a80d124fb6f169c.png"
							alt="닫기"
						/>
					</button>
				</div>
				<div className={cx('category-modal__content')}>
					<div className={cx('duty-groups__container')}>
						{/* 최상위 직무 리스트 */}
						{renderDutyList(hierarchy, 0)}

						{/* 중간 직무 리스트 */}
						{dutyList.map((duty, index) =>
							duty.children && duty.children.length > 0 ? (
								<div
									className={cx(
										'duty-group__detail',
										'middle-group__section',
									)}
									key={index + 1}
								>
									{renderDutyList(duty.children, index + 1)}
								</div>
							) : null,
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterGroup;
