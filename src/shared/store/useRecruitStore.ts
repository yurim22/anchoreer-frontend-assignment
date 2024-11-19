import { create } from 'zustand';
import { IRecruits } from '../api/recruits/type';

interface IRecruitStore {
	// 이번달 공고
	recruitInfo: IRecruits[];
	setRecruitInfo: (recruitInfo: IRecruits[]) => void;

	// 선택한 공고
	selectedRecruit: IRecruits;
	setSelectedRecruit: (id: number) => void;
}

export const useRecruitStore = create<IRecruitStore>((set, get) => ({
	selectedRecruit: {
		id: 0,
		company_name: '',
		title: '',
		start_time: '',
		end_time: '',
		image_url: '',
		duty_ids: [],
	},
	setSelectedRecruit: (id: number) =>
		set({
			selectedRecruit: get().recruitInfo.find((info) => info.id === id),
		}),

	recruitInfo: [],
	setRecruitInfo: (info) => {
		const currentInfo = get().recruitInfo;
		// 현재 상태와 새로운 정보가 다를 경우에만 업데이트
		if (JSON.stringify(currentInfo) !== JSON.stringify(info)) {
			set({ recruitInfo: info });
		}
	},
}));
