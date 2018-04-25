// cp
import Grid from "material-ui/Grid";
import React from "react";

// render list
var list = ["bkb","bbt","45q","jscj","ltx","wlcj","bbqkl","BTCmedia","jj","kfztt","kyzg","wl","sycj","lxcj","hqcj","hwbq","jncj","lsw","tnqkl","tljz","31N","lsqkl","wdqkl","hxcj","lj","bhome","kg","bm","yfc","hx","sdzcj","tlcj","mrbd","bbd","bqbk","lsj","jdcj","bkw","jkb","rolainews","wlw","rgcj","kdbt"]
var grids = list.map((dir)=>{
	return (
		<Grid item key={dir}>
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
