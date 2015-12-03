
        var myChart = echarts.init(document.getElementById('package_ranking'));
        myChart.setOption({
  title : {
        text: 'R Package Ranking in November 2015',
        subtext: 'Data from cran-logs.rstudio.com'
    },
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        feature : {
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

            data : ['ggplot2','stringi','fma','expsmooth','fpp','tseries','Rcpp','forecast','lmtest','zoo']
        
        }
    ],
    series : [

        {
            name:'Download Counts',
            type:'bar',
            data:[198381, 209872, 230694, 231106, 231751, 238429, 249810, 250109, 253533, 304570]
        }
    ]
             
        });