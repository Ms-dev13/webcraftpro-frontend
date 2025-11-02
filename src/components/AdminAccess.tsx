import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Shield, ArrowRight } from 'lucide-react';

const AdminAccess: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link to="/admin">
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
          <Shield className="w-4 h-4 mr-2" />
          Admin Panel
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
};

export default AdminAccess;
