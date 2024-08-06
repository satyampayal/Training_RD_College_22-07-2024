let transition = [
  {
    id: 1,
    name: "punit",
    amount: 200,
    date: "2024-04-01",
  },
  {
    id: 2,
    name: "Depanshu",
    amount: 200,
    date: "2024-04-01",
  },
  {
    id: 3,
    name: "shaurya",
    amount: 200,
    date: "2024-04-01",
  },
  {
    id: 4,
    name: "Tushar",
    amount: 200,
    date: "2024-04-01",
  },
  {
    id: 5,
    name: "satyam",
    amount: 200,
    date: "2024-04-01",
  },
];

const transArray = transition.map((t) => {
  return { id: t.id, name: t.name, amount: t.amount };
});

console.log(transArray);
