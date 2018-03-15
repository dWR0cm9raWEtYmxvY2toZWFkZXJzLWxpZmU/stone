import React from 'react'
import Link from 'gatsby-link'
import '../assets/styles/page.css'
import cn from '../assets/text/cn'
import en from '../assets/text/en'
import Footer from '../components/Footer'
import QueueAnim from 'rc-queue-anim'
import { OverPack } from 'rc-scroll-anim'
import Banner from '../components/Banner'
import Grid from 'material-ui/Grid'
import Fotos from '../components/Foto'
import LazyLoad from 'react-lazyload'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Card from 'material-ui/Card'
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button'
import TweenOne from 'rc-tween-one'
import AppBar from 'material-ui/AppBar';
import enlist from '../components/foto/enlist.js'
import cnlist from '../components/foto/cnlist.js'
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import List from 'material-ui/List'

const cnbg = {
  backgroundImage: 'url(' + require('../assets/imgs/banner.png') + ')'
}
const enbg= {
  backgroundImage: 'url(' + require('../assets/imgs/banner-en.jpg') + ')'
}
const ent = {
  backgroundImage: 'url(' + require('../assets/imgs/table.jpg') + ')'
}
const cnt = {
  backgroundImage: 'url(' + require('../assets/imgs/aaa.jpg') + ')'  
}

class IndexPage extends React.Component{
  state = {
    lang: en,
    toLang: "CN",
    ttable: {  backgroundImage: 'url(' + require('../assets/imgs/table.jpg') + ')'},
    bg: { backgroundImage: 'url(' + require('../assets/imgs/banner-en.jpg') + ')'},
    list: enlist,
    right: false,
  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render(){
    let arr = []
    for (var i =1; i<8; i++){
      arr.push(i)
    }
    let arr2 = []
    for (var i =1; i<4; i++){
      arr2.push(i)
    }
    let list = arr.map((i)=>{
      return(
        <TableRow key={i} >
          <TableCell style={{minWidth: '15vw',paddingRight:'0rem',}}>
            <p>{this.state.lang.overview[`head`+i]}</p></TableCell>
          <TableCell><p>{this.state.lang.overview[`p`+i]}</p></TableCell>
        </TableRow>
      )
    })
    let list2 = arr2.map((i)=>{
      return(
        <TableRow key={i} >
          <TableCell style={{ marginTop: `2rem`,
            minWidth: '25vw',paddingRight:'0rem'}}>
            <p>{this.state.lang.star[`head`+i]}</p></TableCell>
          <TableCell><p>{this.state.lang.star[`p`+i]}</p></TableCell>
        </TableRow>
      )
    })
    const trans = () =>{
      if(this.state.lang === en){
        this.setState({
          lang:cn,toLang:"EN",ttable:cnt, bg:cnbg, list:cnlist
        })
      }else{
        this.setState({
          lang:en,toLang:"CN", ttable:ent, bg:enbg, list:enlist
        })
      }

    }
    let sideList = () => (
      <div style={{width:'10rem'}}>
        <List>hello</List>
        <List>world</List>
      </div>
    )
    return(
      <div>
        <AppBar style={{backgroundColor:'rgba(9,12,36,0)'}} className="nav" position="absolute">
          <Toolbar className="nav">
            <Button disableRipple={true}  size="small"
                    disableFocusRipple={true}
                    onClick={trans} className="trans">
              <p style={{color:'white'}}>{this.state.toLang}</p>
            </Button>            
          </Toolbar>
        </AppBar>
        <QueueAnim key="queue" delay={300} leaveReverse={true}>
          <section key="a" className="bnwrap banner" style={this.state.bg}>

          </section>
          <section key="b" className="ctn bg1">
            <h2>{this.state.lang.intro.title}</h2>
            <div className="bar"/>
            <p className="para indent">{this.state.lang.intro.para1}</p>
            <p className="para indent">{this.state.lang.intro.para2}</p>
          </section>
          <section key="c" className="ctn">
            <h2>{this.state.lang.lookback.title}</h2>
            <div className="bar"/>
            <p className="para indent">{this.state.lang.lookback.para}</p>
            <Banner />                
          </section>
          <section key="d" className="ctn bg1">
            <h2>{this.state.lang.overview.title}</h2>
            <div className="bar"/>
            <Table className="para" style={{marginTop:`1rem`}}><TableBody>{list}</TableBody></Table>
          </section>
          <section key="e" className="ctn">
            <h2>{this.state.lang.star.title}</h2>
            <div className="bar" />
            <Table style={{marginTop:`1rem`}} className="para"><TableBody>{list2}</TableBody></Table>
          </section>
          <section key="g" className="ctn bg1">
            <h2>{this.state.lang.vip.title}</h2>
            <div className="bar"/>            
            <Fotos list={this.state.list} style={{maxWidth:`80vw`}} />
          </section>
          <section key="i" className="ctn">
              <h2>{this.state.lang.sponsor.title}</h2>
              <div className="bar"/>
              <Card>
                <div className="ttable" style={this.state.ttable}/>
              </Card>
          </section>          
          <section key="h" className="ctn bg1" >
            <h2>{this.state.lang.host.title}</h2>
            <div className="bar"/>
            <Grid container alignItems="center" className="m1 gridm" justify="center">
              <Grid item xs={12} md={12} className="cctn">
                <div className="blockgeek"/>
              </Grid>
              <Grid item xs={12} md={12} style={{maxWidth: `80vw`}} >
                <p className="para indent">{this.state.lang.host.blockGeek}</p>
              </Grid>
            </Grid>
            <Grid container alignItems="center" className="gridm" justify="center">
              <Grid item xs={12} md={12} className="cctn"><div className="gdex" /></Grid>
              <Grid item xs={12} md={12} style={{maxWidth: `80vw`}}>
              <Grid item xs={3} />                
              <p className="para indent">{this.state.lang.host.gdex}</p></Grid>
            </Grid>
          </section>
          <section key="j" className="ctn">
            <h2>{this.state.lang.assist.title}</h2>
            <div className="bar"/>
            <Grid container alignItems="center" className="gridm" justify="center">
              <Grid item xs={12} md={12} className="cctn">
                <div className="bcc" style={{marginTop:`3rem`}}/>
              </Grid>
              <Grid item xs={12} md={12} style={{maxWidth: `80vw`}}>
                <p className="para indent">{this.state.lang.assist.para}</p></Grid>
            </Grid>
          </section>
          <section key="k" className="ctn">
            <h2>{this.state.lang.partner.title}</h2>
            <div className="bar" />
            <Grid container justify="space-around" alignItems="center" className="para" >
              <Grid item ><div className="cctn bs"/></Grid>
              <Grid item ><div className="cctn bbt" /></Grid>
              <Grid item ><div className="cctn ff" /></Grid>
              <Grid item ><div className="cctn bf" /></Grid>
            </Grid>
          </section>
          <section key="l" className="footer ctn" style={{color:'white'}}>
            <h5>{this.state.lang.footer.title}</h5>
            <div className="bar"></div>
            <p>{this.state.lang.footer.cp}</p>
            <p>{this.state.lang.footer.tel}</p>
            <p>{this.state.lang.footer.email}</p>
          </section>
        </QueueAnim>
      </div>
    )
  }
}

export default IndexPage
