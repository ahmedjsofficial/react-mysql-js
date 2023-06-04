const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/nodeassets", express.static("nodeassets"));

const db = mysql.createConnection({
  host: "70.32.23.53",
  user: "unialso1_unialsolutions_reactjs_2023",
  password: "unialso1_unialsolutions_reactjs_2023",
  database: "unialso1_unialsolutions_reactjs_2023",
});

db.connect((error) => {
  if (error) throw error;
  console.log(`Database Connect Sucessfully`);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./nodeassets/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const uploader = multer({
  storage: storage,
});

// certifications
app.get('/students', (req, res) => {
    db.query("SELECT * FROM user_dummy", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});
  
app.post('/students/insert', uploader.single('image'), (req, res) => {
    const tabledata = {
        name: req.body.name,
        email: req.body.email,
        work: req.body.work,
        image: req.file.filename
    }
    db.query('INSERT INTO user_dummy SET ?', tabledata, (error, result) => {
      if(error) {
        console.log(error);
      } else {
        res.status(200).send(result);
      }
    });
});
  
app.put('/students/:id', uploader.single('image'), (req, res) => {
    const { id } = req.params;
    const tabledata = {
        name: req.body.name,
        email: req.body.email,
        work: req.body.work,
        image: req.file.filename
    }
    db.query('UPDATE user_dummy SET ? WHERE id=' + id, tabledata, (error, result) => {
      if(error) {
        console.log(error);
      } else {
        res.status(200).send(result);
      }
    });
});
  
app.delete('/students/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM user_dummy WHERE id=' + id, (error, result) => {
      if(error) {
        console.log(error);
      } else {
        res.status(200).send(result);
      }
    });
});  

app.listen("5000", () => {
    console.log(`Server is listening ${5000}`);
});