import { create } from 'zustand';

interface ModalState {
	// 모달 오픈 여부
	isOpen: boolean;

	// 모달 오픈 함수
	openModal: (id: string) => void;

	// 모달 닫기 함수
	closeModal: () => void;

	// 모달 id
	id: string;
}

const useModalStore = create<ModalState>((set) => ({
	isOpen: false,
	openModal: () => {
		document.body.style.overflow = 'hidden';
		set({ isOpen: true });
	},
	closeModal: () => {
		document.body.style.overflow = 'unset';
		set({ isOpen: false });
	},
	id: '',
}));

export default useModalStore;
