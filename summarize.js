window.onload = function() {
    let $article = $(document).find('p').text();
    $article = $article.replace(/[.,!:;]/g, '');
    let words = $article.split(" ");
    let theNewArticle = "";
    let newWords = [];
    theNewArticle = words[0];
    for (var i = 0, c = 0; i < words.length - 10; i += 10, c++) {
        if (c == 0) continue;
        newWords[c] = words[i].toLowerCase();
        if (c % 8 == 0) {
            newWords[c] = newWords[c].charAt(0).toUpperCase() + newWords[c].slice(1);
        }
    }
    for (var i = 0; i < newWords.length; i ++) {
        if (i == 0) continue;
        if (i % 8 == 0) {
            theNewArticle += "! ";
        }
        theNewArticle += " ";
        theNewArticle += newWords[i];
        
    }
    theNewArticle += "!";
    document.write(theNewArticle);
    

}

function summarizeBad(originalText) {
    //var lexrank = require('lexrank');
    var topLines = lexrank.summarize(originalText, 8, function (err, toplines, text) {
        if (err) {
            console.log(err);
        }
        // console.log(toplines);

        return text;
    });
}
