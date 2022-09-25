const express = require('express');

const ctrl = require('../../controllers/users');

const { ctrlWrapper } = require('../../helpers');

const { validationBody, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();

// signup
router.post(
  '/signup',
  validationBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register),
);

// signin
router.post(
  '/login',
  validationBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login),
);



router.get('/logout', authenticate, ctrlWrapper(ctrl.logout));

router.get('/current', authenticate, ctrlWrapper(ctrl.current));

module.exports = router;
