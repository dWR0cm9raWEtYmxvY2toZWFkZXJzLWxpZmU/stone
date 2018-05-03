import React from "react";
import Table, {
  TableBody, TableCell, TableHead, TableRow
} from "material-ui/Table";
import Toolbar from "material-ui/Toolbar"
import Button from "material-ui/Button"
// table data
var id = 0
function createData(time, topic, speaker) {
  id += 1;
  return { id, time, topic, speaker };
}

class SimpleTable extends React.Component{
  state = {
    data: this.props.data,
    arr: 16,
    color5: `rgba(29,83,147,1)`,
    color6: ``,
  }
  handleChange = (date) => {
    if(date === 5){
      this.setState({
        data: this.props.data,
        arr: 17,
        color5: `rgba(29,83,147,1)`,
        color6: ``
      })
    }else{
      this.setState({
        data: this.props.data2,
        arr: 21,
        color5: ``,
        color6: `rgba(29,83,147,1)`
      })      
    }
  };
  render(){
    var props = this.props
    var state = this.state
    var rows = Array(state.arr).fill('naive').map((v, i) =>{
      return createData(state.data.times[i], state.data.topics[i], state.data.speakers[i])
    })
    return (
      <div>
      <Toolbar style={{display:"flex",justifyContent:"flex-end"}}>
        <Button onClick = {()=>this.handleChange(5)}
                disableRipple={true} size="small"
                style={{color:this.state.color5}}
                disableFocusRipple={true} className="trans" > 5.5 </Button>         
        <Button onClick = {()=>this.handleChange(6)}
                disableRipple={true} size="small"
                style={{color:this.state.color6}}          
                disableFocusRipple={true} className="trans" > 5.6 </Button> 
      </Toolbar>      
      <Table style={{overflowX:"auto"}}>
        <TableHead>
          <TableRow>
            <TableCell>{state.data.columns[0]}</TableCell>
            <TableCell>{state.data.columns[1]}</TableCell>
            <TableCell>{state.data.columns[2]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(n => {
             return (
               <TableRow key={n.id}>
                 <TableCell className="info">{n.time}</TableCell>
                 <TableCell className="info">{n.topic}</TableCell>
                 <TableCell className="info">{n.speaker}</TableCell>
               </TableRow>
             );
          })}
        </TableBody>
      </Table></div>
    );
  }
}

export default SimpleTable
