import React from 'react'
import Grid from 'material-ui/Grid'
import Card,{CardContent} from 'material-ui/Card'
import './index.css'
import thelist from './list.js'
import TweenOne from 'rc-tween-one'

const Intro = ({seq,v}) => (
  <Card style={{textAlign:'center'}} id='cardd'>
    <div className="avatar"
         style={{ backgroundImage: 'url(' + require('../../assets/imgs/' + seq + '.png')+')' }} />
    <div className="cardctn">
      <text style={{margin:0,padding:0}} className="name">{thelist[v]["name"]}</text><br style={{margin:0,padding:0}}/>
      <text style={{margin:0,padding:0}} className="info">{thelist[v]["position"]}</text><br style={{margin:0,padding:0}}/>
      <text style={{margin:0,padding:0}} className="info">{thelist[v]["company"]}</text>
    </div>
  </Card>        
)

const Detail = ({seq,v}) => (
  <Card style={{textAlign: 'center'}} id='cardd'>
    <TweenOne className="detail"
              animation={{ y: 30, opacity: [0,1], type: 'from'}}>
      <text className="name" style={{color:'#eee',lineHeight:`1rem`}}>{thelist[v]["intro"]}</text>
    </TweenOne>
  </Card>
)

export default class MyCard extends React.Component{
  state = {
    mouse: false
  }
  render(){
    const seq = this.props.seq
    const v = "v" + seq
    return(
      <Grid item key={seq}
            onMouseEnter={()=>this.setState({mouse: true})}
            onMouseLeave={()=>this.setState({mouse: false})}>
        {this.state.mouse?<Detail seq={seq} v={v} />:<Intro seq={seq} v={v} />}
      </Grid>        
    )        
  }
}


