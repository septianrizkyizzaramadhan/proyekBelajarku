import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware untuk membaca format JSON
app.use(express.json());

// 1. Endpoint Health Check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server Backend running smoothly!',
    timestamp: new Date().toISOString(),
  });
});

// 2. Endpoint Data Crypto Dummy (Latihan Anda)
app.get('/api/crypto', (req: Request, res: Response) => {
  const cryptoList = [
    { id: 1, symbol: 'BTC', name: 'Bitcoin', priceUsd: 65000 },
    { id: 2, symbol: 'ETH', name: 'Ethereum', priceUsd: 35000 },
    { id: 3, symbol: 'SOL', name: 'Solana', priceUsd: 140 },
  ];

  res.status(200).json({
    success: true,
    data: cryptoList,
  });
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`🚀 Server aktif di http://localhost:${PORT}`);
});