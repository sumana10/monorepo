const express = require('express')
const app = express()
const port = 3002
import { UserInput } from "common"

app.get('/', (req: any, res: any) => {
  let parsedUser = UserInput.safeParse(req.body);
  if (!parsedUser.success) {
    res.send('Invalid Input!')
    return;
  }
  res.send('Valid Input!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})