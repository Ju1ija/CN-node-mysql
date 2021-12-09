require("./db/connection");
const yargs = require("yargs");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieMethods");
const { addSeries, listSeries, updateSeries, deleteSeries } = require("./series/seriesMethods");
const { addActor, listActors, updateActor, deleteActor } = require("./actor/actorMethods");

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
    case "update movie":
      updateMovie(process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
      break;
    case "update series":
      updateSeries(process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
      break;
    case "update actor":
      updateActor(process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
      break;
    case "delete movie":
      deleteMovie(process.argv[3], process.argv[4]);
      break;
    case "delete series":
      deleteSeries(process.argv[3], process.argv[4]);
      break;
    case "delete actor":
      deleteActor(process.argv[3], process.argv[4]);
      break;
    default:
      console.log("Incorrect command");
  }
}

app(yargs.argv);