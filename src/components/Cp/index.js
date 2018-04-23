// cp
import Grid from "material-ui/Grid";
import React from "react";

// render list
var list = ["d45","ac","bbt","bcb","be","bn","br","ce","cs","cu","cw","fm","ge","he","me","te","the","tl","xo"]
var grids = list.map((dir)=>{
	return (
		<Grid item>
			<div className="cctn partner" style={{backgroundImage: "url(" + require(`../../assets/imgs/cpm/${dir}.jpg`) + ")"}} />
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
