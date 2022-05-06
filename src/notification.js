import {notification} from "antd";

export const openNotification = (type, placement, errorMessage) => {
    notification[type]({
        message: `Error LogIn`,
        description: errorMessage,
        placement,
    });
};