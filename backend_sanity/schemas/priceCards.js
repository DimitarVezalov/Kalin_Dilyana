export default{
    name:'priceCards',
    title:'PriceCards',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string'
        },
        {
            name:'prices',
            title:'Prices',
            type:'array',
            of:[{ type: 'string'}]
        },
    ]
}