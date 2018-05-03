import React from "react";
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table"

// table data
var id = 0
function createData(time, topic, speaker) {
  id += 1;
  return { id, time, topic, speaker };
}




function SimpleTable(props) {
  
  var rows = Array(17).fill('naive').map((v, i) =>{
    return createData(props.data.times[i], props.data.topics[i], props.data.speakers[i])
  })
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{props.data.columns[0]}</TableCell>
          <TableCell>{props.data.columns[1]}</TableCell>
          <TableCell>{props.data.columns[2]}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(n => {
           return (
             <TableRow key={n.id}>
               <TableCell><p>{n.time}</p></TableCell>
               <TableCell><p>{n.topic}</p></TableCell>
               <TableCell><p>{n.speaker}</p></TableCell>
             </TableRow>
           );
        })}
      </TableBody>
    </Table>
  );
}

export default SimpleTable
