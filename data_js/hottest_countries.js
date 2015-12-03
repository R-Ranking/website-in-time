
        var myChart = echarts.init(document.getElementById('hottest_countries'));
        myChart.setOption({
  title : {
        text: 'Country Ranking in November 2015',
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
            data : ['ES','CA','FR','IN','JP','KR','GB','DE','CN','US']
        }
    ],
    series : [

        {
            name:'Download Counts',
            type:'bar',
            data:[398894, 411167, 446516, 466894, 479534, 505094, 586064, 714973, 731280, 7987551]
        }
    ]
             
        });