import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEADS_FILE = path.resolve(__dirname, "db", "leads.json");

async function startServer() {
  const app = express();
  app.use(express.json()); // Enable JSON body parsing

  const server = createServer(app);

  // API Endpoint to save leads
  app.post("/api/leads", async (req, res) => {
    try {
      const { name, email, company, phone, message } = req.body;

      if (!name || !email || !company) {
        return res.status(400).json({ error: "Campos obrigatórios ausentes" });
      }

      const newLead = {
        id: Date.now(),
        name,
        email,
        company,
        phone,
        message,
        createdAt: new Date().toISOString(),
      };

      let leads = [];
      try {
        const data = await fs.readFile(LEADS_FILE, "utf-8");
        leads = JSON.parse(data || "[]");
      } catch (e) {
        // File might not exist or be empty
      }

      leads.push(newLead);
      await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

      console.log("Novo lead salvo:", newLead);
      res.status(201).json({ success: true, message: "Lead salvo com sucesso" });
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      res.status(500).json({ error: "Erro interno ao salvar os dados" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
