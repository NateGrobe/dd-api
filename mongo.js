use dsg

db.dives.drop()

try {
  db.dives.insertMany([
    {name: "front dive", number: "101", direction: "front",
      dd: {
        one: { a: 1.4, b: 1.3, c: 1.2, },
        three: { a: 1.6, b: 1.5, c: 1.4, },
        five: { a: 1.4, b: 1.3, c: 1.2, },
        seven: { a: 1.6, b: 1.5, c: 1.4, },
        ten: { a: 1.6, b: 1.5, c: 1.4, },
      }
    },
    {name: "front 1 somersault", number: "102", direction: "front",
      dd: {
        one: { a: 1.6, b: 1.5, c: 1.4, },
        three: { a: 1.7, b: 1.6, c: 1.5, },
        five: { a: 1.6, b: 1.5, c: 1.4, },
        seven: { a: 1.7, b: 1.6, c: 1.5, },
        ten: { a: 1.8, b: 1.7, c: 1.6, },
      }
    },
    {name: "front 1 1/2 somersaults", number: "103", direction: "front",
      dd: {
        one: { a: 2.0, b: 1.7, c: 1.6, },
        three: { a: 1.9, b: 1.6, c: 1.5, },
        five: { a: 2.0, b: 1.7, c: 1.6, },
        seven: { a: 1.9, b: 1.6, c: 1.5, },
        ten: { a: 1.9, b: 1.6, c: 1.5, },
      }
    },
    {name: "front 2 somersaults", number: "104", direction: "front",
      dd: {
        one: { a: 2.6, b: 2.3, c: 2.2, },
        three: { a: 2.4, b: 2.1, c: 2.0, },
        five: { a: 2.6, b: 2.3, c: 2.2, },
        seven: { a: 2.4, b: 2.1, c: 2.0, },
        ten: { a: 2.5, b: 2.2, c: 2.1, },
      }
    },
    {name: "front 2 1/2 somersaults", number: "105", direction: "front",
      dd: {
        one: { b: 2.6, c: 2.4 },
        three: { a: 2.8, b: 2.4, c: 2.2 },
        five: { b: 2.6, c: 2.4 },
        seven: { b: 2.4, c: 2.2 },
        ten: { a: 2.7, b: 2.3, c: 2.1 },
      }
    },
    {name: "front 3 somersaults", number: "106", direction: "front",
      dd: {
        one: { b: 3.2, c: 2.9 },
        three: { b: 2.8, c: 2.5 },
        five: { b: 3.2, c: 2.9 },
        seven: { b: 2.8, c: 2.5 },
        ten: { b: 3.0, c: 2.7 },
      }
    },
    {name: "front 3 1/2 somersaults", number: "107", direction: "front",
      dd: {
        one: { b: 3.3, c: 3.0 },
        three: { b: 3.1, c: 2.8 },
        five: { c: 3.0 },
        seven: { b: 3.1, c: 2.8 },
        ten: { b: 3.0, c: 2.7 },
      }
    },
    {name: "front 4 somersaults", number: "108", direction: "front",
      dd: {
        one: { c: 4.0 },
        three: { b: 3.8, c: 3.4 },
        ten: { b: 4.1, c: 3.7 },
      }
    },
    {name: "front 4 1/2 somersaults", number: "109", direction: "front",
      dd: {
        one: { c: 4.3 },
        three: { b: 4.2, c: 3.8 },
        ten: { b: 4.1, c: 3.7 },
      }
    },
    {name: "front 5 1/2 somersaults", number: "1011", direction: "front",
      dd: {
        ten: { c: 4.7 },
      }
    },
    {name: "front flying somersault", number: "112", direction: "front",
      dd: {
        one: { b: 1.7, c: 1.6 },
        three: { b: 1.8, c: 1.7 },
        five: { b: 1.7, c: 1.6 },
        seven: { b: 1.8, c: 1.7 },
        ten: { b: 1.9, c: 1.8 },
      }
    },
    {name: "front flying 1 1/2 somersaults", number: "113", direction: "front",
      dd: {
        one: {b: 1.9, c: 1.8},
        three: {b: 1.8, c: 1.7},
        five: {b: 1.9, c: 1.8},
        seven: {b: 1.8, c: 1.7},
        ten: { b: 1.8, c: 1.7 },
      }
    },
    {name: "front flying 2 somersaults", number: "114", direction: "front",
      dd: {
        five: { b: 2.5, c: 2.4},
        seven: { b: 2.3, c: 2.2 },
        ten: { b: 2.4, c: 2.3 },
      }
    },
    {name: "front flying 2 1/2 somersaults", number: "115", direction: "front",
      dd: {
        three: { b: 2.7, c: 2.5 },
        seven: { c: 2.5 },
        ten: { b: 2.6, c: 2.4 },
      }
    },
    { name: "back dive", number: "201", direction: "back", 
      dd: {
        one: { a: 1.7, b: 1.6, c: 1.5 },
        three: { a: 1.9, b: 1.8, c: 1.7 },
        five: { a: 1.7, b: 1.6, c: 1.5 },
        seven: { a: 1.9, b: 1.8, c: 1.7 },
        ten: { a: 1.9, b: 1.8, c: 1.7 },
      }
    },
    { name: "back somersault", number: "202", direction: "back", 
      dd: {
        one: { a: 1.7, b: 1.6, c: 1.5 },
        three: { a: 1.8, b: 1.7, c: 1.6 },
        five: { a: 1.7, b: 1.6, c: 1.5 },
        seven: { a: 1.8, b: 1.7, c: 1.6 },
        ten: { a: 1.9, b: 1.8, c: 1.7 },
      }
    },
    { name: "back 1 1/2 somersaults", number: "203", direction: "back", 
      dd: {
        one: { a: 2.5, b: 2.3, c: 2.0 },
        three: { a: 2.4, b: 2.2, c: 1.9 },
        five: { a: 2.5, b: 2.3, c: 2.0 },
        seven: { a: 2.4, b: 2.2, c: 1.9 },
        ten: { a: 2.4, b: 2.2, c: 1.9 },
      }
    },
    { name: "back 2 somersaults", number: "204", direction: "back", 
      dd: {
        one: { b: 2.5, c: 2.2 },
        three: { a: 2.5, b: 2.3, c: 2.0 },
        five: { b: 2.5, c: 2.2 },
        seven: { a: 2.5, b: 2.3, c: 2.0 },
        ten: { a: 2.6, b: 2.4, c: 2.1 },
      }
    },
    { name: "back 2 1/2 somersaults", number: "205", direction: "back", 
      dd: {
        one: { b: 3.2, c: 3.0 },
        three: { b: 3.0, c: 2.8 },
        five: { b: 3.2, c: 3.0 },
        seven: { b: 3.0, c: 2.8 },
        ten: { a: 3.3, b: 2.9, c: 2.7 },
      }
    },
    { name: "back 3 somersaults", number: "206", direction: "back", 
      dd: {
        one: { b: 3.2, c: 2.9 },
        three: { b: 2.8, c: 2.5 },
        five: { b: 3.2, c: 2.9 },
        seven: { b: 2.8, c: 2.5 },
        ten: { b: 3.0, c: 2.7 },
      }
    },
    { name: "back 3 1/2 somersaults", number: "207", direction: "back", 
      dd: {
        three: { b: 3.9, c: 3.6 },
        seven: { c: 3.5 },
        ten: { b: 3.6, c: 3.3 },
      }
    },
    { name: "back 4 somersaults", number: "208", direction: "back", 
      dd: {
        three: { b: 3.7, c: 3.4 },
        five: { b: 4.4, c: 4.1 },
        seven: { b: 4.2, c: 3.9 },
        ten: { b: 4.1, c: 3.8 },
      }
    },
    { name: "back 4 1/2 somersaults", number: "209", direction: "back", 
      dd: {
        three: { b: 4.7, c: 4.4 },
        ten: { b: 4.5, c: 4.2 },
      }
    },
    { name: "back flying somersault", number: "212", direction: "back", 
      dd: {
        one: { b: 1.7, c: 1.6 },
        three: { b: 1.8, c: 1.7 },
        five: { b: 1.7, c: 1.6 },
        seven: { b: 1.8, c: 1.7 },
        ten: { b: 1.9, c: 1.8 },
      }
    },
    { name: "back flying 1 1/2 somersaults", number: "213", direction: "back", 
      dd: {
        three: { b: 2.4, c: 2.1 },
        five: { b: 2.5, c: 2.2 },
        seven: { b: 2.4, c: 2.1 },
        ten: { b: 2.4, c: 2.1 },
      }
    },
    { name: "back flying 2 1/2 somersaults", number: "215", direction: "back", 
      dd: {
        three: { b: 3.3, c: 3.1 },
        ten: { b: 3.2, c: 3.0 },
      }
    },
    { name: "reverse dive", number: "301", direction: "reverse", 
      dd: {
        one: { a: 1.8, b: 1.7, c: 1.6 },
        three: { a: 2.0, b: 1.9, c: 1.8 },
        five: { a: 1.8, b: 1.7, c: 1.6 },
        seven: { a: 2.0, b: 1.9, c: 1.8 },
        ten: { a: 2.0, b: 1.9, c: 1.8 },
      }
    },
    { name: "reverse somersault", number: "302", direction: "reverse", 
      dd: {
        one: { a: 1.8, b: 1.7, c: 1.6 },
        three: { a: 1.9, b: 1.8, c: 1.7 },
        five: { a: 1.8, b: 1.7, c: 1.6 },
        seven: { a: 1.9, b: 1.8, c: 1.7 },
        ten: { a: 2.0, b: 1.9, c: 1.8 },
      }
    },
    { name: "reverse 1 1/2 somersaults ", number: "303", direction: "reverse", 
      dd: {
        one: { a: 2.7, b: 2.4, c: 2.1 },
        three: { a: 2.6, b: 2.3, c: 2.0 },
        five: { a: 2.7, b: 2.4, c: 2.1 },
        seven: { a: 2.6, b: 2.3, c: 2.0 },
        ten: { a: 2.6, b: 2.3, c: 2.0 },
      }
    },
    { name: "reverse 2 somersaults", number: "304", direction: "reverse", 
      dd: {
        one: { a: 2.9, b: 2.6, c: 2.3 },
        three: { a: 2.7, b: 2.4, c: 2.1 },
        five: { a: 2.9, b: 2.6, c: 2.3 },
        seven: { a: 2.7, b: 2.4, c: 2.1 },
        ten: { a: 2.8, b: 2.5, c: 2.2 },
      }
    },
    { name: "reverse 2 1/2 somersaults", number: "305", direction: "reverse", 
      dd: {
        one: { b: 3.2, c: 3.0 },
        three: { a: 3.4, b: 3.0, c: 2.8 },
        five: { b: 3.3, c: 3.1 },
        sevent: { a: 3.5, b: 3.1, c: 2.9 },
        ten: { a: 3.4, b: 3.0, c: 2.8 },
      }
    },
    { name: "reverse 3 somersaults", number: "306", direction: "reverse", 
      dd: {
        one: { b: 3.3, c: 3.0 },
        three: { b: 2.9, c: 2.6 },
        five: { b: 3.4, c: 3.1 },
        seven: { b: 3.0, c: 2.7 },
        ten: { b: 3.2, c: 2.9 },
      }
    },
    { name: "reverse 3 1/2 somersaults ", number: "307", direction: "reverse", 
      dd: {
        three: { b: 3.8, c: 3.5 },
        ten: { b: 3.7, c: 3.4 },
      }
    },
    { name: "reverse 4 somersaults", number: "308", direction: "reverse", 
      dd: {
        three: { b: 3.7, c: 3.4 },
        seven: { b: 4.5, c: 4.2 },
        ten: { b: 4.4, c: 4.1 },
      }
    },
    { name: "reverse 4 1/2 somersaults ", number: "309", direction: "reverse", 
      dd: {
        three: { b: 4.7, c: 4.4 },
        ten: { b: 4.8, c: 4.5 },
      }
    },
    { name: "reverse flying somersault", number: "312", direction: "reverse", 
      dd: {
        one: { b: 1.8, c: 1.7 },
        three: { b: 1.9, c: 1.8 },
        five: { b: 1.8, c: 1.7 },
        seven: { b: 1.9, c: 1.8 },
        ten: { b: 2.0, c: 1.9 },
      }
    },
    { name: "reverse flying 1 1/2 somersaults", number: "313", direction: "reverse", 
      dd: {
        one: { b: 2.6, c: 2.3 },
        three: { b: 2.5, c: 2.2 },
        five: { b: 2.6, c: 2.3 },
        seven: { b: 2.5, c: 2.2 },
        ten: { b: 2.5, c: 2.2 },
      }
    },
    { name: "inward dive", number: "401", direction: "inward", 
      dd: {
        one: { a: 1.8, b: 1.5, c: 1.4 },
        three: { a: 1.7, b: 1.4, c: 1.3 },
        five: { a: 1.8, b: 1.5, c: 1.4 },
        seven: { a: 1.7, b: 1.4, c: 1.3 },
        ten: { a: 1.7, b: 1.4, c: 1.3 },
      }
    },
    { name: "inward somersault", number: "402", direction: "inward", 
      dd: {
        one: { a: 2.0, b: 1.7, c: 1.6 },
        three: { a: 1.8, b: 1.5, c: 1.4 },
        five: { a: 2.0, b: 1.7, c: 1.6 },
        seven: { a: 1.8, b: 1.5, c: 1.4 },
        ten: { a: 1.9, b: 1.6, c: 1.5 }
      }
    },
    { name: "inward 1 1/2 somersaults", number: "403", direction: "inward", 
      dd: {
        one: { b: 2.4, c: 2.2 },
        three: { b: 2.1, c: 1.9 },
        five: { b: 2.4, c: 2.2 },
        seven: { b: 2.1, c: 1.9 },
        ten: { b: 2.0, c: 1.8 }
      }
    },
    { name: "inward 2 somersaults", number: "404", direction: "inward", 
      dd: {
        one: { b: 3.0, c: 2.8 },
        three: { b: 2.6, c: 2.4 },
        five: { b: 3.0, c: 2.8 },
        seven: { b: 2.6, c: 2.4 },
        ten: { b: 2.6, c: 2.4 }
      }
    },
    { name: "inward 2 1/2 somersaults", number: "405", direction: "inward", 
      dd: {
        one: { b: 3.4, c: 3.1 },
        three: { b: 3.0, c: 2.7 },
        five: { b: 3.4, c: 3.1 },
        seven: { b: 3.0, c: 2.7 },
        ten: { b: 2.8, c: 2.5 }
      }
    },
    { name: "inward 3 somersaults", number: "406", direction: "inward", 
      dd: {
        five: { b: 4.0, b: 3.7 },
        seven: { b: 3.4, c: 3.1 },
        ten: { b: 3.5, c: 3.2 },
      }
    },
    { name: "inward 3 1/2 somersaults", number: "407", direction: "inward", 
      dd: {
        three: { b: 3.7, c: 3.4 },
        seven: { c: 3.4 },
        ten: { b: 3.5, c: 3.2 }
      }
    },
    { name: "inward 4 somersaults", number: "408", direction: "inward", 
      dd: {
        ten: { b: 4.4, c: 4.1 },
      }
    },
    { name: "inward 4 1/2 somersaults", number: "409", direction: "inward", 
      dd: {
        three: { b: 4.6, c: 4.2 },
        ten: { b: 4.4, c: 4.1 }
      }
    },
    { name: "inward flying somersault", number: "412", direction: "inward", 
      dd: {
        one: { b: 2.1, c: 2.0 },
        three: { b: 1.9, c: 1.8 },
        five: { b: 2.1, c: 2.0 },
        seven: { b: 1.9, c: 1.8 },
        ten: { b: 2.0, c: 1.9 }
      }
    },
    { name: "inward flying 1 1/2 somersaults", number: "413", direction: "inward", 
      dd: {
        one: { b: 2.9, c: 2.7 },
        three: { b: 2.6, c: 2.4 },
        five: { b: 2.9, c: 2.7 },
        seven: { b: 2.6, c: 2.4 },
        ten: { b: 2.5, c: 2.3 }
      }
    },
    { name: "front dive 1/2 twist", number: "5111", direction: "twister", 
      dd: {
        one: { a: 1.8, b: 1.7, c: 1.6 },
        three: { a: 2.0, b: 1.9, c: 1.8 },
        five: { a: 1.8, b: 1.7, c: 1.6 },
        seven: { a: 2.0, b: 1.9, c: 1.8 },
        ten: { a: 2.0, b: 1.9, c: 1.8 },
      }
    },
    { name: "front dive 1 twist", number: "5112", direction: "twister", 
      dd: {
        one: { a: 2.0, b: 1.9 },
        three: { a: 2.2, b: 2.1 },
        five: { a: 2.0, b: 1.9 },
        seven: { a: 2.2, b: 2.1 },
        ten: { a: 2.2, b: 2.1 },
      }
    },
    { name: "front somersault 1/2 twist", number: "5121", direction: "twister", 
      dd: {
        one: { d: 1.7 },
        three: { d: 1.8 },
        five: { d: 1.7 },
        seven: { d: 1.8 },
        ten: { d: 1.9 },
      }
    },
    { name: "front somersault 1 twist", number: "5122", direction: "twister", 
      dd: {
        one: { d: 1.9 },
        three: { d: 2.0 },
        five: { d: 1.9 },
        seven: { d: 2.0 },
        ten: { d: 2.1 },
      }
    },
    { name: "front somersault 2 twist", number: "5124", direction: "twister", 
      dd: {
        one: { d: 2.3 },
        three: { d: 2.4 },
        five: { d: 2.3 },
        seven: { d: 2.4 },
        ten: { d: 2.5 },
      }
    },
    { name: "front somersault 3 twist", number: "5126", direction: "twister", 
      dd: {
        one: { d: 2.8 },
        three: { d: 2.9 },
      }
    },
    { name: "front 1 1/2 somersaults 1/2 twist", number: "5131", direction: "twister", 
      dd: {
        one: { d: 2.0 },
        three: { d: 1.9 },
        five: { d: 2.0 },
        seven: { d: 1.9 },
        ten: { d: 1.9 },
      }
    },
    { name: "front 1 1/2 somersaults 1 twist", number: "5132", direction: "twister", 
      dd: {
        one: { d: 2.2 },
        three: { d: 2.0 },
        five: { d: 2.2 },
        seven: { d: 2.1 },
        ten: { d: 2.1 },
      }
    },
    { name: "front 1 1/2 somersaults 2 twist", number: "5134", direction: "twister", 
      dd: {
        one: { d: 2.6 },
        three: { d: 2.5 },
        five: { d: 2.6 },
        seven: { d: 2.5 },
        ten: { d: 2.5 },
      }
    },
    { name: "front 1 1/2 somersaults 3 twist", number: "5136", direction: "twister", 
      dd: {
        one: { d: 3.1 },
        three: { d: 3.0 },
        five: { d: 3.1 },
        seven: { d: 3.0 },
        ten: { d: 3.0 },
      }
    },
    { name: "front 1 1/2 somersaults 4 twist", number: "5138", direction: "twister", 
      dd: {
        one: { d: 3.5 },
        three: { d: 3.4 },
        five: { d: 3.5 },
        seven: { d: 3.4 },
        ten: { d: 3.4 },
      }
    },
    { name: "front 2 1/2 somersaults 1/2 twist", number: "5151", direction: "twister", 
      dd: {
        one: { b: 3.0, c: 2.8 },
        three: { b: 2.8, c: 2.6 },
      }
    },
    { name: "front 2 1/2 somersaults 1 twist", number: "5152", direction: "twister", 
      dd: {
        one: { b: 3.2, c: 3.0 },
        three: { b: 3.0, c: 2.8 },
        five: { b: 3.2, c: 3.0 },
        seven: { b: 3.0, c: 2.8 },
        ten: { b: 2.9, c: 2.7 },
      }
    },
    { name: "front 2 1/2 somersaults 2 twist", number: "5154", direction: "twister", 
      dd: {
        one: { b: 3.6, c: 3.4 },
        three: { b: 3.4, c: 3.2 },
        five: { b: 3.6, c: 3.4 },
        seven: { b: 3.4, c: 3.2 },
        ten: { b: 3.3, c: 3.1 }
      }
    },
    { name: "front 2 1/2 somersaults 3 twist", number: "5156", direction: "twister", 
      dd: {
        three: { b: 3.9, c: 3.7 },
        ten: { b: 3.8, c: 3.6 }
      }
    },
    { name: "front 3 1/2 somersaults 1 twist", number: "5172", direction: "twister", 
      dd: {
        three: { b: 3.7, c: 3.4 },
        seven: { b: 3.7, c: 3.4 },
        ten: { b: 3.6, c: 3.3 },
      }
    },
    { name: "back dive 1/2 twist", number: "5211", direction: "twister", 
      dd: {
        one: { a: 1.8, b: 1.7, c: 1.6 },
        three: { a: 2.0, b: 1.9, c: 1.8 },
        five: { a: 1.8, b: 1.7, c: 1.6 },
        seven: { a: 2.0, b: 1.9, c: 1.8 },
        ten: { a: 2.0, b: 1.9, c: 1.8 },
      }
    },
    { name: "back dive 1 twist", number: "5212", direction: "twister", 
      dd: {
        one: { a: 2.0 },
        three: { a: 2.2 },
        five: { a: 2.0 },
        seven: { a: 2.2 },
        ten: { a: 2.2 },
      },
    },
    { name: "back somersault 1/2 twist", number: "5221", direction: "twister", 
      dd: {
        one: { d: 1.7 },
        three: { d: 1.8 },
        five: { d: 1.7 },
        seven: { d: 1.8 },
        ten: { d: 1.9 },
      },
    },
    { name: "back somersault 1 twist", number: "5222", direction: "twister", 
      dd: {
        one: { d: 1.9 },
        three: { d: 2.0 },
        five: { d: 1.9 },
        seven: { d: 2.0 },
        ten: { d: 2.1 },
      },
    },
    { name: "back somersault 1 1/2 twist", number: "5223", direction: "twister", 
      dd: {
        one: { d: 2.3 },
        three: { d: 2.4 },
        five: { d: 2.3 },
        seven: { d: 2.4 },
        ten: { d: 2.5 },
      },
    },
    { name: "back somersault 2 1/2 twist", number: "5225", direction: "twister", 
      dd: {
        one: { d: 2.7 },
        three: { d: 2.8 },
        five: { d: 2.7 },
        seven: { d: 2.8 },
        ten: { d: 2.9 },
      },
    },
    { name: "back somersault 3 1/2 twist", number: "5227", direction: "twister", 
      dd: {
        one: { d: 3.2 },
        three: { d: 3.3 },
      },
    },
    { name: "back 1 1/2 somersaults 1/2 twist", number: "5231", direction: "twister", 
      dd: {
        one: { d: 2.1 },
        three: { d: 2.0 },
        five: { d: 2.1 },
        seven: { d: 2.0 },
        ten: { d: 2.0 },
      },
    },
    { name: "back 1 1/2 somersaults 1 1/2 twist", number: "5233", direction: "twister", 
      dd: {
        one: { d: 2.5 },
        three: { d: 2.4 },
        five: { d: 2.5 },
        seven: { d: 2.4 },
        ten: { d: 2.4 },
      },
    },
    { name: "back 1 1/2 somersaults 2 1/2 twist", number: "5235", direction: "twister", 
      dd: {
        one: { d: 2.9 },
        three: { d: 2.8 },
        five: { d: 2.9 },
        seven: { d: 2.8 },
        ten: { d: 2.8 },
      },
    },
    { name: "back 1 1/2 somersaults 3 1/2 twist", number: "5237", direction: "twister", 
      dd: {
        three: { d: 3.3 },
        five: { d: 3.4 },
        seven: { d: 3.3 },
        ten: { d: 3.3 },
      },
    },
    { name: "back 1 1/2 somersaults 4 1/2 twist", number: "5239", direction: "twister", 
      dd: {
        three: { d: 3.7 },
        five: { d: 3.8 },
        seven: { d: 3.7 },
        ten: { d: 3.7 },
      },
    },
    { name: "back 2 1/2 somersaults 1/2 twist", number: "5251", direction: "twister", 
      dd: {
        one: { b: 2.9, c: 2.7 },
        three: { b: 2.7, c: 2.5 },
        five: { b: 2.9, c: 2.7 },
        seven: { b: 2.7, c: 2.5 },
        ten: { b: 2.6, c: 2.4 }
      },
    },
    { name: "back 2 1/2 somersaults 1 1/2 twist", number: "5253", direction: "twister", 
      dd: {
        three: { b: 3.4, c: 3.2 },
        seven: { b: 3.3, c: 3.1 },
        ten: { b: 3.2, c: 3.0 },
      },
    },
    { name: "back 2 1/2 somersaults 2 1/2 twist", number: "5255", direction: "twister", 
      dd: {
        three: { b: 3.8, c: 3.6 },
        ten: { b: 3.6, c: 3.4 }
      },
    },
    { name: "back 2 1/2 somersaults 3 1/2 twist", number: "5257", direction: "twister", 
      dd: {
        ten: { b: 4.1, c: 3.9 }
      },
    },
    { name: "back 3 1/2 somersaults 1/2 twist", number: "5271", direction: "twister", 
      dd: {
        ten: { b: 3.2, c: 2.9 }
      },
    },
    { name: "back 3 1/2 somersaults 1 1/2 twist", number: "5273", direction: "twister", 
      dd: {
        ten: { b: 3.8, c: 3.5 }
      },
    },
    { name: "back 3 1/2 somersaults 2 1/2 twist", number: "5275", direction: "twister", 
      dd: {
        ten: { b: 4.2, c: 3.9 }
      },
    },
    { name: "reverse dive 1/2 twist", number: "5311", direction: "twister", 
      dd: {
        one: { a: 1.9, b: 1.8, c: 1.7 },
        three: { a: 2.1, b: 2.0, c: 1.9 },
        five: { a: 1.9, b: 1.8, c: 1.7 },
        seven: { a: 2.1, b: 2.0, c: 1.9 },
        ten: { a: 2.1, b: 2.0, c: 1.9 },
      },
    },
    { name: "reverse dive 1 twist", number: "5312", direction: "twister", 
      dd: {
        one: { a: 2.1 },
        three: { a: 2.3 },
        five: { a: 2.1 },
        seven: { a: 2.3 },
        ten: { a: 2.3 },
      },
    },
    { name: "reverse somersault 1/2 twist", number: "5321", direction: "twister", 
      dd: {
        one: { d: 1.8 },
        three: { d: 1.9 },
        five: { d: 1.8 },
        seven: { d: 1.9 },
        ten: { d: 2.0 },
      },
    },
    { name: "reverse somersault 1 twist", number: "5322", direction: "twister", 
      dd: {
        one: { d: 2.0 },
        three: { d: 2.1 },
        five: { d: 2.0 },
        seven: { d: 2.1 },
        ten: { d: 2.2 },
      },
    },
    { name: "reverse somersault 1 1/2 twist", number: "5323", direction: "twister", 
      dd: {
        one: { d: 2.4 },
        three: { d: 2.5 },
        five: { d: 2.4 },
        seven: { d: 2.5 },
        ten: { d: 2.6 },
      },
    },
    { name: "reverse somersault 2 1/2 twist", number: "5325", direction: "twister", 
      dd: {
        one: { d: 2.8 },
        three: { d: 2.9 },
        five: { d: 2.8 },
        seven: { d: 2.9 },
        ten: { d: 3.0 }
      },
    },
    { name: "reverse 1 1/2 somersaults 1/2 twist", number: "5331", direction: "twister", 
      dd: {
        one: { d: 2.2 },
        three: { d: 2.1 },
        five: { d: 2.2 },
        seven: { d: 2.1 },
        ten: { d: 2.1 },
      },
    },
    { name: "reverse 1 1/2 somersaults 1 1/2 twist", number: "5333", direction: "twister", 
      dd: {
        one: { d: 2.6 },
        three: { d: 2.5 },
        five: { d: 2.6 },
        seven: { d: 2.5 },
        ten: { d: 2.5 },
      },
    },
    { name: "reverse 1 1/2 somersaults 2 1/2 twist", number: "5335", direction: "twister", 
      dd: {
        one: { d: 3.0 },
        three: { d: 2.9 },
        five: { d: 3.0 },
        seven: { d: 2.9 },
        ten: { d: 2.9 },
      },
    },
    { name: "reverse 1 1/2 somersaults 3 1/2 twist", number: "5337", direction: "twister", 
      dd: {
        one: { d: 3.6 },
        three: { d: 3.5 },
        five: { d: 3.5 },
        seven: { d: 3.4 },
        ten: { d: 3.4 }
      },
    },
    { name: "reverse 1 1/2 somersaults 4 1/2 twist", number: "5339", direction: "twister", 
      dd: {
        three: { d: 3.8 },
        seven: { d: 3.8 },
        ten: { d: 3.8 },
      },
    },
    { name: "reverse 2 1/2 somersaults 1/2 twist", number: "5351", direction: "twister", 
      dd: {
        one: { b: 2.9, c: 2.7 },
        three: { b: 2.7, c: 2.5 },
        five: { b: 2.8, c: 2.6 },
        seven: { b: 2.8, c: 2.6 },
        ten: { b: 2.7, c: 2.5 }
      },
    },
    { name: "reverse 2 1/2 somersaults 1 1/2 twist", number: "5353", direction: "twister", 
      dd: {
        one: { b: 3.5, c: 3.3 },
        three: { b: 3.3, c: 3.1 },
        five: { c: 3.4 },
        seven: { b: 3.4, c: 3.2 },
        ten: { b: 3.3, c: 3.1 },
      },
    },
    { name: "reverse 2 1/2 somersaults 2 1/2 twist", number: "5355", direction: "twister", 
      dd: {
        one: { b: 3.9, c: 3.7 },
        three: { b: 3.7, c: 3.5 },
        five: { c: 3.8 },
        seven: { b: 3.8, c: 3.6 },
        ten: { b: 3.7, c: 3.5 },
      },
    },
    { name: "reverse 3 1/2 somersaults 1/2 twist", number: "5371", direction: "twister", 
      dd: {
        three: { b: 3.4, c: 3.1 },
        ten: { b: 3.3, c: 3.0 },
      },
    },
    { name: "reverse 3 1/2 somersaults 1 1/2 twist", number: "5373", direction: "twister", 
      dd: {
        three: { c: 3.7 },
        ten: { c: 3.6 }
      },
    },
    { name: "reverse 3 1/2 somersaults 2 1/2 twist", number: "5375", direction: "twister", 
      dd: {
        three: { c: 4.1 },
        ten: { c: 4.0 }
      },
    },
    { name: "inward dive 1/2 twist", number: "5411", direction: "twister", 
      dd: {
        one: { a: 2.0, b: 1.7, c: 1.6 },
        three: { a: 1.9, b: 1.6, c: 1.5 },
        five: { a: 2.0, b: 1.7, c: 1.6 },
        seven: { a: 1.9, b: 1.6, c: 1.5 },
        ten: { a: 1.9, b: 1.6, c: 1.5 },
      },
    },
    { name: "inward dive 1 twist", number: "5412", direction: "twister", 
      dd: {
        one: { a: 2.2, b: 1.9, c: 1.8 },
        three: { a: 2.1, b: 1.8, c: 1.7 },
        five: { a: 2.2, b: 1.9, c: 1.8 },
        seven: { a: 2.1, b: 1.8, c: 1.7 },
        ten: { a: 2.1, b: 1.8, c: 1.7 },
      },
    },
    { name: "inward somersault 1/2 twist", number: "5421", direction: "twister", 
      dd: {
        one: { d: 1.9 },
        three: { d: 1.7 },
        five: { d: 1.9 },
        seven: { d: 1.7 },
        ten: { d: 1.8 },
      },
    },
    { name: "inward somersault 1 twist", number: "5422", direction: "twister", 
      dd: {
        one: { d: 2.1 },
        three: { d: 1.9 },
        five: { d: 2.1 },
        seven: { d: 1.9 },
        ten: { d: 2.0 },
      },
    },
    { name: "inward 1 1/2 somersaults 1 twist", number: "5432", direction: "twister", 
      dd: {
        one: { d: 2.7 },
        three: { d: 2.4 },
        five: { d: 2.7 },
        seven: { d: 2.4 },
        ten: { d: 2.3 },
      },
    },
    { name: "inward 1 1/2 somersaults 2 twist", number: "5434", direction: "twister", 
      dd: {
        one: { d: 3.1 },
        three: { d: 2.8 },
        five: { d: 3.1 },
        seven: { d: 2.8 },
        ten: { d: 2.7 },
      },
    },
    { name: "inward 1 1/2 somersaults 3 twist", number: "5436", direction: "twister", 
      dd: {
        three: { d: 3.5 },
        ten: { d: 3.4 },
      },
    },
    { name: "armstand dive", number: "600", direction: "armstand", 
      dd: {
        five: { a: 1.5 },
        seven: { a: 1.6 },
        ten: { a: 1.6 },
      },
    },
    { name: "armstand front 1/2 somersault", number: "611", direction: "armstand", 
      dd: {
        five: { a: 1.8, b: 1.7, c: 1.5 },
        seven: { a: 2.0, b: 1.9, c: 1.7 },
        ten: { a: 2.0, b: 1.9, c: 1.7 },
      },
    },
    { name: "armstand front 1 somersault", number: "612", direction: "armstand", 
      dd: {
        five: { a: 1.8, b: 1.7, c: 1.5 },
        seven: { a: 1.9, b: 1.8, c: 1.6 },
        ten: { a: 2.0, b: 1.9, c: 1.7 },
      },
    },
    { name: "armstand front 2 somersaults", number: "614", direction: "armstand", 
      dd: {
        five: { b: 2.5, c: 2.2 },
        seven: { b: 2.3, c: 2.0 },
        ten: { b: 2.4, c: 2.1 },
      },
    },
    { name: "armstand front 3 somersaults", number: "616", direction: "armstand", 
      dd: {
        ten: { b: 3.3, c: 3.1 },
      },
    },
    { name: "armstand back 1/2 somersault", number: "621", direction: "armstand", 
      dd: {
        five: { a: 1.7, b: 1.6, c: 1.4 },
        seven: { a: 1.9, b: 1.8, c: 1.6 },
        ten: { a: 1.9, b: 1.8, c: 1.6 },
      },
    },
    { name: "armstand back somersault", number: "622", direction: "armstand", 
      dd: {
        five: { a: 2.1, b: 2.0, c: 1.8 },
        seven: { a: 2.2, b: 2.1, c: 1.9 },
        ten: { a: 2.3, b: 2.2, c: 2.0 },
      },
    },
    { name: "armstand back 1 1/2 somersaults", number: "623", direction: "armstand", 
      dd: {
        five: { b: 2.3, c: 2.0 },
        seven: { b: 2.2, c: 1.9 },
        ten: { b: 2.2, c: 1.9 },
      },
    },
    { name: "armstand back 2 somersaults", number: "624", direction: "armstand", 
      dd: {
        five: { a: 3.1, b: 2.9, c: 2.6 },
        seven: { a: 2.9, b: 2.7, c: 2.4 },
        ten: { a: 3.0, b: 2.8, c: 2.5 },
      },
    },
    { name: "armstand back 3 somersaults", number: "626", direction: "armstand", 
      dd: {
        five: { c: 3.5 },
        seven: { b: 3.3, c: 3.1 },
        ten: { b: 3.5, c: 3.3 },
      },
    },
    { name: "armstand back 4 somersaults", number: "628", direction: "armstand", 
      dd: {
        ten: { b: 4.7, c: 4.5 },
      },
    },
    { name: "armstand reverse 1/2 somersault", number: "631", direction: "armstand", 
      dd: {
        five: { a: 1.8, b: 1.7, c: 1.5 },
        seven: { a: 2.0, b: 1.9, c: 1.7 },
        ten: { a: 2.0, b: 1.9, c: 1.7 },
      },
    },
    { name: "armstand reverse 1 somersault", number: "632", direction: "armstand", 
      dd: {
        five: { b: 2.1, c: 1.9 },
        seven: { b: 2.2, c: 2.0 },
        ten: { b: 2.3, c: 2.1 },
      },
    },
    { name: "armstand reverse 1 1/2 somersaults", number: "633", direction: "armstand", 
      dd: {
        five: { b: 2.4, c: 2.1 },
        seven: { b: 2.3, c: 2.0 },
        ten: { b: 2.3, c: 2.0 },
      },
    },
    { name: "armstand reverse 2 somersaults", number: "634", direction: "armstand", 
      dd: {
        five: { b: 3.0, c: 2.7 },
        seven: { b: 2.8, c: 2.5 },
        ten: { b: 2.9, c: 2.6 },
      },
    },
    { name: "armstand reverse 3 somersaults", number: "636", direction: "armstand", 
      dd: {
        seven: { c: 3.2 },
        ten: { b: 3.6, c: 3.4 },
      },
    },
    { name: "armstand reverse 4 somersaults", number: "638", direction: "armstand", 
      dd: {
        ten: { b: 4.8, c: 4.6 },
      },
    },
    { name: "armstand front somersault 1 twist", number: "6122", direction: "armstand", 
      dd: {
        five: { d: 2.4 },
        seven: { d: 2.5 },
        ten: { d: 2.6 },
      },
    },
    { name: "armstand front somersault 2 twist", number: "6124", direction: "armstand", 
      dd: {
        five: { d: 2.7 },
        seven: { d: 2.8 },
        ten: { d: 2.9 },
      },
    },
    { name: "armstand front 2 somersaults 1 twist", number: "6142", direction: "armstand", 
      dd: {
        five: { d: 3.2 },
        seven: { d: 3.0 },
        ten: { d: 3.1 },
      },
    },
    { name: "armstand front 2 somersaults 2 twist", number: "6144", direction: "armstand", 
      dd: {
        five: { d: 3.5 },
        seven: { d: 3.3 },
        ten: { d: 3.4 },
      },
    },
    { name: "armstand front 3 somersaults 1 twist", number: "6162", direction: "armstand", 
      dd: {
        ten: { c: 3.9 },
      },
    },
    { name: "armstand back somersault 1/2 twist", number: "6221", direction: "armstand", 
      dd: {
        five: { d: 1.6 },
        seven: { d: 1.7 },
        ten: { d: 1.8 },
      },
    },
    { name: "armstand back 2 somersaults 1/2 twist", number: "6241", direction: "armstand", 
      dd: {
        five: { b: 2.8, c: 2.5 },
        seven: { b: 2.6, c: 2.3 },
        ten: { b: 2.7, c: 2.4 },
      },
    },
    { name: "armstand back 2 somersaults 1 1/2 twist", number: "6243", direction: "armstand", 
      dd: {
        five: { d: 3.3 },
        seven: { d: 3.1 },
        ten: { d: 3.2 },
      },
    },
    { name: "armstand back 2 somersaults 2 1/2 twist", number: "6245", direction: "armstand", 
      dd: {
        five: { d: 3.7 },
        seven: { d: 3.5 },
        ten: { d: 3.6 },
      },
    },
    { name: "armstand back 2 somersaults 3 1/2 twist", number: "6247", direction: "armstand", 
      dd: {
        ten: { d: 4.0 },
      },
    },
    { name: "armstand back 3 somersaults 1/2 twist", number: "6261", direction: "armstand", 
      dd: {
        five: { b: 3.6, c: 3.4 },
        seven: { b: 3.2, c: 3.0 },
        ten: { b: 3.4, c: 3.2 },
      },
    },
    { name: "armstand back 3 somersaults 1 1/2 twist", number: "6263", direction: "armstand", 
      dd: {
        ten: { b: 4.2, c: 4.0 },
      },
    },
    { name: "armstand back 3 somersaults 2 1/2 twist", number: "6265", direction: "armstand", 
      dd: {
        ten: { b: 4.6, c: 4.4 },
      },
    },
  ])
} catch (e) {
  console.log("Error updating db", e)
}

