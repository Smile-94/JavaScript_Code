let poorCountry = ["Bangladesh","Sri Lanka"]

let richCountry = [...poorCountry,"China", "Canada", "America"]
let richCountry2 = ["China", "Canada", "America", ...poorCountry]
let richCountry3 = richCountry.push(...poorCountry)

console.log(richCountry);