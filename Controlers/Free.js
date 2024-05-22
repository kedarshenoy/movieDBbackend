
const movie =[
    {
        name: 'Openhimer',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Freemovie/1.jpg?raw=true',
        progress: 0.96,
        date: 'Jul 21,2023',
    },
    {
        name: 'Blade Runner 2049',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Freemovie/2.jpg?raw=true',
        progress: 0.85,
        date: 'Oct 06,2017',
    },
    {
        name: 'Kong',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Freemovie/3.jpg?raw=true',
        progress: 0.71,
        date: 'Mar 29,2024',
    },
    {
        name: 'Kingdom of Apes',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Freemovie/4.jpg?raw=true',
        progress: 0.72,
        date: 'May 08,2024',
    },
    {
        name: 'Logan',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Freemovie/5.jpg?raw=true',
        progress: 0.94,
        date: 'Jan 01,2024',
    },
    {
        name: 'Abigail',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Freemovie/6.jpg?raw=true',
        progress: 0.69,
        date: 'Apr 18,2024',
    },
    {
        name: '578 Magnum',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Freemovie/7.jpg?raw=true',
        progress: 0.53,
        date: 'May 20,2024',
    },
];

const tv =[
    {
        name: 'Openhimer',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Frretv/1.jpg?raw=true',
        progress: 0.96,
        date: 'Jul 21,2023',
    },
    {
        name: 'Blade Runner 2049',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Frretv/2.jpg?raw=true',
        progress: 0.85,
        date: 'Oct 06,2017',
    },
    {
        name: 'Kong',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Frretv/3.jpg?raw=true',
        progress: 0.71,
        date: 'Mar 29,2024',
    },
    {
        name: 'Kingdom of Apes',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Frretv/4.jpg?raw=true',
        progress: 0.72,
        date: 'May 08,2024',
    },
    {
        name: 'Logan',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Frretv/5.jpg?raw=true',
        progress: 0.94,
        date: 'Jan 01,2024',
    },
    {
        name: 'Abigail',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Frretv/6.jpg?raw=true',
        progress: 0.69,
        date: 'Apr 18,2024',
    },
    {
        name: '578 Magnum',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Frretv/7.jpg?raw=true',
        progress: 0.53,
        date: 'May 20,2024',
    },
];



exports.getfree=(req,res)=>{
    const free=req.param('free');

    if(free==='tv'){
        res.send(tv);
    }else res.send(movie)
}