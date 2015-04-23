DuckieTV.controller('SidepanelSeasonsCtrl', function(seasons, episodes) {
    this.seasons = seasons;
    this.episodes = episodes;

    /**
     * Returns true if all episodes for the season are watched
     * excludes the special season, and non-aired episodes.
     */
    this.isAllWatched = function(season) {
        if (season.seasonnumber == 0) {
            return false;
        };
        var allWatched = 1; // presume the season has been watched
        this.episodes.map(function(episode) {
            if (episode.seasonnumber == season.seasonnumber && episode.hasAired()) {
                allWatched = (allWatched &&  episode.isWatched());
            };
        });
        return allWatched;
    };

})