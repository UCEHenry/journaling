// import
const journalData = require("../data/data");

// Class of Journal with the constructor for all its property
class Journal {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.body = data.body; 
        this.image = data.image;
        this.button1 = data.button1
        this.button2 = data.button2
        this.button3 = data.button3
        this.comments = data.comments
    }

    // Function that returns all the data from data
    static get All() {
        const postsData = journalData.map(postData => new Journal(postData));

        return postsData;
    }

    static findById(id) {
        try {
            const postID = journalData.find(postData => postData.id === id);
            const post = new Journal(postID);

            return post
        } catch(err) {
            throw new Error ("That post does not exist");
        }
    }

    static create(data) {
        const newPostID = journalData.length + 1;
        const newPost = new Journal({ id: newPostID, ...data });
        journalData.push(newPost);
        return newPost;
    }

    static createComment(id, data) {
        const postID = journalData.find(postData => postData.id === id);
        const post = new Journal(postID);
        journalData[id - 1].comments.push(data.comments);
        console.log(journalData);
        return post;
    }

    static emoji1(id, data) {
        const postID = journalData.find(postData => postData.id === id);
        const post = new Journal(postID);
        journalData[id - 1].button1++;
        console.log(journalData);
        return post;
    }

    static emoji2(id, data) {
        const postID = journalData.find(postData => postData.id === id);
        const post = new Journal(postID);
        journalData[id - 1].button2++;
        console.log(journalData);
        return post;
    }

    static emoji3(id, data) {
        const postID = journalData.find(postData => postData.id === id);
        const post = new Journal(postID);
        journalData[id - 1].button3++;
        console.log(journalData);
        return post;
    }
}


module.exports = Journal;
