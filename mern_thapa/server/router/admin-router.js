const express = require("express");



const { getAllUsers } = require("../controllers/admin-controller");
const { getAllContacts } = require("../controllers/admin-controller");

const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();


router.route('/users').get(authMiddleware, adminMiddleware, getAllUsers);
router.route('/contacts').get(authMiddleware, adminMiddleware, getAllContacts);


module.exports = router;