import {notification} from "antd";

export const openNotification = (type, placement, title, errorMessage) => {
    notification[type]({
        message: title,
        description: errorMessage,
        placement,
    });
};