const express = require('express');
const personRoutes = express.Router();
const {newPerson,fetchData, personOne,findPersonById,Updateperson,deletePersonByName, removeperson} = require('../handlers/person');

personRoutes.post('/createPerson' , newPerson)
 personRoutes.get('/getPerson', fetchData);
 personRoutes.get('/find',personOne );
 personRoutes.get('/findId',findPersonById );
 personRoutes.put('/findup',Updateperson );
 personRoutes.delete('/deleted',removeperson );
 personRoutes.delete('/removes',deletePersonByName );



 module.exports = personRoutes;
