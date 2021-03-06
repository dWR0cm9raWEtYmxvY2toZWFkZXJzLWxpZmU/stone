import React from 'react'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import TweenOne from 'rc-tween-one'
import LazyLoad from 'react-lazyload'

const Intro = ({ seq, v, list }) => (
  <div id="cardd">
    <div
      className="avatar"
      style={{
        borderRadius: '33rem',
        backgroundImage:
          'url(' + require('../../assets/imgs/' + seq + '.png') + ')',
      }}
    />
    <div className="cardctn">
      <text style={{ marginTop: 0, padding: 0 }} className="name">
        {list[v]['name']}
      </text>
      <br />
      <text style={{ margin: 0, padding: 0 }} className="info">
        {list[v]['position']}
      </text>
      {list[v]['position2']?<text style={{ margin: 0, padding: 0 }} className="info">
        <br/>{list[v]['position2']}
      </text>:<div />}
      {list[v]['position3']?<text style={{ margin: 0, padding: 0 }} className="info">
        <br/>{list[v]['position3']}
      </text>:<div />}
      <br />
    </div>
  </div>
)

const Detail = ({ seq, v, list }) => (
  <div style={{ textAlign: 'center', margin: '2rem' }} id="cardd">
    <TweenOne
      className="detail"
      animation={{ y: 30, opacity: [0, 1], type: 'from' }}
    >
      <text
        className="name"
        style={{ overflow: 'auto', color: '#eee', lineHeight: `1rem` }}
      >
        {list[v]['intro']}
      </text>
    </TweenOne>
  </div>
)

export default class MyCard extends React.Component {
  state = {
    mouse: false,
  }
  render() {
    const seq = this.props.seq
    const list = this.props.thelist
    const v = 'v' + seq
    return (
      <Grid
        item
        key={seq}
        onMouseEnter={() => this.setState({ mouse: true })}
        onMouseLeave={() => this.setState({ mouse: false })}
      >
        {
          //this.state.mouse
          //<Detail seq={seq} v={v} list={list} />
          <Intro seq={seq} v={v} list={list} />
        }
      </Grid>
    )
  }
}
