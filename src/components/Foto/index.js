import React from 'react'
import Grid from 'material-ui/Grid'
import Card,{CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './index.css'
import thelist from './list.js'
console.log(thelist.v1.name)
var lists = []
for (var i=1; i<21; i++){
  lists.push(i)
}
//     
const fotoList = lists.map((seq)=>{
  const v = "v" + seq
  return(
    <Grid item key={seq} >
      <Card style={{textAlign:'center'}} id='cardd'>
        <div className="avatar"
             style={{ backgroundImage: 'url(' + require('../../assets/imgs/' + seq + '.png')+')' }} />
        <text style={{margin:0,padding:0}} className="name">{thelist[v]["name"]}</text><br style={{margin:0,padding:0}}/>
        <text style={{margin:0,padding:0}} className="info">{thelist[v]["position"]}</text><br style={{margin:0,padding:0}}/>
        <text style={{margin:0,padding:0}} className="info">{thelist[v]["company"]}</text>
      </Card>
    </Grid>
  )
})

const Cards = () => (
  <Grid container justify="center" alignItems="center" >
    {fotoList}
  </Grid>
)

export default Cards
