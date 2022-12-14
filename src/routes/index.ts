import { Router } from "express";
import * as PageController from "../controllers/pageController"
import * as SearchController from "../controllers/searchController"

const router = Router();

router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fisches", PageController.fisches);

router.get("/search", SearchController.search);

export default router;
