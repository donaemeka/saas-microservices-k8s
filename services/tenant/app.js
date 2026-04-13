const express = require("express");
const app = express();

// simple tenant route
app.get("/tenant/:id", (req, res) => {
  const tenantId = req.params.id;

  res.json({
    tenantId: tenantId,
    companyName: tenantId === "company-a" ? "Company A Ltd" : "Company B Ltd",
    plan: "basic"
  });
});

app.listen(3002, () => {
  console.log("Tenant Service running on port 3002");
});