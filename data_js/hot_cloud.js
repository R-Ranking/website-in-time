function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 200),
                Math.round(Math.random() * 200),
                Math.round(Math.random() * 200)
            ].join(',') + ')'
        }
    };
}

 var myChart = echarts.init(document.getElementById('hot_cloud'));
        myChart.setOption({

    series: [{
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation : [0, 45, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [
	            {
                name: "nlme",
                value: 113722,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "car",
                value: 114199,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "R6",
                value: 117124,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "curl",
                value: 120861,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "dichromat",
                value: 126590,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "labeling",
                value: 127340,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "colorspace",
                value: 132625,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "RColorBrewer",
                value: 147579,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "munsell",
                value: 147593,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "reshape2",
                value: 148932,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "gtable",
                value: 150171,
                itemStyle: createRandomItemStyle() 
            },

            {
                name: "magrittr",
                value: 159638,
                itemStyle: createRandomItemStyle()
            },
           
            {
                name: "scales",
                value: 167722,
                itemStyle: createRandomItemStyle()
            },

            {
                name: "stringi",
                value: 170182,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "plyr",
                value: 170953,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "stringr",
                value: 171733,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "digest",
                value: 179117,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "ggplot2",
                value: 219765,
                itemStyle: createRandomItemStyle()
            },
	    { 
              name: "Rcpp", 
              value:254575, 
              itemStyle: createRandomItemStyle()
	    },
            { 
              name: "RcppArmadillo", 
              value:353992, 
              itemStyle: createRandomItemStyle()
            }
        ]
    }]

             
        });
