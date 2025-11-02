import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { 
  Users, 
  Mail, 
  Calendar, 
  LogOut, 
  RefreshCw, 
  AlertTriangle,
  CheckCircle,
  Clock,
  MessageSquare
} from 'lucide-react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  submitted_at: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMessages = async () => {
    setRefreshing(true);
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:3001/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('adminToken');
          onLogout();
          return;
        }
        throw new Error('Failed to fetch messages');
      }

      const data: ContactMessage[] = await response.json();
      setMessages(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching messages.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    onLogout();
  };

  const handleRefresh = () => {
    fetchMessages();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const messageDate = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - messageDate.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-white/70">Manage contact form submissions</p>
              </div>
            </motion.div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={handleRefresh}
                disabled={refreshing}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="bg-red-500/20 border-red-500/30 text-red-300 hover:bg-red-500/30"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm">Total Messages</p>
                  <p className="text-3xl font-bold text-white">{messages.length}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm">Today's Messages</p>
                  <p className="text-3xl font-bold text-white">
                    {messages.filter(msg => {
                      const today = new Date();
                      const messageDate = new Date(msg.submitted_at);
                      return messageDate.toDateString() === today.toDateString();
                    }).length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm">This Week</p>
                  <p className="text-3xl font-bold text-white">
                    {messages.filter(msg => {
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return new Date(msg.submitted_at) >= weekAgo;
                    }).length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Messages Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact Messages
              </CardTitle>
              <CardDescription className="text-white/70">
                All contact form submissions from your portfolio website
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                  <p className="text-white/70 mt-2">Loading messages...</p>
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <p className="text-red-400">{error}</p>
                  <Button onClick={handleRefresh} className="mt-4">
                    Try Again
                  </Button>
                </div>
              ) : messages.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="w-12 h-12 text-white/30 mx-auto mb-4" />
                  <p className="text-white/70">No messages found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/70 font-medium">Name</th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium">Email</th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium">Message</th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium">Date</th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium">Time Ago</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((message, index) => (
                        <motion.tr
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-b border-white/10 hover:bg-white/5"
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-sm font-semibold">
                                  {message.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <span className="text-white font-medium">{message.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-white/80">{message.email}</span>
                          </td>
                          <td className="py-4 px-4">
                            <p className="text-white/80 max-w-xs truncate" title={message.message}>
                              {message.message}
                            </p>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-white/70 text-sm">{formatDate(message.submitted_at)}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-white/60 text-sm">{getTimeAgo(message.submitted_at)}</span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
