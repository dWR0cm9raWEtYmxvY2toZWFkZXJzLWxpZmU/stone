import React from 'react'
import Link from 'gatsby-link'
import '../assets/styles/page.css'
import cn from '../assets/text/cn'
import Footer from '../components/Footer'
import QueueAnim from 'rc-queue-anim'
import { OverPack } from 'rc-scroll-anim'
import Banner from '../components/Banner'
import Grid from 'material-ui/Grid'
import Fotos from '../components/Foto'

const IndexPage = () => (
    <div>
        <QueueAnim key="queue" delay={300} leaveReverse={true}>
            <section key="a" className="ctn banner">
            </section>
            <section key="b" className="ctn bg1">
                <h4>{cn.intro.title}</h4>
                <div className="bar"/>
                <p className="para">{cn.intro.para1}</p>
                <p className="para">{cn.intro.para2}</p>
            </section>
            <section key="c" className="ctn">
                <h4>{cn.lookback.title}</h4>
                <div className="bar"/>
                <p className="para">{cn.lookback.para}</p>
                <Banner />                
            </section>
            <section key="d" className="ctn bg1">
                <h4>{cn.overview.title}</h4>
                <div className="bar"/>
                <div className="left">
                    <p className="para ml">{cn.overview.p1}</p>
                    <p className="para ml">{cn.overview.p2}</p>
                    <p className="para ml">{cn.overview.p3}</p>
                    <p className="para ml">{cn.overview.p5}</p>
                    <p className="para ml">{cn.overview.p6}</p>
                    <p className="para ml">{cn.overview.p7}</p>
                    <p className="para ml">{cn.overview.p4}</p>
                </div>
            </section>
            <section key="e" className="ctn">
                <h4>{cn.star.title}</h4>
                <div className="bar" />
                <div className="left">
                    <p className="para ml">{cn.star.p1}</p>
                    <p className="para ml">{cn.star.p2}</p>
                    <p className="para ml">{cn.star.p3}</p>
                </div>
            </section>
            <section key="g" className="ctn bg1">
                <h4>{cn.vip.title}</h4>
                <Fotos />
            </section>
            <section key="h" className="ctn">
                <h4>{cn.host.title}</h4>
                <div className="bar"/>
                <Grid container alignItems="center" className="m1 gridm" justify="center">
                    <Grid item xs={12} md={4} className="cctn">
                        <div className="blockgeek"/>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <p className="para m2">{cn.host.blockGeek}</p>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" className="m1 gridm" justify="center">
                    <Grid item xs={12} md={4} className="cctn"><div className="gdex" /></Grid>
                    <Grid item xs={12} md={8}><p className="para">{cn.host.gdex}</p></Grid>
                </Grid>
            </section>
            <section key="i" className="ctn bg1">
                <h4>{cn.assist.title}</h4>
                <div className="bar"/>
                <Grid container alignItems="center" className="m1 gridm" justify="center">
                    <Grid item xs={12} md={4} className="cctn"><div className="bcc" /></Grid>
                    <Grid item xs={12} md={8}><p className="para">{cn.assist.para}</p></Grid>
                </Grid>
            </section>
            <section key="j" className="ctn">
                <h4>{cn.partner.title}</h4>
                <div className="bar" />
                <Grid container justify="space-around" alignItems="center" >
                    <Grid item ><div className="cctn bs"/></Grid>
                    <Grid item ><div className="cctn bbt" /></Grid>
                    <Grid item ><div className="cctn ff" /></Grid>
                    <Grid item ><div className="cctn bf" /></Grid>
                </Grid>
            </section>
            <Footer key="k" />
        </QueueAnim>
    </div>
)

export default IndexPage
