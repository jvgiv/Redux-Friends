const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let friends = [
  // {
  //   episode_title: 'Simpsons fire',
  //   number_in_season: 1,
  //   quote_id: 1,
  //   raw_character_text: 'Homer',
  //   season: 1,
  //   spoken_words: "d'oh. There is a humongous dog.  It ate my food.  I cannot believe it!"
  // },
  {
    id: 2,
    character: 'Homer',
    quote: "Donuts"
  },
  {
    id: 3,
    character: 'Marge',
    quote: "Homer stop"
  },
  {
    id: 4,
    character: 'Marge',
    quote: "Bart and Lisa"
  },
  {
    id: 5,
    character: 'Bart',
    quote: "Eat my shorts"
  },
  {
    id: 6,
    character: 'Bart',
    quote: "Weiners"
  },
  {
    id: 7,
    character: 'Maggie',
    quote: "something something"
  },
  {
    id: 8,
    character: 'Maggie',
    quote: "i'm a baby"
  },
  {
    id: 9,
    character: 'Lisa',
    quote: "saxophone"
  },
  {
    id: 10,
    character: 'Lisa',
    quote: "I play saxophone"
  },

];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  next()
  // const { authorization } = req.headers;
  // if (authorization === token) {
  //   next();
  // } else {
  //   res.status(403).json({ error: 'User be logged in to do that.' });
  // }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'aaaaaa' && password === 'aaaaaa') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/friends', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get('/api/friends/:id', authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/friends', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const friendIndex = friends.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...friends[friendIndex], ...req.body };

    friends = [
      ...friends.slice(0, friendIndex),
      friend,
      ...friends.slice(friendIndex + 1)
    ];
    res.send(friends);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.delete('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  friends = friends.filter(f => f.id !== Number(id));

  res.send(friends);
});

function getNextId() {
  return nextId + 1;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
