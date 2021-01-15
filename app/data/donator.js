const db = require("./db-config");
module.exports = {
  createDonator: (req, res) => {
    const { name, location, phone, email, dob } = req.body;
    db("donators")
      .insert({
        name: name,
        location: location,
        phone: phone,
        email: email,
        dob: dob,
      })
      .then((d) => {
        console.log("Donor created !");
        res.status(201).send(d);
      })
      .catch((e) => {
        console.log(e);
        throw e;
        res.status(401).send({ err: e });
      });
  },

  getAllDonators: (req, res) => {
    db.select("*")
      .from("donators")
      .then((don) => {
        return res.status(201).send(don);
      })
      .catch((e) => {
        console.log(e);
        throw e;
        res.status(401).send({ err: e });
      });
  },

  findByLocation: (req, res) => {
    const loc = req.params["loc"];
    // console.log(`id=${id}`);
    db.select("*")
      .from("donators")
      .where("location", loc)
      .then((don) => {
        res.status(201).send(don);
      })
      .catch((e) => {
        console.log("Error Catch");
        throw e;
        res.status(401).send({ err: e });
      });
  },
  findById: (req, res) => {
    const id = req.params["id"];
    // console.log(`id=${id}`);
    db.select("*")
      .from("donators")
      .where("id", id)
      .then((don) => {
        res.status(201).send(don);
      })
      .catch((e) => {
        console.log("Error Catch");
        throw e;
        res.status(401).send({ err: e });
      });
  },

  findByIdAndUpdate: (req, res) => {
    const id = req.params["id"];
    const { name, location, phone, email, dob } = req.body;
    db("donators")
      .where("id", id)
      .update({
        name: name,
        location: location,
        phone: phone,
        email: email,
        dob: dob,
      })
      .then((e) => {
        console.log(e);
      });
    return res.send("updated");
  },
  findByIdAndDelete: async (req, res) => {
    const id = req.params["id"];
    // console.log(id);
    db("donators")
      .where("id", id)
      .del()
      .then((p) => {});
    res.send("Deleted");
  },
};
