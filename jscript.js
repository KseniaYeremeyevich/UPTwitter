;(function() {
    let posts = [
        {
            id: '1',
            description: 'Oh, I know that they’ll be better days\n' +
                'Oh, that sunshine bout to come my way\n',
            createdAt: new Date('2020-04-01T11:00:00'),
            author: 'Ksenia',
            photoLink: 'https://deita.ru/media/images/paris-2499022_960_720.2e16d0ba.fill-950x690-c100.jpg',
            hashTags: [
                'trip', 'dream', 'france'
            ],
            likes: [
                'April', 'Username'
            ]
        },

        {
            id: '2',
            description: 'May we never ever shed another tear for today\n' +
                'Cause oh, I know that they’ll be better days\n',
            createdAt: new Date('2020-04-01T13:00:00'),
            author: 'Trip Agency',
            photoLink: 'https://www.orangesmile.com/extreme/img/main/la-conciergerie_1.jpg',
            hashTags: [
                'castle', 'summer'
            ],
            likes: [
                'Ksenia'
            ]
        },

        {
            id: '3',
            description: 'Waking up in California\n' +
                'But these clouds they won’t go away\n' +
                'Everyday is like another storm, yeah',
            createdAt: new Date('2020-04-01T15:00:00'),
            author: 'Username',
            photoLink: 'https://weatlas.com/img/landmarks/eabd42573a270ddff5bfcd0868823f4d.jpg',
            hashTags: [
                'dream', 'house', 'summer'
            ],
            likes: [
                'Trip Agency', 'April'
            ]
        },

        {
            id: '4',
            description: 'I’m just trying not to go insane',
            createdAt: new Date('2020-04-01T17:00:00'),
            author: 'Galaxy',
            photoLink: 'https://bienvenue.ru/wp-content/uploads/2019/09/France_Houses_Coast_Menton_525118_3840x2400-e1568662151301-1024x684.jpg',
            hashTags: [
                'menton', 'sea', 'summer'
            ],
            likes: [
                'Username', 'Galaxy', 'April'
            ]
        },

        {
            id: '5',
            description: 'Yeah, in the city shining so bright\n' +
                'So many dark nights, so many dark days\n',
            createdAt: new Date('2020-04-01T19:16:26'),
            author: 'The Queen of Spades',
            photoLink: 'https://cs8.pikabu.ru/post_img/big/2018/03/16/0/1521149430122584598.jpg',
            hashTags: [
                'nice', 'france', 'sea'
            ],
            likes: [
                'Ksenia', 'Username', 'Galaxy'
            ]
        },

        {
            id: '6',
            description: 'But every time I feel the paranoia\n' +
                'I close my eyes and I pray\n',
            createdAt: new Date('2020-04-01T21:00:00'),
            author: 'Username',
            photoLink: 'https://www.votpusk.ru/country/ctimages/new/fr186.jpg',
            hashTags: [
                'ez', 'view', 'dream', 'trip'
            ],
            likes: [
                'April', 'The Queen of Spades'
            ]
        },

        {
            id: '7',
            description: 'Oh, I know that they’ll be better days\n' +
                'Oh, that sunshine bout to come my way\n',
            createdAt: new Date('2020-04-01T23:00:00'),
            author: 'April',
            photoLink: 'https://www.net-provence.com/villes/antibes/antibes.jpg',
            hashTags: [
                'france', 'sea'
            ],
            likes: [
                'Ksenia', 'Galaxy'
            ]
        },

        {
            id: '8',
            description: 'May we never ever shed another tear for today\n' +
                'Cause oh, I know that they’ll be better days',
            createdAt: new Date('2020-04-02T12:00:00'),
            author: 'Trip Agency',
            photoLink: 'https://cdn.lecagnard.com/img/hotel-cagnard-french-riviera/village-medieval-haut-de-cagnes-1.jpg',
            hashTags: [
                'trip', 'house'
            ],
            likes: [
                'Ksenia'
            ]
        },

        {
            id: '9',
            description: 'Been waking up to a new year\n' +
                'Got the past a million miles away',
            createdAt: new Date('2020-04-02T18:28:00'),
            author: 'Galaxy',
            photoLink: 'https://i.pinimg.com/originals/c3/23/af/c323af12c4785114801657ffbb5ebb65.jpg',
            hashTags: [
                'castle'
            ],
            likes: [
                'The Queen of Spades', 'Trip Agency'
            ]
        },
        
        {
            id: '10',
            description: 'I’m waking up with a new fear\n' +
                'But I know it’ll wash away',
            createdAt: new Date('2020-04-02T23:59:59'),
            author: 'April',
            photoLink: 'https://frenchriviera.travel/wp-content/uploads/2018/05/saint-paul-de-vence5.jpg',
            hashTags: [
                'house', 'summer'
            ],
            likes: [
                'Galaxy'
            ]
        },

        {
            id: '11',
            description: 'Whatever you do don’t worry bout me\n' +
                'I’m thinking bout you, don’t worry bout us\n',
            createdAt: new Date('2020-04-03T01:38:00'),
            author: 'The Queen of Spades',
            photoLink: 'https://ibi-co.com/images/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F.jpg',
            hashTags: [
                'trip'
            ],
            likes: [
                'Ksenia', 'Username'
            ]
        },

        {
            id: '12',
            description: 'Cause in the morning everything can change, yeah\n' +
                'And time will tell you it does',
            createdAt: new Date('2020-04-03T13:07:23'),
            author: 'Ksenia',
            photoLink: 'https://suitcasemag.com/wp-content/uploads/2019/08/le-roch-restaurant-foodie-france.jpg',
            hashTags: [
                'france', 'dream'
            ],
            likes: [
                'Username', 'Galaxy', 'Trip Agency'
            ]
        },

        {
            id: '13',
            description: 'Oh, I know that they’ll be better days\n' +
                'Oh, that sunshine bout to come my way',
            createdAt: new Date('2020-04-03T21:35:00'),
            author: 'Username',
            photoLink: 'https://omotgtravel.com/wp-content/uploads/2020/01/VER1011-C.Recoura.jpg',
            hashTags: [
                'summer', 'trip'
            ],
            likes: [
                'Galaxy', 'The Queen of Spades'
            ]
        },

        {
            id: '14',
            description: 'May we never ever shed another tear for today\n' +
                'Cause oh, I know that they’ll be better days',
            createdAt: new Date('2020-04-04T08:15:00'),
            author: 'Galaxy',
            photoLink: 'https://live.staticflickr.com/4429/36126398733_382da0745f_b.jpg',
            hashTags: [
                'hotel', 'nice'
            ],
            likes: [
                'April'
            ]
        },

        {
            id: '15',
            description: 'Better days\n' +
                'Better days',
            createdAt: new Date('2020-04-04T17:23:00'),
            author: 'April',
            photoLink: 'https://s23514.pcdn.co/wp-content/uploads/2019/03/secrets_of_eastern_france-1140x1425.jpg',
            hashTags: [
                'castle'
            ],
            likes: [
                'Galaxy', 'Ksenia'
            ]
        },

        {
            id: '16',
            description: 'Better days\n' +
                'Better days',
            createdAt: new Date('2020-04-04T22:12:00'),
            author: 'Trip Agency',
            photoLink: 'https://hospitality-on.com/sites/default/files/2017-10/paris-1836415_1920.jpg',
            hashTags: [
                'france', 'dream'
            ],
            likes: [
                'April', 'Username'
            ]
        },

        {
            id: '17',
            description: 'May we never ever shed another tear for today',
            createdAt: new Date('2020-04-05T15:47:00'),
            author: 'Galaxy',
            photoLink: 'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/002/047/slideshow/20e26003f58a62e8b98518d754c26bbf/france-paris-louvre-at-dusk.jpg',
            hashTags: [
                'dream'
            ],
            likes: [
                'Trip Agency'
            ]
        },

        {
            id: '18',
            description: 'Cause oh, I know that they’ll be better days',
            createdAt: new Date('2020-04-06T09:34:00'),
            author: 'Username',
            photoLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pont-saint-benezet-on-rhone-river-and-avignon-royalty-free-image-1138166686-1555335845.jpg',
            hashTags: [
                'sea', 'trip'
            ],
            likes: [
                'April', 'Galaxy'
            ]
        },


        {
            id: '19',
            description: 'May we never ever shed another tear for today',
            createdAt: new Date('2020-04-07T17:00:00'),
            author: 'April',
            photoLink: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-527400,resizemode-1,msid-69024736/ask-the-travel-expert-how-best-to-plan-a-family-vacation-to-france.jpg',
            hashTags: [
                'house'
            ],
            likes: [
                'Username', 'Trip Agency'
            ]
        },

        {
            id: '20',
            description: 'Cause oh, I know that they’ll be better days',
            createdAt: new Date('2020-04-08T17:00:00'),
            author: 'Galaxy',
            photoLink: 'https://www.westjet.com/assets/wj-web/images/destinations/europe/dfracdg/Notre-dame-gargoyle-with-Paris-cityscape-and-Eiffel-Tower-737x426.jpg',
            hashTags: [
                'france', 'view'
            ],
            likes: [
                'The Queen of Spades'
            ]
        }
    ];

   function getPosts(skip = 0, top = 10, filterConfig = undefined){
       let resultPosts = posts;

       if((typeof skip !== 'number') || (typeof top !== 'number')){
           console.log('Types Error');
           return;
       }

       if(filterConfig) {
           Object.keys(filterConfig).forEach((key) => {
               switch (key) {
                   case 'dateFrom':
                       resultPosts = resultPosts.filter(post => post.createdAt >= new Date(filterConfig.dateFrom));
                       break;
                   case 'dateTo':
                       resultPosts = resultPosts.filter(post => post.createdAt <= new Date(filterConfig.dateTo));
                       break;
                   case 'username':
                       resultPosts = resultPosts.filter(post => post.author === filterConfig.username);
                       break;
                   case 'tags':
                       for (let i = 0; i < filterConfig.tags.length; i++){
                           resultPosts = resultPosts.filter(post => post.hashTags.includes(filterConfig.tags[i]));
                       }
                       break;
                   default:
                       break;
               }
           });
       }

       resultPosts.sort(function (firstPost, secondPost) {
           if(firstPost.createdAt > secondPost.createdAt) {
               return -1;
           }
           else if(firstPost.createdAt < secondPost.createdAt) {
               return 1;
           }
           else {
               return 0;
           }
       });

       return resultPosts.slice(skip, skip + top);
   }

   function getPost(id) {
        return posts.find(post => post.id === id)
   }

    function validateProperty(post, property) {
        switch (property) {
            case 'id':
                return (typeof post.id === 'string');
            case 'description':
                return (typeof post.description === 'string') && (post.description.length < 280);
            case 'createdAt':
                return true;
            case 'author':
                return true;
            case 'photoLink':
                return (typeof post.photoLink === 'string');
            case 'hashTags':
                return (post.hashTags) && (post.hashTags.every(tag => (typeof tag === 'string') && (tag.length < 20)));
            case 'likes':
                return (post.likes) && (post.likes.every(like => typeof like === 'string'));
            default:
                return false;
        }
    }

    function validatePost(post) {
        return validateProperty(post, 'description') &&
            validateProperty(post, 'photoLink') &&
            validateProperty(post, 'hashTags') &&
            validateProperty(post, 'likes');
    }

    function addPost(post) {
        const date = new Date();
        const id = String(posts.length + 1);
        let newPost = {
            id,
            description: post.description,
            createdAt: date,
            author: post.author,
            photoLink: post.photoLink,
            hashTags: post.hashTags.split(' '),
            likes: ['']
        };
        if(validatePost(newPost)){
            posts.push(newPost);
            return true;
        }
        return false;
   }

   function editPost(id, post) {
        let editPost = getPost(id);

        for(let key in post) {
           editPost[key] = post[key];
       }

       return validatePost(editPost);
   }

   function removePost(id) {
       let ind = posts.findIndex(post => post.id === id);
       if (ind !== -1) {
           posts.splice(ind, 1);
           return true;
       }
       return false;
   }

   console.log('GET POSTS function');
   console.log('\n');

   console.log('10 last posts');
   console.log(getPosts());
   console.log('\n');

   console.log('Next 10 posts');
   console.log(getPosts(10, 10));
   console.log('\n');

   console.log('Posts of one author');
   console.log(getPosts(0, 10, {username: 'April'}));
   console.log('\n');

    console.log('Posts from 6 april');
    console.log(getPosts(0, 10, {dateFrom: '2020-04-06'}));
    console.log('\n');


    console.log('Posts with tag');
    console.log(getPosts(0, 10, {tags: ['trip']}));
    console.log('\n');

    console.log('Posts with several tags');
    console.log(getPosts(0, 10, {tags: ['france', 'sea']}));
    console.log('\n');

    console.log('GET POST function');
    console.log('\n');

    console.log('Post with id = 11');
    console.log(getPost('11'));
    console.log('\n');

    console.log('Post with id = 26');
    console.log(getPost('26'));
    console.log('\n');

    console.log('VALIDATE POST function');
    console.log('\n');

    console.log('Validation');
    console.log(validatePost({id: '394',
        description: "validation", createdAt: new Date(), author: 'user', photoLink: 'URL', hashTags: ['check'], likes: []}));
    console.log('\n');

    console.log('Validation with wrong tag');
    console.log(validatePost({id: '395',
        description: "validation", createdAt: new Date(), author: 'user', photoLink: 'URL', hashTags: ['checkcheckcheckcheck'], likes: []}));
    console.log('\n');

    console.log('ADD POST function');
    console.log('\n');

    console.log('Add new post');
    console.log(addPost({
        description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
        author: 'Иванов Иван',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
        hashTags: 'coronavirus'
    }));
    console.log(getPost('21'));
    console.log('\n');

    console.log('EDIT POST function');
    console.log('\n');

    console.log('Edit post with id = 15');
    console.log(editPost('15', {photoLink: 'https://github.com/KseniaYeremeyevich/UPTwitter'}));
    console.log(getPost('15'));
    console.log('\n');

    console.log('REMOVE POST function');
    console.log('\n');

    console.log('Remove post with id = 17');
    console.log(removePost('17'));
    console.log('\n');

    console.log('5 last posts (without 17)');
    console.log(getPosts(0, 5));
    console.log('\n');

}());