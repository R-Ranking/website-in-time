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
                name: "jsonlite",
                value: 153253,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "DBI",
                value: 160413,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "dichromat",
                value: 163234,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "labeling",
                value: 164449,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "colorspace",
                value: 169581,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "munsell",
                value: 178644,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "gtable",
                value: 178758,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "RColorBrewer",
                value: 187409,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "reshape2",
                value: 187922,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "scales",
                value: 197709,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "magrittr",
                value: 202032,
                itemStyle: createRandomItemStyle() 
            },

            {
                name: "plyr",
                value: 208944,
                itemStyle: createRandomItemStyle()
            },
           
            {
                name: "stringr",
                value: 214283,
                itemStyle: createRandomItemStyle()
            },

            {
                name: "digest",
                value: 215845,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "stringi",
                value: 220655,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "mixOmics",
                value: 224417,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "ggplot2",
                value: 249214,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "rgl",
                value: 273676,
                itemStyle: createRandomItemStyle()
            },
	    { 
              name: "Rcpp", 
              value:295643, 
              itemStyle: createRandomItemStyle()
	    },
            { 
              name: "RcppArmadillo", 
              value:411464, 
              itemStyle: createRandomItemStyle()
            }
        ]
    }]

             
        });
