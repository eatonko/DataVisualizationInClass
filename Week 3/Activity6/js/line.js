class Line {

  constructor(_config) {
    this.config = {
      parentElement: _config.parentElement,
      containerWidth: _config.containerWidth || 500,
      containerHeight: _config.containerHeight || 140,
      margin: { top: 10, bottom: 30, right: 10, left: 30 }
    }

    // Call a class function
    this.initVis();
  }

  initVis() {
      
    //set up vis
    let vis = this;

    // Width and height as the inner dimensions of the chart area- as before
    vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
    vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

    vis.timelineX1 = 50; //the x coordinate where the timeline begins
    vis.timelineX2 = 950;  // the x coordinate where the timeline ens
    vis.startOfTimelinesY = 100; //the y coordinate of the 2017 (the top line)
    vis.gapBetweenTimelines = 25; //how much space to put between lines 

    // Define 'svg' as a child-element (g) from the drawing area and include spaces
      // Add <svg> element (drawing space)
      vis.svg = d3.select(vis.config.parentElement)
          .attr('width', vis.config.containerWidth)
          .attr('height', vis.config.containerHeight)

    vis.svg.selectAll("line")
	  		.data(years)
			.enter()
		.append("line")
	  		.attr("stroke", "black")
	  		.attr("stroke-width", 2)
			.attr("x1", vis.timelineX1)
			.attr("x2", vis.timelineX2)
			.attr("y1", (d) => (2017 - d) * vis.gapBetweenTimelines + vis.startOfTimelinesY )
			.attr("y2", (d) => (2017 - d) * vis.gapBetweenTimelines + vis.startOfTimelinesY )


      updateVis(); //leave this empty for now...
  }


  //leave this empty for now
 updateVis() { 
   
   renderVis(); 

 }


 //leave this empty for now...
 renderVis() { 

  }



}