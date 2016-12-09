$(function() {
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Cosumer ID',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }],
        
        
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Consumer ID', 'Node ID'],
        hideHover: 'auto',
        resize: true
    });
    
});
