import cors from "cors";
import express from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

const contactMessages = [];

app.use(
  cors({
    origin: true,
  }),
);
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    message: "Backend is running",
    checkedAt: new Date().toISOString(),
  });
});

app.get("/api/contact", (_request, response) => {
  response.json({
    total: contactMessages.length,
    items: contactMessages,
  });
});

app.post("/api/contact", (request, response) => {
  const { company = "", email = "", message = "", name = "" } = request.body ?? {};

  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    typeof email !== "string" ||
    !email.includes("@") ||
    typeof message !== "string" ||
    message.trim().length < 10
  ) {
    response.status(400).json({
      message: "Please provide valid name, email, and message values.",
    });
    return;
  }

  const payload = {
    id: contactMessages.length + 1,
    name: name.trim(),
    email: email.trim(),
    company: typeof company === "string" ? company.trim() : "",
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  contactMessages.unshift(payload);

  response.status(201).json({
    message: "Inquiry received successfully.",
    submission: payload,
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
