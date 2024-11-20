import React, { useEffect, useState } from 'react';
import { Brain, UserCircle2, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface User {
  name: string;
  email: string;
  age: string;
  phone: string;
}

interface Admin {
  name: string;
  email: string;
  role: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [admin, setAdmin] = useState<Admin | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const admins = JSON.parse(localStorage.getItem('admins') || '[]');
    
    if (userData) {
      setUser(JSON.parse(userData));
    } else if (admins.length > 0) {
      setAdmin(admins[admins.length - 1]);
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!user && !admin) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Brain className="w-16 h-16 text-orange-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white">
          Welcome, {user?.name || admin?.name}!
        </h1>
        <p className="text-gray-400 mt-2">
          {user ? 'Your personal food decision assistant' : 'Admin Dashboard'}
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-8">
          <div className="flex items-center mb-4">
            <UserCircle2 className="w-6 h-6 text-orange-500 mr-2" />
            <h2 className="text-xl font-semibold text-white">Profile Information</h2>
          </div>
          <div className="space-y-3">
            <p className="text-gray-400">
              <span className="font-medium text-gray-300">Name:</span>{' '}
              {user?.name || admin?.name}
            </p>
            <p className="text-gray-400">
              <span className="font-medium text-gray-300">Email:</span>{' '}
              {user?.email || admin?.email}
            </p>
            {user && (
              <>
                <p className="text-gray-400">
                  <span className="font-medium text-gray-300">Age:</span> {user.age}
                </p>
                <p className="text-gray-400">
                  <span className="font-medium text-gray-300">Phone:</span> {user.phone}
                </p>
              </>
            )}
            {admin && (
              <p className="text-gray-400">
                <span className="font-medium text-gray-300">Role:</span>{' '}
                {admin.role === 'super_admin' ? 'Super Admin' : 'Support Staff'}
              </p>
            )}
          </div>
        </div>

        <div className="card p-8">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-orange-500 mr-2" />
            <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => {
                localStorage.clear();
                navigate('/');
              }}
              className="w-full btn-primary"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;