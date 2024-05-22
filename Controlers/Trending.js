const todays =[
    {
        name: 'Openhimer',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/today/1.jpg?raw=true',
        progress: 0.96,
        date: 'Jul 21,2023',
    },
    {
        name: 'Blade Runner 2049',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/today/2.jpg?raw=true',
        progress: 0.85,
        date: 'Oct 06,2017',
    },
    {
        name: 'Kong',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/today/3.jpg?raw=true',
        progress: 0.71,
        date: 'Mar 29,2024',
    },
    {
        name: 'Kingdom of Apes',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/today/4.jpg?raw=true',
        progress: 0.72,
        date: 'May 08,2024',
    },
    {
        name: 'Logan',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/today/5.jpg?raw=true',
        progress: 0.94,
        date: 'Jan 01,2024',
    },
    {
        name: 'Abigail',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/today/6.jpg?raw=true',
        progress: 0.69,
        date: 'Apr 18,2024',
    },
    {
        name: '578 Magnum',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/today/7.jpg?raw=true',
        progress: 0.53,
        date: 'May 20,2024',
    },
];

const weeks =[
    {
        name: 'RoadHouse',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/week/1.jpg?raw=true',
        progress: 0.85,
        date: 'Jan 01,2024',
    },
    {
        name: 'Dune',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/week/2.jpg?raw=true',
        progress: 0.71,
        date: 'Mar 01,2024',
    },
    {
        name: 'Ghostbusters:',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/week/3.jpg?raw=true',
        progress: 0.68,
        date: 'Apr 19, 2024',
    },
    {
        name: 'Buffaloed',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/week/4.jpg?raw=true',
        progress: 0.75,
        date: 'Apr 18,2023',
    },
    {
        name: 'Spiderman',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/week/5.jpg?raw=true',
        progress: 0.85,
        date: 'Oct 01,2013',
    },
    {
        name: 'Warfare',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/week/6.jpg?raw=true',
        progress: 0.94,
        date: 'Jun 07,2023',
    },
    {
        name: 'The Idea of you',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/week/7.jpg?raw=true',
        progress: 0.94,
        date: 'Feb 14,2024',
    },
];

const months =[
    {
        name: 'Twilight',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/month/1.jpg?raw=true',
        progress: 0.94,
        date: 'Mar 08,2014',
    },
    {
        name: 'Mockingjay',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/month/2.jpg?raw=true',
        progress: 0.71,
        date: 'MAR 29,2024',
    },
    {
        name: 'Total Recal',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/month/3.jpg?raw=true',
        progress: 0.72,
        date: 'May 08,2024',
    },
    {
        name: 'Terminator',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/month/4.jpg?raw=true',
        progress: 0.94,
        date: 'Apr 18,2024',
    },
    {
        name: 'Bodkin',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/month/5.jpg?raw=true',
        progress: 0.94,
        date: 'Jan 01,2024',
    },
    {
        name: 'Scrooge',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/month/6.jpg?raw=true',
        progress: 0.94,
        date: 'Jan 01,2024',
    },
    {
        name: 'Monk',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/month/7.jpg?raw=true',
        progress: 0.94,
        date: 'Jan 01,2024',
    },
];

exports.getTrends = (req, res) => {
    const trend = req.param('trend');
    switch (trend) {
        case "today":
            res.send(todays)
            break;
        case "this week":
            res.send(weeks)
            break;

        case "this month":
            res.send(months)
            break;

        default:
            res.send(todays)
            break;
    }
}