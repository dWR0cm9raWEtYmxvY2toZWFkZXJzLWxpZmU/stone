import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import Pagination from './docs/src/modules/components/Pagination'
import SupportTouch from './docs/src/modules/components/SupportTouch'
import './index.css'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


class DemoAutoPlay extends Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };
  render() {
    const { index } = this.state;
    return (
      <SupportTouch >
        <div className="root" style={{maxWidth:'960px',maxHeight:'480px'}}>
          <AutoPlaySwipeableViews
            index={index}
            onChangeIndex={this.handleChangeIndex}
          >
            <div className="foto foto1"></div>
            <div className="foto foto2"></div>
            <div className="foto foto3"></div>
            <div className="foto foto4"></div>
          </AutoPlaySwipeableViews>
          <Pagination
            dots={4}
            index={index}
            onChangeIndex={this.handleChangeIndex}
          />
        </div>
      </SupportTouch>
    );
  }
}

export default DemoAutoPlay;
