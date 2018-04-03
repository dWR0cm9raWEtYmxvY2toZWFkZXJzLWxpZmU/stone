import React from 'react'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import MyCard from './card'

var lists = []
for (var i = 1; i < 20; i++) {
  lists.push(i)
}

const Cards = ({ list }) => {
  const fotoList = lists.map(seq => {
    return <MyCard key={seq} seq={seq} thelist={list} />
  })
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ maxWidth: '960px',width:'90vw' }}
    >
      {fotoList}
    </Grid>
  )
}

export default Cards
