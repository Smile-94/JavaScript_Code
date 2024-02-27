const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    library.forEach((obj)=>{
        let readerDetails = {}
        if (obj.hasOwnProperty('author')) {
            readerDetails.author = obj.author
        }
        if (obj.hasOwnProperty('title')) {
            readerDetails.title = obj.title
        }
        if (obj.hasOwnProperty('readingStatus')) {
            readerDetails.readingStatus = obj.readingStatus
        }
        console.log(`Book Name: ${readerDetails.title}, Author: ${readerDetails.author}, Reading Status: ${readerDetails.readingStatus}`);
    })
    