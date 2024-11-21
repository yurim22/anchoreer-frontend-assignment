import { IDuties } from '@/shared/api/duties/type';
import { IHierarchy } from '../type/company';

// 계층 구조를 생성하는 함수
const buildHierarchy = (
	data: IDuties[],
	parentId: number | null = null,
): IHierarchy[] => {
	return data
		.filter((item: IDuties) => item.parent_id === parentId)
		.map((item: IDuties) => ({
			id: item.id,
			name: item.name,
			children: buildHierarchy(data, item.id),
		}));
};

export default buildHierarchy;
