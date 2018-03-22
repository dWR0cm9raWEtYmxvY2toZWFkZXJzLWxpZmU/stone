import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import SendIcon from 'material-ui-icons/Send';
import LazyLoad from 'react-lazyload'

//function rand() {
//  return Math.round(Math.random() * 20) - 10;
//}

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 35,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  btn: {
    backgroundColor: 'rgba(19,60,104,0.5)',
    color: 'white',
    position: 'fixed',
    bottom: '10vh',
    zIndex: 99
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button classes={{root:classes.btn}}
                onClick={this.handleOpen}>
          <LazyLoad height={0}><SendIcon /></LazyLoad>
          <p>&nbsp; Invitation Letter</p></Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Invitation Letter
            </Typography><br/>
            <Typography variant="subheading" id="simple-modal-description">
              If you need invitation letter to apply Visa, please send the following infomation to email:graphene.devcon@foxmail.com:
            </Typography><br/>
            <Typography style={{fontStyle:'italic'}}>Full name, Gender, Date of Birth, Arrival date and depart date.
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
