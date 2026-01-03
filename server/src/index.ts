import { app } from "./app";
import { AppDataSource } from "./dataBase/data-source";

const PORT = 3000;

async function bootstrap() {
  try {
    await AppDataSource.initialize();
    console.log("DB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

bootstrap();
