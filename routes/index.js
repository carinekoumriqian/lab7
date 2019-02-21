
/* define a /VAR/iable named [projects], store all the info 
 * from /projects.json inside of it!
 */
var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
   /* in the file stored under projects, [create a new field]
	* called "viewAlt" and set the value = to false.
	* This is now a boolean variable (or flag), because you set 
	* the value to true or false. if you wanted it to be an int, double,
	* or string, you would just make the value 5, 2.0, or "butts"!
  	*/
  	projects["viewAlt"] = false;

   /* When the user goes to the path specified in the app.js route 
   	* (in this case, '/') this function ((file name).(function name) or index.view)
   	* is called. the function performs all actions in order, and this line below
   	* is what shows the user the page. If you need to do anything, do it before this
   	* response.render command is executed.
 	*/	
  	response.render('index', projects);
};

exports.viewAlt = function(requrest,response){
	projects["viewAlt"] = true;
	response.render('index', projects)
}