this.Graph = Plotly.newPlot(
    this.Graph.nativeElement, //our viewchild element
    this.data, //data provided
    { //here starts the layout definition (keep in mind the commas)
        autoexpand: "true",
        autosize: "true",
        width: window.innerWidth - 200, //we give initial width, so if the
                                        //graph is rendered while hidden, it
                                        //takes the right shape
        margin: {
            autoexpand: "true",
            margin: 0
        },
        offset: 0,
        type: "scattergl",
        title: name, //Title of the graph
        hovermode: "closest",
        xaxis: {
            linecolor: "black",
            linewidth: 2,
            mirror: true,
            title: "Time (s)",
            automargin: true
        },
        yaxis: {
            linecolor: "black",
            linewidth: 2,
            mirror: true,
            automargin: true
            title: 'Any other Unit'
        }
    },
    { //this is where the configuration is defined
        responsive: true, //important to keep graph responsive
        scrollZoom: true
    });
