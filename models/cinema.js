const Cinema = function (films) {
  this.films = [];
};

Cinema.prototype.add = function (film) {
  this.films.push(film);
};

Cinema.prototype.filmTitles = function () {
  const result = this.films.map((film) => {
    return film.title
  });
  return result
};

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.find((film) => {
    if (film.title === title) {
  return film
    };
    });
  return result;
};

Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter(film => film.genre === genre);
  return result;
};

Cinema.prototype.hasFilmFrom = function (year) {
  const result = this.films.some(film => film.year === year);
  return result;
};

Cinema.prototype.checkLength = function (time) {
  const result = this.films.every(film => film.length > time);
  return result;
  };

Cinema.prototype.totalTime = function () {
 const result = this.films.reduce((runningTotal, film) => {
   return runningTotal + film.length;
  }, 0);
  return result;
};

module.exports = Cinema;
