import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import SupportTouch from 'docs/src/modules/components/SupportTouch'

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
}

function DemoResitance() {
  return (
    <SupportTouch>
      <SwipeableViews resistance>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          slide n°1
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          slide n°2
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          slide n°3
        </div>
      </SwipeableViews>
    </SupportTouch>
  )
}

export default DemoResitance
