export interface NotificationAdapter {
  requestPermission(): Promise<'granted' | 'denied' | 'default'>;
  sendLocalNotification(title: string, body: string): Promise<void>;
}

export const notificationAdapter: NotificationAdapter = {
  async requestPermission() {
    if (!('Notification' in window)) return 'denied';
    const result = await Notification.requestPermission();
    return result;
  },
  async sendLocalNotification(title: string, body: string) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, { body });
    }
  },
};
