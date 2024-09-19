const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// TestSchema routes
const { createTestSchema, updateTestSchema, deleteTestSchema, getTestSchema, getAllTestSchema } = require('../controllers/testschema');
// 
router.post("/testschema/create", checkAuthorizationHeaders,authorizeUser("createTestSchema") ,createTestSchema);
router.put("/testschema/update/:id", checkAuthorizationHeaders,authorizeUser("updateTestSchema"), updateTestSchema);
router.delete("/testschema/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteTestSchema"), deleteTestSchema);
router.get("/testschema/get/:id", checkAuthorizationHeaders, authorizeUser("readTestSchema"), getTestSchema);
router.get("/testschema/getAll", checkAuthorizationHeaders, authorizeUser("readTestSchema"), getAllTestSchema);

  
module.exports = router;
