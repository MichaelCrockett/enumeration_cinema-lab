const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema();
  });

  it('should have a collection of films', function () {
    cinema.add(moonlight)
    cinema.add(bladeRunner)
    cinema.add(dunkirk)
    cinema.add(blackPanther)
    cinema.add(trainspotting)
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function (){
    cinema.add(moonlight);
    cinema.add(bladeRunner);
    cinema.add(dunkirk);
    const actual = cinema.filmTitles();
    assert.deepStrictEqual(actual, ['Moonlight', 'Blade Runner 2049', 'Dunkirk'])
  });

  it('should be able to find a film by title', function () {
    cinema.add(bladeRunner);
    cinema.add(moonlight);
    cinema.add(dunkirk);
    const actual = cinema.findByTitle("Moonlight");
    assert.strictEqual(actual, moonlight)
  });

  it('should be able to filter films by genre', function () {
    cinema.add(moonlight);
    cinema.add(bladeRunner);
    cinema.add(dunkirk);
    cinema.add(blackPanther);
    cinema.add(trainspotting);
    const actual = cinema.filterByGenre("drama")
    assert.deepStrictEqual(actual, [moonlight, trainspotting])
  });


  it('should be able to check whether there are some films from a particular year', function () {
    cinema.add(moonlight);
    cinema.add(bladeRunner);
    cinema.add(dunkirk);
    cinema.add(blackPanther);
    cinema.add(trainspotting);
    const actual = cinema.hasFilmFrom(2016)
    assert.strictEqual(actual, true)
  });


  it('should be able to check whether there are no films from a particular year', function () {
    cinema.add(moonlight);
    cinema.add(bladeRunner);
    cinema.add(dunkirk);
    cinema.add(blackPanther);
    cinema.add(trainspotting);
    const actual = cinema.hasFilmFrom(1998)
    assert.strictEqual(actual, false)
  });


  it('should be able to check whether all films are over a particular length', function () {
    cinema.add(moonlight);
    cinema.add(bladeRunner);
    cinema.add(dunkirk);
    cinema.add(blackPanther);
    cinema.add(trainspotting);
    const actual = cinema.checkLength(100)
    assert.strictEqual(actual, false)
  });


  it('should be able to calculate total running time of all films', function () {
    cinema.add(moonlight);
    cinema.add(bladeRunner);
    cinema.add(dunkirk);
    cinema.add(blackPanther);
    cinema.add(trainspotting);
    const actual = cinema.totalTime()
    assert.strictEqual(actual, 622)

  });

});
