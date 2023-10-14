import { create } from 'zustand';

export type ModalType = 'createCustomer' | null;

interface ModalProps {
	type: ModalType;
	data: any;
	isOpen: boolean;
	onOpen: (type: ModalType, data: any) => void;
	onClose: () => void;
}

export const useModal = create<ModalProps>((set) => ({
	type: null,
	data: {},
	isOpen: false,
	onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
	onClose: () => set({ type: null, isOpen: false }),
}));
