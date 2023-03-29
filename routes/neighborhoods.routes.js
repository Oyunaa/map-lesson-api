const { Router } = require("express");
const neighborhoods = require("../controllers/neighborhoods.controllers");

const route = Router();

route.post("/neighborhoods", neighborhoods.getNeighborhoods);
route.get("/neighborhoods/:_id", neighborhoods.getNeighborhoodsOne);

route.post(
  "/allrestaurantsinneighborhood",
  neighborhoods.getAllRestaurantsInNeighborhood
);

route.post("/currentNeighborHood/", neighborhoods.findCurrentNeighborHood);
route.post("/findAllRes/", neighborhoods.findAllRestaurantsInNeighborhood);
route.post("/findResInDistance", neighborhoods.findRestaurantsInDistance);

module.exports = route;
