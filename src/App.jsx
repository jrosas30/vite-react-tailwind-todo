import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CrossIcon from "./components/icons/CrossIcon";
import Article from "./components/articles/Article";
import Moon from "./components/icons/Moon";

const App = () => {
    return (
        <div className="min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                        Todo
                    </h1>
                    <button><Moon fill="#000" /></button>
                </div>
                <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        name=""
                        id=""
                        placeholder="Create a new todo"
                    />
                </form>
            </header>
            <main className="container mx-auto py-4">
                <div className="rounded-md bg-white text-left [&>Article]:px-4">
                    <Article />
                    <Article />
                    <Article />
                    <Article />

                    {/* <article className="flex gap-4 border-b-[1px] border-b-gray-400 px-4 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="flex-grow text-gray-600">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article><article className="flex gap-4 border-b-[1px] border-b-gray-400 px-4 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="flex-grow text-gray-600">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article><article className="flex gap-4 border-b-[1px] border-b-gray-400 px-4 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="flex-grow text-gray-600">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article> */}

                    <section className="flex gap-4 rounded-md px-4 py-4">
                        <span className=" flex-grow text-gray-400">
                            5 item left
                        </span>
                        <button className=" flex-none text-gray-400">
                            Clear Complete
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-8">
                <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                    <button className="hover:text-blue-600">All</button>
                    <button>Active</button>
                    <button>Complete</button>
                </div>
            </section>
            <section>Drag and drop to reorder list</section>
        </div>
    );
};

export default App;
