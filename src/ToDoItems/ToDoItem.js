import React from "react";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

class ToDoItem extends React.Component {
  state = {
    showDeletModal: false,
  };
  onDeleteClick = () => {
    this.setState({ showDeletModal: true });
  };
  onEditClick = () => {
    const { onEdit, item } = this.props;
    if (onEdit) {
      onEdit(item);
    }
  };
  onClose = () => {
    this.setState({ showDeletModal: false });
  };
  handleDelete = () => {
    const {
      onDelete,
      item: { id },
    } = this.props;
    if (onDelete) {
      onDelete(id);
      this.onClose();
    }
  };

  render() {
    const {
      item: { name },
    } = this.props;
    const { showDeletModal } = this.state;
    return (
      <div className="list">
        <div className="list-item">
          <div className="text-field">{name}</div>
          <div className="button-box">
            <Fab
              size="small"
              color="secondary"
              aria-label="edit"
              onClick={this.onEditClick}
              id="edit"
            >
              <EditIcon />
            </Fab>
            <IconButton
              aria-label="delete"
              onClick={this.onDeleteClick}
              variant="outlined"
              color="secondary"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <Dialog
          open={showDeletModal}
          onClose={this.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want delete item? {name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ToDoItem;
