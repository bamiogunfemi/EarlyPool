import { Store } from "react-notifications-component";

const notification = {
  insert: "top",
  container: "bottom-center",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 5000,
    showIcon: true,
  },
};

const addNotification = (
  notificationMessage,
  notificationType,
  notificationAdditionalConfig
) => {
  Store.addNotification({
    ...notification,
    type: notificationType,
    message: notificationMessage,
    ...notificationAdditionalConfig,
  });
};

export const showError = (message, additionalConfig) => {
  addNotification(message, "danger", additionalConfig);
};

export const showSuccess = (message, additionalConfig) => {
  addNotification(message, "success", additionalConfig);
};

export const showInfo = (message, additionalConfig) => {
  addNotification(message, "info", additionalConfig);
};

export const showWarning = (message, additionalConfig) => {
  addNotification(message, "warning", additionalConfig);
};

export const showNotification = (message, additionalConfig) => {
  addNotification(message, "default", additionalConfig);
};
