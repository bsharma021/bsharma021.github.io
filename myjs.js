function set_skill_ratings(){
    obj_filled = `<span class="rating-circle rating-filled"></span>
    `;
    obj_half = `<span class="rating-circle rating-half"></span>
    `;
    obj_empty = `<span class="rating-circle"></span>
    `;
    ratings = ["0", "0\\.5", "1", "1\\.5", "2", "2\\.5", "3", "3\\.5", "4", "4\\.5", "5"];
    ratings_val = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    for (var i in [...Array(ratings.length).keys()]){
        objs = document.querySelectorAll(`#skills-rating-${ratings[i]}`);
        for (var j in [...Array(objs.length).keys()]){
            element = obj_filled.repeat(parseInt(ratings_val[i])) + ((ratings_val[i] - Math.floor(ratings_val[i]))?obj_half:"") + obj_empty.repeat(5 - Math.ceil(ratings_val[i]));
            objs[j].innerHTML = element;
        }
    }
}