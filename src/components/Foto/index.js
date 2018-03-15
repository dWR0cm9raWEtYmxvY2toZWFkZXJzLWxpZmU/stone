import React from 'react'
import Grid from 'material-ui/Grid'
import Card,{CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './index.css'
import thelist from './list.js'
import MyCard from './card'

var lists = []
for (var i=1; i<21; i++){
  lists.push(i)
}

const fotoList = lists.map((seq)=>{
  return(
    <MyCard key={seq} seq={seq}/>
  )
})

const Cards = () => (
  <Grid container justify="center" alignItems="center" style={{padding:"0 3vw"}}>
    {fotoList}
  </Grid>
)

export default Cards
