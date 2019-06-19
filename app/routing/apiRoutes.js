var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    })

    app.post("/api/friends", function(req,res) {

        var newFriend = req.body;
        var newSum = 0;
        for (i = 0; i < newFriend.scores.length; i++) {
            newSum += parseInt(newFriend.scores[i]);
        }
        console.log(newSum);

        var diffArr = [];
        for (i = 0; i < friendData.length; i++) {
            
            var friendSum = 0;
            for (j = 0; j < friendData[i].scores.length; j++) {
                friendSum += parseInt(friendData[i].scores[j]);
            }

            abDiff = Math.abs(newSum - friendSum);
            diffArr.push(abDiff);
        }
        var lowDiff = Math.min(...diffArr);
        var indi = diffArr.indexOf(lowDiff);

        var foundResult = friendData[indi];

        console.log(lowDiff);
        console.log(diffArr);
        console.log(indi);
        console.log(foundResult);
        
        // Push newFriend into friendData
        friendData.push(newFriend);
        res.json(foundResult);
        console.log("Added to Group of friends!")

    })

}
