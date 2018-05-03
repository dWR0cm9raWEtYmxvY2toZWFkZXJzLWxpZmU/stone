import React from 'react'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import MyCard from './card'
import './index.css'

var lists = []
for (var i = 1; i < 38; i++) {
  lists.push(i)
}

const Cards = ({ list }) => {
  const fotoList = lists.map(seq => {
    if(seq !== 2){
      return <MyCard key={seq} seq={seq} thelist={list} />
    }
  })
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ maxWidth: '960px',width:'90vw' }}
    >{fotoList}</Grid>
  )
}

export default Cards
