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
import Pannel from '../components/pannel'
import Speakers from '../components/speakers'
import Session from '../components/session'
import LazyLoad from 'react-lazyload'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import TweenOne from 'rc-tween-one'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Divider from 'material-ui/Divider'
import createHistory from 'history/createBrowserHistory'
import Modal from '../components/Modal'
import enlist from '../components/speakers/enlist'
import cnlist from '../components/speakers/cnlist'
import enPannelList from '../components/pannel/enlist'
import cnPannelList from '../components/pannel/cnlist'
import enSessionList from '../components/session/enlist'
import cnSessionList from '../components/session/cnlist'

console.log(enSessionList)
console.log(cnSessionList)

const cnbg = {
  backgroundImage: 'url(' + require('../assets/imgs/banner.png') + ')',
}
const enbg = {
  backgroundImage: 'url(' + require('../assets/imgs/banner-en.jpg') + ')',
}
const ent = {
  backgroundImage: 'url(' + require('../assets/imgs/table.jpg') + ')',
}
const cnt = {
  backgroundImage: 'url(' + require('../assets/imgs/aaa.jpg') + ')',
}

class IndexPage extends React.Component {
  state = {
    lang: en,
    toLang: '中文',
    ttable: {
      backgroundImage: 'url(' + require('../assets/imgs/table.jpg') + ')',
    },
    bg: {
      backgroundImage: 'url(' + require('../assets/imgs/banner-en.jpg') + ')',
    },
    list: enlist,
    pannelList: enPannelList,
    sessionList: enSessionList,
    right: false,
  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }
  render() {
    let arr = []
    for (var i = 1; i < 8; i++) {
      arr.push(i)
    }
    let arr2 = []
    for (var i = 1; i < 4; i++) {
      arr2.push(i)
    }
    let faqlist = []
    for (var i = 1; i < 6; i++){
      faqlist.push(i)
    }
    let faqRenderList = faqlist.map(i => {
      let qnum = 'q' + i
      let anum = 'a' + i
      return(
        <div key={i} style={{marginBottom: '2rem'}}>
          <p><b style={{color:"rgba(29,83,147,1)"}}>Q{i}: {this.state.lang.faq[qnum]}</b></p><br/>
          <p className="indent">{this.state.lang.faq[anum]}</p>
        </div>
      )
    })
    let list = arr.map(i => {
      return (
        <TableRow key={i}>
          <TableCell style={{ minWidth: '15vw', paddingRight: '0rem' }}>
            <p>{this.state.lang.overview[`head` + i]}</p>
          </TableCell>
          <TableCell>
            <p>{this.state.lang.overview[`p` + i]}</p>
          </TableCell>
        </TableRow>
      )
    })
    let list2 = arr2.map(i => {
      return (
        <TableRow key={i}>
          <TableCell
            style={{
              marginTop: `2rem`,
              minWidth: '25vw',
              paddingRight: '0rem',
            }}
          >
            <p >{this.state.lang.star[`head` + i]}</p>
          </TableCell>
          <TableCell>
            <p>{this.state.lang.star[`p` + i]}</p>
          </TableCell>
        </TableRow>
      )
    })
    const trans = () => {
      if (this.state.lang === en) {
        this.setState({
          lang: cn,
          toLang: 'English',
          ttable: cnt,
          bg: cnbg,
          list: cnlist,
          pannelList: cnPannelList,
          sessionList: cnSessionList          
        })
      } else {
        this.setState({
          lang: en,
          toLang: '中文',
          ttable: ent,
          bg: enbg,
          list: enlist,
          pannelList: enPannelList,
          sessionList: enSessionList
        })
      }
    }
    const sideList = () => (
      <List>
        <ListItem button>
          <p style={{ color: 'white' }}>hello</p>
        </ListItem>
      </List>
    )

    return (
      <div>
        <LazyLoad height={0}>
          {this.state.lang===en?<Modal />:<div />}
        </LazyLoad>
        <LazyLoad height={0}>
          <AppBar
            style={{ backgroundColor: `rgba(9,12,36,0.3)` }}
            className="nav"
            position="fixed"
          >
            <Toolbar className="nav">
              <div className="rowlist">
                <a href={this.state.lang.ticket}
                   style={{ textDecoration: 'none' }}
                >
                  <Button size="small" className="trans"
                          style={{
                            color: 'white',
                            borderRadius: '33rem',
                            backgroundColor: 'rgba(213,168,69,1)',
                          }}
                  >
                    {this.state.lang.menu[5]}
                  </Button>
                </a>                
                <Button
                  disableRipple={true}
                  size="small"
                  disableFocusRipple={true}
                  onClick={trans}
                  className="trans"
                  style={{ color: 'white', display: 'flex' }}
                >
                  {this.state.toLang}
                </Button>                

              </div>

              <div className="menubtn">
                <IconButton onClick={this.toggleDrawer('right', true)}>
                  <MenuIcon style={{ color: 'white' }} />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </LazyLoad>
        <LazyLoad height={0}>
          <Drawer
            anchor="right"
            open={this.state.right}
            onClose={this.toggleDrawer('right', false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('right', false)}
              onKeyDown={this.toggleDrawer('right', false)}
            >
              <List className="drawerlist">
                <a
                  href={this.state.lang.ticket}
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button style={{ color: 'white' }}>
                    {this.state.lang.menu[5]}
                  </ListItem>
                </a>
              </List>
            </div>
          </Drawer>
        </LazyLoad>
        <section className="bnwrap banner" style={this.state.bg} />
        <LazyLoad height={200}>
          <section className="bg1" id="introductin">
            <TweenOne
              className="ctn"
              animation={{ x: -100, type: 'from', duration: 720, opacity: 0 }}
            >
              <h2>{this.state.lang.intro.title}</h2>
              <div className="bar" />
              <p className="para indent ">{this.state.lang.intro.para1}</p>
              <p style={{width:'100%'}} className="para indent ">{this.state.lang.intro.para2}</p>
            </TweenOne>
          </section>
        </LazyLoad>
        <section>
          <LazyLoad height={100}>
            <TweenOne
              className="ctn"
              animation={{ x: -100, type: 'from', duration: 720, opacity: 0 }}
            >
              <h2>{this.state.lang.lookback.title}</h2>
              <div className="bar" />
              <p className="para indent">{this.state.lang.lookback.para}</p>
              <Banner className="picintro" />
            </TweenOne>
          </LazyLoad>
        </section>
        <section className="ctn bg1">
          <LazyLoad height={200}>
            <TweenOne
              style={{ alignItems: 'center',justifyContent: 'center',display:'flex',flexDirection:'column'}}              
              animation={{ x: -100, type: 'from', duration: 720, opacity: 0 }}
            >
              <h2>{this.state.lang.overview.title}</h2>
              <div className="bar" />
              <Table className="para" style={{ marginTop: `1rem` }}>
                <TableBody>{list}</TableBody>
              </Table>
            </TweenOne>
          </LazyLoad>
        </section>
        <section key="e" className="ctn">
          <LazyLoad height={200}>
            <TweenOne
              style={{ alignItems: 'center',justifyContent: 'center',display:'flex',flexDirection:'column'}}
              animation={{ x: -100, type: 'from', duration: 720, opacity: 0 }}
            >
              <h2>{this.state.lang.star.title}</h2>
              <div className="bar" />
              <Grid container>
                <Grid item xs={4} className="starctn">
                  <div className="roundicon closedoor"/>
                  <p style={{margin:'1rem 0',color: 'rgba(29,83,147,1)'}}>{this.state.lang.star.head1}</p>
                  <p className="info">{this.state.lang.star.p1}</p>
                </Grid>
                <Grid item xs={4} className="starctn">
                  <div className="roundicon roundtable "/>
                  <p style={{margin:'1rem 0',color: 'rgba(29,83,147,1)'}}>{this.state.lang.star.head2}</p>
                  <p className="info">{this.state.lang.star.p2}</p>
                </Grid>
                <Grid item xs={4} className="starctn">
                  <div className="roundicon eos"/>
                  <p style={{margin:'1rem 0',color: 'rgba(29,83,147,1)'}}>{this.state.lang.star.head3}</p>
                  <p className="info">{this.state.lang.star.p3}</p>
                </Grid>                
              </Grid>
            </TweenOne>
          </LazyLoad>
        </section>
        
        <section key="g" className="ctn bg1" id="speakers">
          <LazyLoad height={1}>
            <TweenOne 
              animation={{ x: -100, type: 'from', duration: 720, opacity: 0 }}
              style={{ alignItems: 'center',justifyContent: 'center',display:'flex',flexDirection:'column'}}
            >
              <h2>{this.state.lang.pannel.title}</h2>
              <div className="bar" />
              <Pannel list={this.state.pannelList} style={{  maxWidth: '960px',width:'90vw' }} />
              <h2>{this.state.lang.session.title}</h2>
              <div className="bar" />
              <Session list={this.state.sessionList} style={{  maxWidth: '960px',width:'90vw' }} />
              <h2>{this.state.lang.vip.title}</h2>
              <div className="bar" />
              <Speakers list={this.state.list} style={{  maxWidth: '960px',width:'90vw' }} />
            </TweenOne>
          </LazyLoad>
        </section>
        <LazyLoad height={100}>
          <TweenOne
            animation={{ x: -100, type: 'from', duration: 720, opacity: 0 }}
          >
            <section className="ctn" id="faq">
              <h2>{this.state.lang.faq.title}</h2>
              <div className="bar" />
              <div style={{maxWidth:'960px'}}>
                {faqRenderList}
              </div>
            </section>
          </TweenOne>
        </LazyLoad>        
        <section id="host" className="ctn bg1">
          <LazyLoad height={100} offset={100}>
            <TweenOne
              style={{ alignItems: 'center',justifyContent: 'center',display:'flex',flexDirection:'column'}}
              animation={{ x: -100, type: 'from', duration: 720, opacity: 0 }}
            >
              <h2>{this.state.lang.host.title}</h2>
              <div className="bar" />
              <Grid
                container
                alignItems="center"
                className="m1 gridm"
                justify="center"
              >
                <Grid item xs={12} md={12} className="cctn">
                  <div className="organizer blockgeek" />
                </Grid>
                <Grid item xs={12} md={12} style={{ maxWidth: '960px',width:'90vw;' }}>
                  <p className="indent">{this.state.lang.host.blockGeek}</p>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                className="gridm"
                justify="center"
              >
                <Grid item xs={12} md={12} className="cctn">
                  <div className="organizer gdex" />
                </Grid>
                <Grid item xs={12} md={12} style={{ maxWidth: '960px' }}>
                  <Grid item xs={3} />
                  <p className="indent">{this.state.lang.host.gdex}</p>
                </Grid>
              </Grid>
            </TweenOne>
          </LazyLoad>
        </section>
        <LazyLoad height={100}>
          <TweenOne
            className="ctn"
            animation={{ x: -100, type: 'from', duration: 720, opacity: 0 }}
          >
            <h2>{this.state.lang.assist.title}</h2>
            <div className="bar" />
            <Grid
              container
              alignItems="center"
              className="gridm"
              justify="center"
            >
              <Grid item xs={12} md={12} className="cctn">
                <div className="organizer bcc" />
              </Grid>
              <Grid item xs={12} md={12} style={{ maxWidth: `960px` }}>
                <p className="indent">{this.state.lang.assist.para}</p>
              </Grid>
              <Grid item xs={12} md={12} className="cctn">
                <div className="organizer bs" />
              </Grid>
              <Grid item xs={12} md={12} style={{ maxWidth: `960px` }}>
                <p className="indent">{this.state.lang.assist.para2}</p>
              </Grid>
              <Grid item xs={12} md={12} className="cctn">
                <div className="organizer bw" />
              </Grid>
              <Grid item xs={12} md={12} style={{ maxWidth: `960px` }}>
                <p className="indent">{this.state.lang.assist.para3}</p>
              </Grid>
              <Grid item xs={12} md={12} className="cctn">
                <div className="organizer bh" />
              </Grid>
              <Grid item xs={12} md={12} style={{ maxWidth: `960px` }}>
                <p className="indent">{this.state.lang.assist.para4}</p>
              </Grid>
              <Grid item xs={12} md={12} className="cctn">
                <div className="organizer bf" />
              </Grid>
              <Grid item xs={12} md={12} style={{ maxWidth: `960px` }}>
                <p className="indent">{this.state.lang.assist.para5}</p>
              </Grid>                            
            </Grid>
            <h2 style={{marginTop:'2rem'}}>{this.state.lang.partner.title}</h2>
            <div className="bar" />
            <Grid
              container
              justify="space-around"
              alignItems="center"
              className="para"
            >
              <Grid item><div className="cctn partner bbt" /></Grid>
              <Grid item>
                <div className="cctn partner d45" />
              </Grid>              
            </Grid>
            <h2 style={{marginTop:'2rem'}}>{this.state.lang.sponsor.title}</h2>
            <div className="bar" />
            <Grid
              container
              justify="space-around"
              alignItems="center"
              className="para"
            >
              <Grid item><div className="cctn partner cp" /></Grid>
            </Grid>
          </TweenOne>
        </LazyLoad>
        <section id="contact"
                 key="l"
                 className="footer ctn"
                 style={{ color: 'white', height: 'auto' }}
        >
          <h5>{this.state.lang.footer.title}</h5>
          <div className="bar" style={{ marginBottom: '1rem' }} />
          <Grid container style={{ maxWidth: '960px' }}>
            <Grid item xs={12} sm={6} md={4} className="ftgrid">
              <div className=" sr">
                <div className="fticon ftcp" />
                <div className="ftgrid">
                  <p>{this.state.lang.footer.cp}</p>
                  <p
                    style={{
                      fontSize: '1rem',
                      marginTop: '0.7rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Linda
                  </p>
                  <p>{this.state.lang.footer.tel}</p>
                  <p>{this.state.lang.footer.email}</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="ftgrid">
              <div className="sr">
                <div className="fticon ftchat" />
                <div className="ftgrid">
                  <p>{this.state.lang.footer.consult}</p>
                  <p>{this.state.lang.footer.info}</p>
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={2} className="ftgrid">
              <div className="sr">
                <div className="fticon weibo" />
                <div className="ftgrid">
                  <p>{this.state.lang.footer.weibo}</p>
                  <div className="qr qrw" />
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={2} className="ftgrid">
              <div className="sr">
                <div className="fticon twitter" />
                <div className="ftgrid">
                  <p>{this.state.lang.footer.twitter}</p>
                  <div className="qr qrt" />
                </div>
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
    )
  }
}

export default IndexPage
