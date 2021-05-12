const moment = require("moment");
const router = require('express').Router();
const db = require("../../models");

router.get("/", async (req, res) => {
    const pageModel = {
        homePosts: [],
        movie_type: req.query.movie_type || "adventure",
        movies: []
    }

    const movieQuery = {
        query: pageModel.movie_type,
        page: req.query.page || 1
    }

    try {
        pageModel.homePosts = await db.Post.findAll({ raw: true });
        pageModel.homePosts = pageModel.homePosts.map(p => ({
            ...p,
            date_created: moment(p.date_created).format("M/DD/YYYY")
        }));

        const theMovieResult = await TheMovieDB.get(movieQuery);
        pageModel.movies = theMovieResult.data;
        
    } catch (error) {
        console.log(error)
    }

    res.render("homepage", pageModel);
})

module.exports = router;