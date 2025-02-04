export default async function handler(req, res) {
    if (req.method === 'POST') {
      res.status(200).json({ url: 'https://via.placeholder.com/300' });
    } else {
      res.status(405).json({ message: 'Méthode non autorisée' });
    }
  }
  