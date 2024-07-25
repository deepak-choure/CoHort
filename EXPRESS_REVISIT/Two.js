//IMPLEMENTING HOSPITAL LOGIC
//inmemory data

let users = [
  {
    name: "John Doe",
    kidneys: [{ healthy: false }, { healthy: true }],
  },
];

//now server
const express = require("express");
const port = 3000;
const app = express();
app.use(express.json());

let name = users[0].name;
let totalKidneys = users[0].kidneys.length;
function NoOfhealthyKidney() {
  var healthyKidney = 0;
  users[0].kidneys.forEach((kidney) => {
    if (kidney.healthy == true) {
      healthyKidney += 1;
    }
  });
  return healthyKidney;
}
let healthyKidney = NoOfhealthyKidney();

function addKidney(type) {
  users[0].kidneys.push({ healthy: type });
  totalKidneys += 1;
  if (type) {
    healthyKidney += 1;
  }
}
function updateTohealthy() {
  users[0].kidneys.forEach((kidney) => {
    kidney.healthy = true;
    healthyKidney = NoOfhealthyKidney();
  });
}
function removekidney() {
  users[0].kidneys = users[0].kidneys.filter((kidney) => {
    return kidney.healthy == true;
  });
  healthyKidney = NoOfhealthyKidney();
  totalKidneys = users[0].kidneys.length;
}
app.get("/", (req, res) => {
  res.send(
    `Hello ${name}, You have ${healthyKidney} healthy kidney out of ${totalKidneys} kidneys. Thank You`
  );
});
//adding kidney based on preference (based on working it is used to post the data to server)
app.post("/new", (req, res) => {
  let isHealthy = req.body.isHealthy;

  addKidney(isHealthy);

  res.send(
    `New Kidney planted Successfully. Now you have ${totalKidneys} Kidneys`
  );
});

//now update the unhealthy kidney to healthy one use put
app.put("/replace", (req, res) => {
  updateTohealthy();
  res.send(
    `Congrats All unhealthy kidneys are replace with healthy one,healthy kidney is ${healthyKidney}`
  );
});

//now delete the kidney (unhealthy)
app.delete("/remove", (req, res) => {
  removekidney();
  

  res.send(
    `Congratulations,your unhealthy kidney has been removed now you have only ${healthyKidney} healthy kidney `
  );
});

app.listen(port, () => {
  console.log(`Server is running`);
});
