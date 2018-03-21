import React from 'react'
import Grid from 'material-ui/Grid'
import Card,{CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './index.css'
import MyCard from './card'

var lists = []
for (var i=1; i<21; i++){
  lists.push(i)
}



const Cards = ({list}) => {
  const fotoList = lists.map((seq)=>{
    return(
      <MyCard key={seq} seq={seq} thelist={list}/>
    )
  })
  
  return(
    <Grid container justify="center" alignItems="center" style={{maxWidth:'960px',padding:"0 3vw"}}>
      {fotoList}
    </Grid>
  )
}

export default Cards
