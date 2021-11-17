import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          autoplay = {true}
          autoplaySpeed =  {2500}
          rtl =  {false}
        >
          {this.props.dataImages.images.map((elm) => (
            <div>
              <img
                style={{ display: "flex", width: "100%", objectFit:"cover", height: "380px" }}
                src={`http://dems.inone.uz/api${elm}`}
              />
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          style={{border:"1px solid red"}}
        >
          {this.props.dataImages.images.map((elm) => (
            <div  style={{width:"200px"}} >
              <img
                style={{ outline:"none",width:"50px", objectFit:"cover"}}
                src={`http://dems.inone.uz/api${elm}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
