import React from 'react';
import classNames from 'classnames/bind';
import styles from '../FilterGroup/FilterGroup.module.scss';
import { IHierarchy } from '@/pages/JobCalender/type/company';
import DutyItem from '../DutyItem';

const cx = classNames.bind(styles);

interface DutyListProps {
	hierarchy: IHierarchy[];
	setFilterDuty: (duty: IHierarchy) => void;
	selectedDuty?: IHierarchy;
}

const DutyList: React.FC<DutyListProps> = ({
	hierarchy,
	setFilterDuty,
	selectedDuty,
}) => {
	return (
		<ul className={cx('duty-group__list')}>
			{hierarchy.map((duty) => (
				<DutyItem
					duty={duty}
					setFilterDuty={setFilterDuty}
					key={duty.id}
					selectedDuty={selectedDuty}
				/>
			))}
		</ul>
	);
};

export default React.memo(DutyList);
