
        var myChart = echarts.init(document.getElementById('package_ranking'));
        myChart.setOption({
  title : {
        text: 'R Package Ranking in May 2016',
        subtext: 'Data from cran-logs.rstudio.com',
	sublink: 'http://cran-logs.rstudio.com'
    },
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: true},
	    restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',

            data : ['magrittr','plyr','stringr','digest','stringi','mixOmics','ggplot2','rgl','Rcpp','RcppArmadillo']
        
        }
    ],
    series : [

        {
            name:'Download Counts',
            type:'bar',
            data:[202032, 208944, 214283, 215845, 220655, 224417, 249214, 273676, 295643, 411464]
        }
    ]
             
        });
