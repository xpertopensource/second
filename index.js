import express from 'express';
// import log from './../../../utils/logger';
import permit from './../../../permissions/permission';
import * as repositoryController from './repository.controller';

import {
    catchError
} from './../../../errors/error';

let router = express.Router({
    mergeParams: true
});
console.log("Node Js app running");
var z=100;

router.get('/', permit('repositories'), catchError(repositoryController.index));

module.exports = router;
