const express = require("express");



const { getAllUsers } = require("../controllers/admin-controller");
const { getAllContacts } = require("../controllers/admin-controller");

const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();


router.route('/users').get(authMiddleware, authMiddleware, getAllUsers);
router.route('/contacts').get(authMiddleware, getAllContacts);


module.exports = router;