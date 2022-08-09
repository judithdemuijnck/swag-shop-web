export const NOTIFICATION_WISHLIST_CHANGED = "notification_wishlist_changed";

let instance = null;
const observers = {};

class NotificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    postNotification = (notificationName, data) => {
        let obs = observers[notificationName];
        for (let idx in obs) {
            const obj = obs[idx];
            obj.callBack(data);
        }
    }

    removeObserver = (observer, notificationName) => {
        const obs = observers[notificationName];

        if (obs) {
            for (let idx in obs) {
                if (observer === obs[idx].observer) {
                    obs.splice(idx, 1);
                    observers[notificationName] = obs;
                    break;
                }
            }
        }
    }

    addObserver = (notificationName, observer, callBack) => {
        const obs = observers[notificationName];

        if (!obs) {
            observers[notificationName] = [];
        }

        let obj = { observer: observer, callBack: callBack };
        observers[notificationName].push(obj);
    }

}

export default NotificationService;