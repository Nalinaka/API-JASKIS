# JASKIS

This is an activity for FSWD Lesson 6.7.3 - JASKIS.

Please refer to the Activity Guide in Canvas for directions.
# mongodb-jaskis
# mongodb-jaskis

- InsertMany command is empty

- // 1. Update the reward for Polarwind to 10000,
You are missing double quotes  for the value:
->> db.bounties.findOneAndUpdate({name: Polarwind}, {$inc:{reward: 10000}})
