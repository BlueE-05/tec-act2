'use client'
import {useState} from 'react';

export default function ContadorPage() {
    const [counter, setCounter] = useState(0)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        setCounter(counter + 1)
    };

    return(
        <main className="min-h-screen justify-center items-center flex flex-cols">
            <div className="text-center">
                <h1 className="font-bold text-8xl">{counter}</h1>

                <form onSubmit={handleSubmit}>
                    <button className="bg-yellow-500 hover:bg-orange-500 rounded-xl text-white font-bold w-40 p-4 mt-4">+1</button>
                </form>

            </div>
        </main>
    );
}