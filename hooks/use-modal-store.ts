import { create } from 'zustand';

export type ModalType = 'createCustomer' | 'editCustomer' | null;

interface ModalProps {
	type: ModalType;
	payload: any;
	isOpen: boolean;
	onOpen: (type: ModalType, data: any) => void;
	onClose: () => void;
	resetPayload: () => void;
}

export const useModal = create<ModalProps>((set) => ({
	type: null,
	payload: {},
	isOpen: false,
	onOpen: (type, payload = {}) => set({ isOpen: true, type, payload }),
	onClose: () => set({ type: null, isOpen: false }),
	resetPayload: () => set({ payload: {} }),
}));
