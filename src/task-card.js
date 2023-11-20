import { Component } from "react";

class Card extends Component {
  render() {
    const { title, description, image, price } = this.props;

    return (
      <div className="flex">
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <h1>{price}</h1>
        </div>
      </div>
      </div>
    );
  }
}

export default Card;
