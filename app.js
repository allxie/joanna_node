const express = require('express');
const app = express();

//RESEARCH NODEMON to have your server potentially hot-reload

// const objection = require ('objection'); http://vincit.github.io/objection.js/#getting-started
 // read up on javascript, especially es6. Async/await syntax, arrow functions
// const Model = objection.Model;
// const Knex = require('knex');

// //Initialie knex connection
// const knex = Knex({
// 	client:"",
// 	useNullAsDefault: true,
// 	connection: "postgres://localhost:5432/joanna_db",
// });

// Model.knex(knex);

const allMyData = [
	{
		question_id: 1,
		right_doc: "./blueThing.jpg",
		wrong_doc: "./greenThing.jpg",
		question_text: "Which thing is blue?"
	},
	{
		question_id: 2,
		right_doc: "./computer.jpg",
		wrong_doc: "./cow.jpg",
		question_text: "Which thing is electronic?"
	},
	{
		question_id: 3,
		right_doc: "./chess.jpg",
		wrong_doc: "./ice_cream.jpg",
		question_text: "Which thing is difficult?"
	},
]
const makeMyData = ()=>{
	let num = 2//(allMyData.length * Math.random().floor();
	console.log("NUM ", num);
	let myQuestion = allMyData[num];
	console.log(myQuestion);
	return myQuestion;
}
app.get('/', (req, res)=> {

	let myData = makeMyData();
	res.send(myData);
});
app.listen(3000, ()=>{console.log("Hey I'm listening")}); //new es6 arrow syntax



