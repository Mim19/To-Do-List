import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ToDoItem from "./ToDoItems/ToDoItem.js";
import { v4 as uuidv4 } from "uuid";
import EditModal from "./ToDoItems/EditModal.js";


class App extends React.Component {
  state = {
    inputValue: "",
    items: [],
    editedItem: null,
  };

  onAddItem = () => {
    const { inputValue, items } = this.state;
    if (inputValue) {
      this.setState({
        items: [...items, { name: inputValue, id: uuidv4() }],
        inputValue: "",
      });
    }else{
        alert("error")
    }
  };
  onDeleteItem = (id) => {
    const { items } = this.state;
    const newItem = items.filter((item) => item.id !== id);
    this.setState({
      items: newItem,
    });
  };
  onEditItem = (item) => {
    this.setState({ editedItem: item });
  };
  onUpdateItem = (id, name) => {
    const { items } = this.state;
    items.map((item) => {
      if (item.id === id) {
        item.name = name;
      }
    });
  };
  onEditModalClose = () => {
    this.setState({ editedItem: null });
  };

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  renderItem = (elem, index) => {
    return (
      <ToDoItem
        key={elem.id + "_" + index}
        item={elem}
        onDelete={this.onDeleteItem}
        onEdit={this.onEditItem}
      />
    );
  };

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.onAddItem();
    }
  };

  inputProps = {
    onKeyDown: this.onKeyDown,
  };

  render() {
    const { items, editedItem } = this.state;
    return (
      <div className="App">
        <h1 className="title">To Do List</h1>
        <div className = "content">
          <TextField
            value={this.state.inputValue}
            onChange={this.onInputChange}
            id="standard-error-helper-text"
            label="To Do"
            variant="outlined"
            InputProps={this.inputProps}
          />
          <Button
            onClick={this.onAddItem}
            variant="contained"
            color="secondary"
            className="add-button"
          >
            Add
          </Button>
          <div>{items.map(this.renderItem)}</div>
          {editedItem && (
            <EditModal
              item={editedItem}
              onSave={this.onUpdateItem}
              onClose={this.onEditModalClose}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
