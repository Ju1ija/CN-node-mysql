require("./db/connection");
const yargs = require("yargs");
const { addMovie, listMovies } = require("./movie/movieMethods");
const { addSeries, listSeries } = require("./series/seriesMethods");
const { addActor, listActors } = require("./actor/actorMethods");

const app = async (args) => {
  switch (process.argv[2]) {
    case "add movie":
      addMovie({ title: args.title, release: args.release, genre: args.genre, rating: args.rating });
      break;
    case "add series":
      addSeries({ title: args.title, release: args.release, last_episode: args.last_episode, genre: args.genre, rating: args.rating })
      break;
    case "add actor":
      addActor({ name: args.name, nationality: args.nationality, movie_id: args.movie_id, series_id: args.series_id });
      break;
    case "list movies":
      listMovies();
      break;
    case "list series":
      listSeries();
      break;
    case "list actors":
      listActors();
      break;
    default:
      console.log("Incorrect command");
  }
}

app(yargs.argv);