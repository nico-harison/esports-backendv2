const api = require("../utils/axiosInstance");

// List of games
exports.getGames = async (req, res) => {
  try {
    const response = await api.get("/videogames");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Counter Strike

exports.csgoUpcomingTournament = async (req, res) => {
  try {
    const response = await api.get("/csgo/tournaments/upcoming?page[size]=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.csgoRunningTournament = async (req, res) => {
  try {
    const response = await api.get("/csgo/tournaments/running?page[size]=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.csgoUpcomingLeagues = async (req, res) => {
  try {
    const response = await api.get("/csgo/leagues?page[size]=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Dota 2

exports.dotaUpcomingTournament = async (req, res) => {
  try {
    const response = await api.get("/dota2/tournaments/upcoming?page[size]=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.dotaRunningTournament = async (req, res) => {
  try {
    const response = await api.get("/dota2/tournaments/running?page[size]=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.dotaUpcomingLeagues = async (req, res) => {
  try {
    const response = await api.get("/dota2/leagues?page[size]=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//LOL (League of Legends)

exports.lolUpcomingTournament = async (req, res) => {
  try {
    const response = await api.get("/lol/tournaments/upcoming?page[size]=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.lolRunningTournament = async (req, res) => {
  try {
    const response = await api.get("/lol/tournaments/running?page[size]=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.lolUpcomingLeagues = async (req, res) => {
  try {
    const response = await api.get("/lol/leagues?page[size]=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
