import {rest} from 'msw'

export const handlers = [

    rest.get('http://localhost:3000/temperatures', (req, res, ctx) => {
        let period = req.url.searchParams.get('period')
        if (period === 'months'){
        return res(
            ctx.status(200),
            ctx.json({
                items: [{
                    date: '2021-10-13',
                    temps: '12',
                },
                    {
                        date: '2021-10-14',
                        temps: '18',
                    },
                    {
                        date: '2025-10-15',
                        temps: '20',
                    },
                    {
                        date: '2021-10-16',
                        temps: '30',
                    },
                    {
                        date: '2021-10-17',
                        temps: '30',
                    },
                    {
                        date: '2022-10-18',
                        temps: '5',
                    },
                    {
                        date: '2019-10-19',
                        temps: '20',
                    },
                ]
            }),
        )}
        else {
            return res(
                ctx.status(200),
                ctx.json({
                    items: [{
                        date: '2021-10-13',
                        temps: '12',
                    },
                        {
                            date: '2021-10-14',
                            temps: '18',
                        },
                        {
                            date: '2025-09-15',
                            temps: '20',
                        },
                        {
                            date: '2021-08-16',
                            temps: '30',
                        },
                        {
                            date: '2021-08-17',
                            temps: '30',
                        },
                        {
                            date: '2022-10-18',
                            temps: '5',
                        },
                        {
                            date: '2019-10-19',
                            temps: '10',
                        },
                    ]
                }),
            )
        }
    }),


]