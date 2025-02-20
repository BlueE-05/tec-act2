'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
//import { useUser } from '@/context/UserContext';

export default function SignUpPage() {
    const router = useRouter();
    //const { setUser } = useUser();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Formulario enviado!");
        // Aquí puedes agregar la lógica para enviar los datos al backend
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-stone-900 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4 text-yellow-500">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-4">
                        <label className="block text-yellow-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 bg-stone-900 border border-yellow rounded-xl mt-1 text-white"
                            placeholder="Enter Name and Last name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-yellow-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 bg-stone-900 border border-yellow rounded-xl mt-1 text-white"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-yellow-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 bg-stone-900 border border-yellow rounded-xl mt-1 text-white"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit" className="w-full bg-yellow-500 text-white p-2 rounded-xl hover:bg-orange-600">Sign Up</button>
                
                </form>
            </div>
        </main>
    );
}