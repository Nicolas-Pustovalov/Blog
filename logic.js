const articles = require('./articles.json');
const logic={

 home:   (request, response) => {
    response.render('index.ejs', {
        list: articles
    });
},
article: (request, response) => {
    const askArticle = Number (request.params.id);
    console.log(`Je veux retrouver ${askArticle}`);
    let foundArticle; 
    for (const checkArticle of articles) {
        if (checkArticle.id === askArticle ) {
            foundArticle = checkArticle;
        };
    }
    response.render('article.ejs', {
        articles: foundArticle
    });
},


}


module.exports = logic;








