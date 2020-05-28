class Model {
    _tweets = [];
    _currentId;
    _user;
    /*
        constructor(){
            this._tweets = [];
            this._currentId = 0;
        }

     */

    constructor(tweets) {
        this._tweets = tweets;
        this._currentId = this._tweets.length;
    }

    setUser(curUser){
        this._user = curUser;
    }

    getCurrentId(){
        return this._currentId;
    }

    getTweets(){
        return this._tweets;
    }

    getUser(){
        return this._user;
    }

    getPage(skip = 0, top = 10, filterConfig = undefined) {
        let resultPosts = this._tweets;

        if ((typeof skip !== 'number') || (typeof top !== 'number')) {
            console.log('Types Error');
            return;
        }

        if (filterConfig) {
            Object.keys(filterConfig).forEach((key) => {
                switch (key) {
                    case 'dateFrom':
                        resultPosts = resultPosts.filter(post => post.createdAt >= new Date(filterConfig.dateFrom));
                        break;
                    case 'dateTo':
                        resultPosts = resultPosts.filter(post => post.createdAt <= new Date(filterConfig.dateTo));
                        break;
                    case 'username':
                        resultPosts = resultPosts.filter(post => post.author.includes(filterConfig.username));
                        break;
                    case 'tags':
                        for (let i = 0; i < filterConfig.tags.length; i++) {
                            resultPosts = resultPosts.filter(post => post.hashTags.includes(filterConfig.tags[i]));
                        }
                        break;
                    default:
                        break;
                }
            });
        }
        resultPosts.sort(this.comparator);

        return resultPosts.slice(skip, skip + top);
    }

    comparator (firstPost, secondPost) {
        if(firstPost.createdAt > secondPost.createdAt) {
            return -1;
        } else if(firstPost.createdAt < secondPost.createdAt) {
            return 1;
        } else {
            return 0;
        }
    }

    get(id) {
        return this._tweets.find(post => post.id === id)
    }

    static _validateProperty(post, property) {
        switch (property) {
            case 'description':
                return (typeof post.description === 'string') && (post.description.length < 280);
            case 'photoLink':
                return (typeof post.photoLink === 'string');
            case 'hashTags':
                return (post.hashTags) && (post.hashTags.every(tag => (typeof tag === 'string') && (tag.length < 20)));
            default:
                return false;
        }
    }

    static validate(post) {
        return Model._validateProperty(post, 'description') &&
            Model._validateProperty(post, 'photoLink') &&
            Model._validateProperty(post, 'hashTags');
    }

    add (post) {
        const date = new Date();
        const id = String(this._currentId + 1);
        let newPost = {
            id,
            description: post.description,
            createdAt: date,
            author: this._user,
            photoLink: post.photoLink,
            hashTags: post.hashTags,//.split(' '),
            likes: ['']
        };
        if(Model.validate(newPost)){
            this._tweets.push(newPost);
            this._currentId = this._currentId + 1;
            return true;
        }
        return false;
    }

    edit(id, post) {
        let edPost = this.get(id);
        let flag = false;

        for (let key in post) {
            if (Model._validateProperty(post, key)) {
                edPost[key] = post[key];
                flag = true;
            } else flag = false;
        }
        return flag;
    }

    remove(id) {
        let ind = this._tweets.findIndex(post => post.id === id);
        if (ind !== -1) {
            this._tweets.splice(ind, 1);
            return true;
        }
        return false;
    }

    clear() {
        this._tweets = [];
    }

    addAll(tweets) {
        let wrongTweets = [];
        for(let ii = 0; ii < tweets.length; ii++) {
            if(!this.add(tweets[ii])){
                wrongTweets.push(tweets[ii]);
            }
        }
        return wrongTweets;
    }

}

class View {


    static template;
    static container = document.getElementById('posts_container');
    static _user;
    static _login;

    static setUser(username){
        this._user = username;
    }

    static setLogin(status){
        this._login = status;
    }

    static getUser(){
        return this._user;
    }

    static getLogin(){
        return this._login;
    }

    static viewHeader(){
        let template_header;
        let header;
        let node;

        header = document.getElementById('header');
        if(this._login){
            template_header = document.getElementById('log_in');
            node = document.importNode(template_header.content, true);
            node.querySelector('[data-target="header_username"]').textContent = this._user;
            header.appendChild(node);
        } else {
            template_header = document.getElementById('log_out');
            node = document.importNode(template_header.content, true);
            header.appendChild(node);
        }

    }

    static viewNewPostForm(){
        if(this._login){
            let template_new_post = document.getElementById('template_new_post');
            this.container = document.getElementById('posts_container');

            let node = document.importNode(template_new_post.content, true);
            node.querySelector('[data-target="new_post_username"]').textContent = this._user;
            this.container.insertBefore(node, this.container.firstElementChild);

        }
    }

    static viewMainPage(){
        this.viewHeader();

        if(tweets._currentId >= 10){
            this.seeMore();
        }

    }


    static fillInPost(post){

        if(post.author === this._user){
            this.template = document.getElementById('template_my_post');
        } else {
            this.template = document.getElementById('template_post');
        }

        let newNote = document.importNode(this.template.content, true);

        View.fillItemData(newNote, post, 'description');
        View.fillItemData(newNote, post, 'author');
        View.fillItemData(newNote, post, 'createdAt');
        View.fillItemData(newNote, post, 'photoLink');
        View.fillItemData(newNote, post, 'hashTags');

        return newNote;
    }

    static showPost(post){

        let newNote = this.fillInPost(post);

        newNote.firstElementChild.setAttribute('id', post.id);

        this.container.insertBefore(newNote, this.container.firstElementChild);

    }


    static viewPostPage(posts){
        posts.getTweets().forEach((post) => this.showPost(post));
    }

    static fillItemData(item, post, key) {
        switch (key) {
            case 'description':
                item.querySelector('[data-target="description"]').textContent = post.description;
                break;
            case 'author':
                item.querySelector('[data-target="author"]').textContent = post.author;
                break;
            case 'createdAt':
                item.querySelector('[data-target="createdAt"]').textContent = post.createdAt;
                break;
            case 'photoLink':
                item.querySelector('[data-target="photoLink"]').setAttribute('src', post.photoLink);
                break;
            case 'hashTags':
                let strTags = "";
                post.hashTags.forEach(tag => strTags += "#" + tag + " ");
                item.querySelector('[data-target="hashTags"]').textContent = strTags;
                break;
        }

    }


    static addAllPosts(posts){
        posts.getTweets().forEach((post) => this.addPost(posts, post));
    }

    static seeMore(){
        this.template = document.getElementById('button_show_template');
        this.container = document.getElementById('posts_container');
        let newButton = document.importNode(this.template.content, true);
        this.container.appendChild(newButton);
    }

    static addPost(posts, post){
        if(posts.add(post) === true){

            let id = posts.getCurrentId();

            let newNote = this.fillInPost(posts.get(id.toString()));

            newNote.firstElementChild.setAttribute('id', id);
            this.container.insertBefore(newNote, this.container.firstElementChild);
        }
    }

    static editPost(posts, id, post){
        if(posts.edit(id, post) === true){

            let newNote = this.fillInPost(posts.get(id));
            document.getElementById(id).replaceWith(newNote);
        }
    }

    static deletePost(id) {
        document.getElementById(id)?.remove();
    }


}



let tweets = new Model([
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
]);

let post = {
    description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
    photoLink: 'https://deita.ru/media/images/paris-2499022_960_720.2e16d0ba.fill-950x690-c100.jpg',
    hashTags: ['coronavirus', 'trip']
};

let post2 = {

    photoLink: 'https://hospitality-on.com/sites/default/files/2017-10/paris-1836415_1920.jpg',
    hashTags: ['EditedPost']
};

let view;

window.onload = () => {

    view = new View();

    View.setLogin(true);
    //View.setLogin(false);

    View.setUser("Ksenia");
    tweets.setUser("Ksenia");

    View.viewMainPage();

    View.viewPostPage(tweets);

    View.addPost(tweets, post);
    View.editPost(tweets, "19", post2);
    View.deletePost('17');

    View.viewNewPostForm();

};







