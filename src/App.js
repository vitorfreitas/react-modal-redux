import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showModal, hideModal } from './actions/modalActions';

// Modal types
import AlertModal from './components/modals/AlertModal';

const MODAL_TYPES = {
  alert: AlertModal
};

class App extends Component {
  handleClick = () => {
    const { showModal, hideModal } = this.props;

    showModal(
      {
        title: 'My Modal',
        message: 'Hi from alert modal',
        positiveButton: {
          text: 'Save',
          onClick: () => alert('Avengers 4 will be awesome.')
        },
        negativeButton: {
          text: 'Close',
          onClick: () => hideModal()
        }
      },
      'alert' // modal type
    );
  };

  render() {
    const { modalReducer } = this.props;
    const CurrentModal = MODAL_TYPES[modalReducer.modalType];

    return (
      <div>
        <button onClick={this.handleClick}>show modal</button>
        <p>Current Redux state:</p>
        <pre>{JSON.stringify(modalReducer)}</pre>

        {modalReducer.type === 'SHOW_MODAL' && (
          <CurrentModal {...modalReducer.modalProps} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  showModal: (modalProps, modalType) =>
    dispatch(showModal({ modalProps, modalType })),
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
