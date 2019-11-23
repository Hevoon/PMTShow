//含有两个图时候的样式配置
let media=[
    {
        option: {
            legend: {
                right: 'center',
                bottom: 0,
                orient: 'horizontal'
            },
            series: [
                {
                    radius: [20, '50%'],
                    center: ['25%', '50%']
                },
                {
                    radius: [30, '50%'],
                    center: ['75%', '50%']
                }
            ]
        }
    },
    {
        query: {
            minAspectRatio: 1
        },
        option: {
            legend: {
                right: 'center',
                bottom: 0,
                orient: 'horizontal'
            },
            series: [
                {
                    radius: [20, '50%'],
                    center: ['25%', '50%']
                },
                {
                    radius: [30, '50%'],
                    center: ['75%', '50%']
                }
            ]
        }
    },
    {
        query: {
            maxAspectRatio: 1
        },
        option: {
            legend: {
                right: 'center',
                bottom: 0,
                orient: 'horizontal'
            },
            series: [
                {
                    radius: [20, '50%'],
                    center: ['50%', '30%']
                },
                {
                    radius: [30, '50%'],
                    center: ['50%', '70%']
                }
            ]
        }
    },
    {
        query: {
            maxWidth: 500
        },
        option: {
            legend: {
                right: 10,
                top: '15%',
                orient: 'vertical'
            },
            series: [
                {
                    radius: [20, '50%'],
                    center: ['50%', '30%']
                },
                {
                    radius: [30, '50%'],
                    center: ['50%', '75%']
                }
            ]
        }
    }
];
module.exports=media;