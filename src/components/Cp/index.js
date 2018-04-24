// cp
import Grid from "material-ui/Grid";
import React from "react";

// render list
var list = ["bkb","bbt","45q","jscj","ltx","wlcj","bbqkl","BTCmedia","jj","kfztt","kyzg","wl","sycj","lxcj","hqcj","hwbq","jncj","lsw","tnqkl","tljz","31N","lsqkl","wdqkl","hxcj","lj","yfc","hx","sdzcj","tlcj","mrbd","bbd","bqbk","lsj","jdcj","jkb","rolainews","wlw","rgcj","kdbt"]
var grids = list.map((dir)=>{
	return (
		<Grid item>
			<div className="cctn partner" style={{backgroundImage: "url(" + require(`../../assets/imgs/cpm/${dir}.png`) + ")"}} />
		</Grid>
	)
})


// main
var cp = () => (
  <Grid
    container
    justify="space-around"
    alignItems="center"
    className="para"
  >
		{grids}
  </Grid>
)

export default cp
