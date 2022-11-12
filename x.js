let bc = require('bcryptjs')
let saltRounds = 14 // The higher the saltRounds value, the more time the hashing algorithm takes. 
// Note equal time is taken to verify as well i.e, when we call `compareSync` funciton.
let salt = bc.genSaltSync(saltRounds) // DEFAULT VALUE for salt is 10

console.log('SALT:', salt)

let hash = bc.hashSync('car', salt)
console.log('HASH:', hash)

// Verify
console.log(bc.compareSync('car', hash)) // true

// SAMPLE OUTPUTS:
// SALT: $2a$10$HKfmu6IQUO4B9b/8LcdrVu
// HASH: $2a$10$HKfmu6IQUO4B9b/8LcdrVu9YsuALxHTA0GBUvyj4b2Ia/nB5JlKgm

// SALT: $2a$10$1FIlrxjpmaypBpSKGkScPO
// HASH: $2a$10$1FIlrxjpmaypBpSKGkScPOUFP9HgmFHoDOk.rIK8D.OGX6CoBV2U6

// SALT: $2a$10$uKX.sCX2wIezRsIKcEXK2u
// HASH: $2a$10$uKX.sCX2wIezRsIKcEXK2uQyVBLfznBA571yanO3uGsPWze.jahhe
