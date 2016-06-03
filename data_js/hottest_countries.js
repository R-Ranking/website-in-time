
        var myChart = echarts.init(document.getElementById('hottest_countries'));
        myChart.setOption({
  title : {
        text: 'Country Ranking in May 2016',
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
            data : ['ES','JP','AU','KR','FR','CN','IN','GB','DE','US']
        }
    ],
    series : [

        {
            name:'Download Counts',
            type:'bar',
            data:[495919, 499647, 499886, 506395, 556978, 693758, 712692, 842241, 1703396, 5995739]
        }
    ]
             
        });
