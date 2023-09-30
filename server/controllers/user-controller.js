const db = require('../db/pgUtils');

class UserController {
    async register(req, res) {
        const {
            firstname,
            lastname,
            email,
            password,
            height,
            weight,
            age,
            gender,
            activity,
            goal
          } = req.body;

          try {
            db.query('INSERT INTO users (firstname, lastname, email, password, height, weight, age, gender, activity_id, goal_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
            [firstname, lastname, email, password, height, weight, age, gender, activity, goal], (err, result) => {
                if (!result) {
                // console.log('Insert failed:', err);
                // console.log(res.json(err))
                return res.json(err)
                }
                // console.log('Insert successful: ',result)
                res.send(result)
            })
          } catch (err) {
            console.log(err);
          }
    }
    async login(req, res) {
        const { email, password } = req.body;
        try {
            db.query(
                'SELECT * FROM users WHERE email = $1 AND password = $2',
                [email, password],
                (error, results) => {
                  if (error) {
                    throw error
                  }
            
                  if (results.rows.length === 0) {
                    res.status(401).json( 'Invalid email or password' )
                  } else {
                    const token = jwt.sign(
                      { email, password },
                      process.env.NUXT_ENV_API_SECRET
                    )
                    res.status(200).json({ token })
                    // res.status(200).json({ message: 'Logged in' });
                  }
                }
              )
        } catch (err) {
            console.log(err);
        }
    }
    async getUserDetails(req, res) {
        try {
            db.query(
                'SELECT * FROM user_details WHERE email = $1',
                [req.params.email],
                (error, results) => {
                  if (error) {
                    throw error
                  }
                  // console.log(results)
                  res.json(results)
                  // res.status(200).json({ message: 'Logged in' });
                }
              )
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new UserController();
