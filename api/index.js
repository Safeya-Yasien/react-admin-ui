import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let users = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/26052213/pexels-photo-26052213.jpeg",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "423 45 729",
    createdAt: "05.07.2024",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "523 89 651",
    createdAt: "06.07.2024",
    verified: false,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    phone: "621 45 878",
    createdAt: "07.07.2024",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    phone: "778 45 623",
    createdAt: "08.07.2024",
    verified: false,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    firstName: "Christopher",
    lastName: "Wilson",
    email: "christopher.wilson@example.com",
    phone: "885 12 984",
    createdAt: "09.07.2024",
    verified: true,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    phone: "324 87 456",
    createdAt: "10.07.2024",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1550334/pexels-photo-1550334.jpeg",
    firstName: "Daniel",
    lastName: "Moore",
    email: "daniel.moore@example.com",
    phone: "412 77 394",
    createdAt: "11.07.2024",
    verified: false,
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    firstName: "Olivia",
    lastName: "Taylor",
    email: "olivia.taylor@example.com",
    phone: "900 88 756",
    createdAt: "12.07.2024",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    firstName: "David",
    lastName: "Anderson",
    email: "david.anderson@example.com",
    phone: "546 78 214",
    createdAt: "13.07.2024",
    verified: false,
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    firstName: "Sophia",
    lastName: "Harris",
    email: "sophia.harris@example.com",
    phone: "738 56 324",
    createdAt: "14.07.2024",
    verified: true,
  },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  res.json(user);
});

app.post("/api/users", (req, res) => {
  users.unshift(req.body);
  res.json(users);
});

app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.json("User deleted!");
});

const PORT = 8800;
app.listen(8800, () => {
  console.log(`Connected to server on port ${PORT}.`);
});
