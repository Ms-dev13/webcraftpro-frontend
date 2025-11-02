import React, { useState, useEffect } from 'react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  submitted_at: string;
}

const AdminPanel: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://webcraftpro-backend.onrender.com/api/contacts');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server.');
        }
        const data: ContactMessage[] = await response.json();
        setMessages(data);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <section id="admin" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Admin Panel: Contact Messages</h2>

        {loading && <p className="text-center">Loading messages...</p>}
        {error && <p className="text-center text-destructive">{error}</p>}

        {!loading && !error && (
          <div className="bg-background rounded-lg shadow-lg overflow-hidden border">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {messages.length > 0 ? (
                    messages.map((msg) => (
                      <tr key={msg.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(msg.submitted_at).toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{msg.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">{msg.email}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground"><p className="max-w-md truncate">{msg.message}</p></td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-muted-foreground">No messages found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminPanel;
