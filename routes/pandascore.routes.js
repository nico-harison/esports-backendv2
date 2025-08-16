const express = require("express");
const router = express.Router();
const controller = require("../controllers/pandascore.controller");

//List of all games
router.get("/games", controller.getGames);

//CounterStrike
router.get("/csgo/tournaments/upcoming", controller.csgoUpcomingTournament);
router.get("/csgo/tournaments/running", controller.csgoRunningTournament);
router.get("/csgo/leagues/upcoming", controller.csgoUpcomingLeagues);

//Dota 2
router.get("/dota2/tournaments/upcoming", controller.dotaUpcomingTournament);
router.get("/dota2/tournaments/running", controller.dotaRunningTournament);
router.get("/dota2/leagues/upcoming", controller.dotaUpcomingLeagues);

//LOL (League of Legends)
router.get("/lol/tournaments/upcoming", controller.lolUpcomingTournament);
router.get("/lol/tournaments/running", controller.lolRunningTournament);
router.get("/lol/leagues/upcoming", controller.lolUpcomingLeagues);

module.exports = router;
