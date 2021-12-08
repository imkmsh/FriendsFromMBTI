const User = require("../models/User");

const output = {
  hello: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
  signup: (req, res) => {
    res.render("signup");
  },
  test: (req, res) => {
    res.render("test")
  },
  ENTP: (req, res) => {
    res.render("results/ENTP")
  },
  ENTJ: (req, res) => {
    res.render("results/ENTJ")
  },
  ENFP: (req, res) => {
    res.render("results/ENFP")
  },
  ENFJ: (req, res) => {
    res.render("results/ENFJ")
  },
  ESTP: (req, res) => {
    res.render("results/ESTP")
  },
  ESTJ: (req, res) => {
    res.render("results/ESTJ")
  },
  ESFP: (req, res) => {
    res.render("results/ESFP")
  },
  ESFJ: (req, res) => {
    res.render("results/ESFJ")
  },
  INTP: (req, res) => {
    res.render("results/INTP")
  },
  INTJ: (req, res) => {
    res.render("results/INTJ")
  },
  INFP: (req, res) => {
    res.render("results/INFP")
  },
  INFJ: (req, res) => {
    res.render("results/INFJ")
  },
  ISTP: (req, res) => {
    res.render("results/ISTP")
  },
  ISTJ: (req, res) => {
    res.render("results/ISTJ")
  },
  ISFP: (req, res) => {
    res.render("results/ISFP")
  },
  ISFJ: (req, res) => {
    res.render("results/ISFJ")
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  signup: async (req, res) => {
    const user = new User(req.body);
    const response = await user.signup();
    return res.json(response);
  },
  test: async (req, res) => {
    const user = new User(req.body);
    const response = await user.test();
    return res.json(response);
  },
  result: async (req, res) => {
    const user = new User(req.body);
    const response = await user.result();
    return res.json(result);
  },
};

module.exports = {
  output,
  process,
};