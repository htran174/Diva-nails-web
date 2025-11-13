// Fields: number, name, price, description, isActive, sortGroup ("eyebrow" | "fullbody"), addons?[{name, price}]

export const WAX_MENU = [
  // ----- EYEBROW / FACE -----
  {
    number: 1,
    name: "Eyebrow Shaping",
    price: "$18.00",
    description: "Customized brow mapping, trim, and tidy finish.",
    isActive: true,
    sortGroup: "face",
    addons: [
      { name: "Brow Tint", price: "+$10" },
      { name: "Between Brows", price: "+$5" }
    ]
  },
  {
    number: 2,
    name: "Upper Lip",
    price: "$10.00",
    description: "Quick gentle wax for a clean finish.",
    isActive: true,
    sortGroup: "face",
    addons: [
      { name: "Lip + Chin Combo", price: "+$15" }
    ]
  },
  {
    number: 3,
    name: "Chin",
    price: "$12.00",
    description: "Targeted removal under lower lip and chin.",
    isActive: true,
    sortGroup: "face"
  },
  {
    number: 4,
    name: "Full Face",
    price: "$40.00",
    description: "Forehead, cheeks, sideburns, lip, and chin (excludes brows).",
    isActive: true,
    sortGroup: "face",
    addons: [
      { name: "Include Brows", price: "+$15" }
    ]
  },

  // ----- BODY -----
  {
    number: 5,
    name: "Underarm",
    price: "$20.00",
    description: "Gentle wax for smooth underarms.",
    isActive: true,
    sortGroup: "fullbody"
  },
  {
    number: 6,
    name: "Half Arm",
    price: "$25.00",
    description: "From wrist to elbow or elbow to shoulder.",
    isActive: true,
    sortGroup: "fullbody",
    addons: [
      { name: "Upgrade to Full Arm", price: "+$15" }
    ]
  },
  {
    number: 7,
    name: "Full Arm",
    price: "$40.00",
    description: "From wrist to shoulder.",
    isActive: true,
    sortGroup: "fullbody"
  },
  {
    number: 8,
    name: "Half Leg",
    price: "$35.00",
    description: "Lower leg (knee down) or upper leg (knee up).",
    isActive: true,
    sortGroup: "fullbody",
    addons: [
      { name: "Add Knees", price: "+$5" }
    ]
  },
  {
    number: 9,
    name: "Full Leg",
    price: "$60.00",
    description: "Full leg from ankle to upper thigh.",
    isActive: true,
    sortGroup: "fullbody"
  },
  {
    number: 10,
    name: "Bikini",
    price: "$35.00",
    description: "Clean-up outside the bikini line.",
    isActive: true,
    sortGroup: "fullbody",
    addons: [
      { name: "Deep Bikini", price: "+$10" }
    ]
  },
  {
    number: 11,
    name: "Brazilian",
    price: "$55.00",
    description: "Front to back. First-time or 4+ weeks growth may vary.",
    isActive: true,
    sortGroup: "fullbody",
    addons: [
      { name: "Strip Style / Custom Shape", price: "+$10" }
    ]
  }
];
