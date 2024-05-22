const Ontv   =[
    {
        name: 'Openhimer',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Ontv/1.jpg?raw=true',
        desc: 'Jul 21,2023',
    },
    {
        name: 'Blade Runner 2049',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Ontv/2.jpg?raw=true',
        desc: 'Oct 06,2017',
    },
    {
        name: 'Kong',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Ontv/3.jpg?raw=true',
        desc: 'Mar 29,2024',
    },
    {
        name: 'Kingdom of Apes',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Ontv/4.jpg?raw=true',
        desc: 'May 08,2024',
    },
    {
        name: 'Logan',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Ontv/5.jpg?raw=true',
        desc: 'Jan 01,2024',
    }
];
const Popular   =[
    {
        name: 'The Boys',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Popular/1.jpg?raw=true',
        desc: 'Jul 21,2023',
    },
    {
        name: 'Blade Runner 2049',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Popular/2.jpg?raw=true',
        desc: 'Oct 06,2017',
    },
    {
        name: 'Kong',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Popular/3.jpg?raw=true',
        desc: 'Mar 29,2024',
    },
    {
        name: 'Kingdom of Apes',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Popular/4.jpg?raw=true',
        desc: 'May 08,2024',
    },
    {
        name: 'Star Trek',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Popular/5.jpg?raw=true',
        desc: 'Preview-Labyrinths',
    }
];
const  Rent  =[
    {
        name: 'Openhimer',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Rent/1.jpg?raw=true',
        desc: 'Jul 21,2023',
    },
    {
        name: 'Blade Runner 2049',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Rent/2.jpg?raw=true',
        desc: 'Oct 06,2017',
    },
    {
        name: 'Kong',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Rent/3.jpg?raw=true',
        desc: 'Mar 29,2024',
    },
    {
        name: 'Kingdom of Apes',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Rent/4.jpg?raw=true',
        desc: 'May 08,2024',
    },
    {
        name: 'Logan',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Rent/5.jpg?raw=true',
        desc: 'Jan 01,2024',
    }
];
const  Streaming  =[
    {
        name: 'Openhimer',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Streaming/1.jpg?raw=true',
        desc: 'Jul 21,2023',
    },
    {
        name: 'Twisters',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Streaming/2.jpg?raw=true',
        desc: 'Official International Trailer',
    },
    {
        name: 'Kong',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Streaming/3.jpg?raw=true',
        desc: 'Mar 29,2024',
    },
    {
        name: 'Kingdom of Apes',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Streaming/4.jpg?raw=true',
        desc: 'No.1 Review',
    },
    {
        name: 'Logan',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Streaming/5.jpg?raw=true',
        desc: 'Jan 01,2024',
    }
];
const  Theater  =[
    {
        name: 'Openhimer',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Theater/1.jpg?raw=true',
        desc: 'Jul 21,2023',
    },
    {
        name: 'Blade Runner 2049',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Theater/2.jpg?raw=true',
        desc: 'Oct 06,2017',
    },
    {
        name: 'Kong',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Theater/3.jpg?raw=true',
        desc: 'Mar 29,2024',
    },
    {
        name: 'Kingdom of Apes',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Theater/4.jpg?raw=true',
        desc: 'May 08,2024',
    },
    {
        name: 'Logan',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Theater/5.jpg?raw=true',
        desc: 'Jan 01,2024',
    }
];



exports.getTrailers = (req, res) => {
    const trailer = req.param('trailer');
    switch (trailer) {
        case "Ontv":
            res.send(Ontv)
            break;
        case "Popular":
            res.send(Popular)
            break;

        case "Rent":
            res.send(Rent)
            break;
        case "Streaming":
            res.send(Streaming)
            break;

        case "Theater":
            res.send(Theater)
            break;
        default:
            res.send('no trend')
            break;
    }
}
