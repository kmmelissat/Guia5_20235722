import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
  notifications: [],
  addNotification: (message, type) => {
    const id = Date.now();
    set((state) => ({
      notifications: [...state.notifications, { id, message, type }],
    }));
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((notification) => notification.id !== id),
      }));
    }, 3000); // Desaparece después de 3 segundos
  },
}));
