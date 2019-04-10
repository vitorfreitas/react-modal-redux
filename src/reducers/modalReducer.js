export default (state = { type: 'HIDE_MODAL' }, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        type: action.type,
        modalProps: action.modalProps,
        modalType: action.modalType
      };
    case 'HIDE_MODAL':
      return {
        type: action.type
      };
    default:
      return state;
  }
};
