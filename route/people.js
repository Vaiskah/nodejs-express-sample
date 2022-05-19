const express = require("express");
const router = express.Router();

const {
  getPeople,
  creatPerson,
  creatPostman,
  updatePerson,
  deletePerson,
} = require("../controller/peopleRouter");

router.route("/").get(getPeople).post(creatPerson);
router.route("/postman").post(creatPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

// router.get("/", getPeople);

// router.post("/", creatPerson);

// router.post("/postman", creatPostman);

// router.put("/:id", updatePerson);

// router.delete("/:id", deletePerson);

module.exports = router;
