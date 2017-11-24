import React, { Component } from 'react';

export default class Modal extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      ingredients: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onIngredientsChange = this.onIngredientsChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  onIngredientsChange(event) {
    this.setState({
      ingredients: event.target.value
    });
  }

  onFormSubmit() {
    this.props.buttonClickAction(this.state.name, this.state.ingredients);

    this.setState({
      name: '',
      ingredients: ''
    });
  }

  render() {
    return (
      <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">Recipe</label>
                  <input type="text" className="form-control" id="recipient-name" value={this.state.name} onChange={this.onNameChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Ingredients</label>
                  <textarea className="form-control" id="message-text" value={this.state.ingredients} onChange={this.onIngredientsChange}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.onFormSubmit}>{this.props.buttonName}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}