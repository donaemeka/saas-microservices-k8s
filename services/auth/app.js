const express = require("express");
const app = express();

app.use(express.json());

// simple login route
app.post("/login", (req, res) => {
  const { email } = req.body;

  // fake user
  res.json({
    message: "Login successful",
    user: {
      id: 1,
      email: email,
      tenantId: "company-a"
    }
  });
});

app.listen(3001, () => {
  console.log("Auth Service running on port 3001");
});