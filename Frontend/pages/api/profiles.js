import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { type, id } = req.query;
  const filePath = path.join(process.cwd(), 'profiles.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading profiles.json' });
    }

    const profiles = JSON.parse(data);

    // Handle different types of data requests for user profiles
    switch (type) {
      case 'allProfiles':
        res.status(200).json(profiles);
        break;
      case 'profile':
        if (id) {
          const profile = profiles.find((p) => p.id === parseInt(id));
          if (profile) {
            res.status(200).json(profile);
          } else {
            res.status(404).json({ error: 'Profile not found' });
          }
        } else {
          res.status(400).json({ error: 'ID is required for profile lookup' });
        }
        break;
      case 'conditions':
        const conditions = profiles.flatMap((profile) => profile.conditions);
        res.status(200).json(conditions);
        break;
      case 'notes':
        const notes = profiles.flatMap((profile) => profile.notes);
        res.status(200).json(notes);
        break;
      case 'tasks':
        const tasks = profiles.flatMap((profile) => profile.tasks);
        res.status(200).json(tasks);
        break;
      default:
        // Return all profiles if 'type' is not specified or invalid
        res.status(200).json(profiles);
    }
  });
}