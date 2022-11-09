//Import .Env File
require('dotenv').config();

//Import ExpressJS
let express = require('express');

//Create an Express App
let app = express();

//Set App Engine to Use EJS
app.set('view engine', 'ejs');

//Configure App to Use Express to Access Publi Folder
app.use(express.static('public'));

//Import Body-Parser to Read Body Content
let bodyParser = require('body-parser');

//Set App to Use Body-Parser
app.use(bodyParser.urlencoded({extended: false}));

//Global Employer Array
let employerArray = [];

//Route To Index Page
app.get('/', (req, res) => {
    res.render('index.ejs');
});

//Route to Projects Page
app.get('/projects', (req, res) => {
    res.render('projects.ejs');
});

//Route to Contact Page
app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

//Get to Proccess-Contact
app.post('/process-data', (request, response) => {
    //Get data from form
    let name = request.body.Name;
    let email = request.body.Email;
    let tel = request.body.Phone;
    let subject = request.body.Subject;
    let message = request.body.Message;
    let formOfContact = request.body.radio;
    let day = request.body.checkboxDay;
    let time = request.body.checkboxTime;

    //My fullname
    let myname = 'Kaizer Mthimkhulu';

    //Save data to object
    let data = {
        name,
        email,
        tel,
        subject,
        message,
        formOfContact,
        day,
        time
    }

    //Store Object to Array
    employerArray.push(data);

    //log to console for testing
    console.log(employerArray);

    //Send Response to Page
    response.send(`Thank you ${name} for getting intouch. Appointment with ${myname} is set for ${day} ${time} regarding ${subject} and will contact you via ${formOfContact}.`);
});

//.Environment Variables
HOST = process.env.HOST;
PORT = process.env.PORT || 8081;

//App Function to Listen to Port
app.listen(PORT, HOST, () => {
    console.log(`This App is Listening on ${HOST}:${PORT}.`);
});