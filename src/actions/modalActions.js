export const showModal = ({ modalProps, modalType }) => ({
  type: "SHOW_MODAL",
  modalProps,
  modalType
});

export const hideModal = () => ({
  type: "HIDE_MODAL"
});
