let plotData$ = this.getRequest.getPlotData(link).subscribe(
    res => {
        this.receivedData = res;
    // formatting of the data goes here.
        plotData$.unsubscribe();
    }
