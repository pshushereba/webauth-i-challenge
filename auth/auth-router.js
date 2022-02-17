const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

router.post('/login', (req, res) => {
  const {username, password} = req.body;

  Users.findBy({username})
    .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'You Shall Not Pass!' });
        }
      })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.get('/users', (req, res) => {
  const {username, password} = req.headers;
  
  Users.findBy({username})
    .first()
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          Users.getUsers()
          .then((users) => {
            res.status(200).json(users)
          })
          .catch((err) => {
            res.status(500).json({message: "You Shall Not Pass!"})
          })
        }
      })
      .catch((err) => {
        res.status(500).json({message: "You Shall Not Pass"})
      })
})


module.exports = router;