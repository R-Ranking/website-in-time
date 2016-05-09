
        var myChart = echarts.init(document.getElementById('hottest_countries'));
        myChart.setOption({
  title : {
        text: 'Country Ranking in April 2016',
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
            data : ['ES','HK','JP','KR','FR','CN','IN','GB','DE','US']
        }
    ],
    series : [

        {
            name:'Download Counts',
            type:'bar',
            data:[347542, 372691, 410419, 432837, 472642, 570994, 604724, 655465, 997108, 5720329]
        }
    ]
             
        });
