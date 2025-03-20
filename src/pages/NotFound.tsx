import React from "react";
const NotFound: React.FC = () => {
    return (
        <section className="min-h-screen w-full flex flex-col realtive">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <h1>
                    404 - Page Not Found
                </h1>
                <p>
                    The page you are looking for does not exist!
                </p>
            </div>
        </section>
    );
};

export default NotFound;