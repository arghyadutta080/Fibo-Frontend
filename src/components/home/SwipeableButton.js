import React, { Component, createRef } from 'react';
import './SwipeableButton.css';

export default class SwipeableButton extends Component {
  constructor(props) {
    super(props);
    this.slider = createRef();
    this.container = createRef();
    this.isTouchDevice = 'ontouchstart' in document.documentElement;

    this.state = {
      unlocked: false
    };
  }

  componentDidMount() {
    if (this.isTouchDevice) {
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('touchend', this.stopDrag);
    } else {
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
    }
    this.containerWidth = this.container.current.clientWidth - 50;
  }

  componentWillUnmount() {
    if (this.isTouchDevice) {
      document.removeEventListener('touchmove', this.onDrag);
      document.removeEventListener('touchend', this.stopDrag);
    } else {
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
    }
    this.unmounted = true;
  }

  onDrag = (e) => {
    if (this.unmounted || this.state.unlocked) return;
    if (this.isDragging) {
      if (this.isTouchDevice) {
        this.sliderLeft = Math.min(Math.max(0, e.touches[0].clientX - this.startX), this.containerWidth);
      } else {
        this.sliderLeft = Math.min(Math.max(0, e.clientX - this.startX), this.containerWidth);
      }
      this.updateSliderStyle();
    }
  };

  updateSliderStyle = () => {
    if (this.unmounted || this.state.unlocked) return;
    this.slider.current.style.left = `${this.sliderLeft + 50}px`;
  };

  stopDrag = () => {
    if (this.unmounted || this.state.unlocked) return;
    if (this.isDragging) {
      this.isDragging = false;
      if (this.sliderLeft > this.containerWidth * 0.9) {
        this.sliderLeft = this.containerWidth;
        if (this.props.onSuccess) {
          this.props.onSuccess();
          this.onSuccess();
        }
      } else {
        this.sliderLeft = 0;
        if (this.props.onFailure) {
          this.props.onFailure();
        }
      }
      this.updateSliderStyle();
    }
  };

  startDrag = (e) => {
    if (this.unmounted || this.state.unlocked) return;
    this.isDragging = true;
    if (this.isTouchDevice) {
      this.startX = e.touches[0].clientX;
    } else {
      this.startX = e.clientX;
    }
  };

  onSuccess = () => {
    this.container.current.style.width = `${this.container.current.clientWidth}px`;
    this.setState({
      unlocked: true
    });
  };

  getText = () => {
    return this.state.unlocked ? (this.props.text_unlocked || 'UNLOCKED') : (this.props.text || 'SLIDE');
  };

  reset = () => {
    if (this.unmounted) return;
    this.setState({ unlocked: false }, () => {
      this.sliderLeft = 0;
      this.updateSliderStyle();
    });
  };

  render() {
    return (
      <div className="ReactSwipeButton">
        <div className={`rsbContainer ${this.state.unlocked ? 'rsbContainerUnlocked' : ''}`} ref={this.container}>
          <div
            className="rsbcSlider"
            ref={this.slider}
            onMouseDown={this.startDrag}
            style={{ background: this.props.color }}
            onTouchStart={this.startDrag}
          >
            <span className="rsbcSliderText">{this.getText()}</span>
            <span className="rsbcSliderArrow"></span>
            <span className="rsbcSliderCircle" style={{ background: this.props.color }}></span>
          </div>
          <div className="rsbcText">{this.getText()}</div>
        </div>
      </div>
    );
  }
}
