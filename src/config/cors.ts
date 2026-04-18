// import type { CorsOptions } from "cors";

// export const corsOption: CorsOptions = {
//   origin: ["http://localhost:3000", "http://localhost:5173"],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
//   credentials: true,
//   exposedHeaders: ["Set-Cookie"],
//   optionsSuccessStatus: 200,
// };

import type { CorsOptions } from "cors";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  process.env.CLIENT_URL || "",
];

export const corsOption: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
