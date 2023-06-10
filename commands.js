// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis

// 2. Create a collection called bounties
db.createCollection('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.collections.insertOne({
  name: "Thanoceros",
  species: "Rhinoceros",
  location: "Grasslands",
  wantedFor: "Eating too much grass",
  client: "Songbird",
  reward: 10000,
  captured: false
})

// 2. Query for all bounties in the bounties collection
show collections

// 3. Insert many bounties at once using the given objects
db.bounties.insertMany([])

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.bounties.find()

// 2. Query for all bounties with a reward worth 10000 or more
db.destinations.updateOne(
    {
        "name": "Scavengers",
        "species": "animals",
        "location": "Grasslands",
        "wantedFor": "transportation broke down",
        "client": "Scavengers",
        "reward": 10000,
        "captured": false
      }
)

// 3. Query for all bounties, but exclude the client attribute from being shown


// 4. Query for a Groundhog in the Woodlands


// Update and Delete
// 1. Update the reward for Polarwind to 10000

// 2. Remove Lokinkajou

// 3. Delete all bounties sent by Songbird

// 4. Update all captured statuses to true