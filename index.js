dotenv.config();
const express = require("express");
const pandascoreRoutes = require("./routes/pandascore.routes");

const allowedOrigins = ["http://localhost:3000", "http://localhost:8000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", pandascoreRoutes);

app.use((err, req, res, next) => {
  console.error("stack error:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.get("/", (req, res) =>
  res.status(200).json({ message: `Server is running in  mode` })
);

app.listen(8000, () =>
  console.log(`Server is running on port http://0.0.0.0:${"8000"}`)
);
