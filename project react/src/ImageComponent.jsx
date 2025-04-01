import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt="è un props" />
      </div>
    );
  }
}
export default ImageComponent;