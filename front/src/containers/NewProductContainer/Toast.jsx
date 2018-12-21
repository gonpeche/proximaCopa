import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends React.Component {
  state = {
    open: true,
  };

  // handleClose = () => {
	// 	this.setState({
	// 		open:false
	// 	});
  // };


  render() {
    const { classes, status, handleClose, open } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open= {open}
          autoHideDuration={3000}
          // onClose={this.handleClose}
					onClose= {handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
						status == 200 ? <span id="message-id">Producto cargado correctamente</span>
						:
						<span id="message-id">Hubo un error, intenta nuevamente</span>
						// <span id="message-id">{message}</span>
						
					}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
							onClick= {handleClose}
              // onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);