import React from 'react'
import Grid from 'material-ui/Grid'
import Card from 'material-ui/Card'
import './index.css'

const CardModel = ({seq, name}) => (
    <Card>
        <div className="avatar"
             style={{ backgroundImage: 'url(' + require('../../assets/imgs/1.png')+')' }}
        />
        <text className="it">hello</text>
    </Card>
)

const Line = []
    
const Cards = () => (
    <Grid container justify="center" alignItems="center" >
        <Grid item>
            <Card>
            <div className="avatar f1"/>
            <text className="it">hello</text>
            </Card>
        </Grid>
        <Grid item>
            <CardModel seq="f1" name="hi"/>
        </Grid>
        <Grid item>
            <CardModel seq="f2" name="hi"/>
        </Grid>        
    
    </Grid>
)

export default Cards
