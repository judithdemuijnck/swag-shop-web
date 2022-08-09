// Singleton Data Service

import NotificationService, { NOTIFICATION_WISHLIST_CHANGED } from "./notification-service";

const ns = new NotificationService();
let instance = null;
const wishlist = [];

class DataService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    itemOnWishlist = item => {
        for (let idx in wishlist) {
            if (wishlist[idx]._id === item._id) {
                return true;
            }
        }
        return false;
    }

    addToWishlist = item => {
        wishlist.push(item);
        ns.postNotification(NOTIFICATION_WISHLIST_CHANGED, wishlist);
    }

    removeFromWishlist = item => {
        for (let idx in wishlist) {
            if (item._id === wishlist[idx]._id) {
                wishlist.splice(idx, 1);
                ns.postNotification(NOTIFICATION_WISHLIST_CHANGED, wishlist);
                break;
            }
        }
    }
}

export default DataService;