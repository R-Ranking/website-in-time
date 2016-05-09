
        var myChart = echarts.init(document.getElementById('package_ranking'));
        myChart.setOption({
  title : {
        text: 'R Package Ranking in April 2016',
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

            data : ['gtable','magrittr','scales','stringi','plyr','stringr','digest','ggplot2','Rcpp','RcppArmadillo']
        
        }
    ],
    series : [

        {
            name:'Download Counts',
            type:'bar',
            data:[150171, 159638, 167722, 170182, 170953, 171733, 179117, 219765, 254575, 353992]
        }
    ]
             
        });
