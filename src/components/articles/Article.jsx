import React from "react";
import CrossIcon from "../icons/CrossIcon";

const Article = () => {
    return (
        <article className="flex gap-4 border-b-[1px] border-b-gray-400 py-4">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="flex-grow text-gray-600">
                Complete online Javascript curse in bluuweb
            </p>
            <button className="flex-none">
                <CrossIcon />
            </button>
        </article>
    );
};

export default Article;
