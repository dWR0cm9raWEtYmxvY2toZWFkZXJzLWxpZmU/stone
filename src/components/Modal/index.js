import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Modal from 'material-ui/Modal'
import Button from 'material-ui/Button'
import SendIcon from 'material-ui-icons/Send'
import Top from '../../assets/imgs/top.svg'
import LazyLoad from 'react-lazyload'

//function rand() {
//  return Math.round(Math.random() * 20) - 10;
//}

var toTop = () => {
	window.scroll(0,0)
}

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 35,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
	ctn: {
		display: 'flex',
		flexDirection: 'column'
	},
  btn: {
    backgroundColor: 'rgba(19,60,104,0.5)',
    color: 'white',
    position: 'fixed',
    bottom: '10vh',
    zIndex: 99,
		right: 0
  },
  btn2: {
    backgroundColor: 'rgba(19,60,104,0.5)',
    position: 'fixed',
		height: '20px',
    bottom: '4vh',
    zIndex: 99,
		right: 0
  },	
})

class SimpleModal extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    const { classes } = this.props

    return (
      <div className={classes.ctn}>
				<Button className={ classes.btn2} onClick={toTop}><img style={{color:'height'}} src={Top} /></Button>
        <Button classes={{ root: classes.btn }} onClick={this.handleOpen}>
          <SendIcon />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="subheading" id="modal-title">
              Invitation Letter
            </Typography>
            <br />
            <p id="simple-modal-description" style={{wordBreak:'none'}}>
              If you need invitation letter to apply for Visa, please send the following information to email:
              
            </p>
            <p style={{fontWeight: 700}}>graphene.devcon@foxmail.com</p>
            <br />
            <p style={{ fontStyle: 'italic', wordBreak:'none',borderStyle:"solid",padding: '0.2rem',borderWidth:'0.08rem' }}>
              Full name:<br/> Gender:<br/> Date of Birth:<br/>Arrival date and departure date:<br/>
            </p>
          </div>
        </Modal>
      </div>
    )
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal)

export default SimpleModalWrapped
