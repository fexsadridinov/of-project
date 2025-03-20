import React from "react";

const Footer: React.FC = () => {
    return (
        <section className="c-space mt-10 pt-7 pb-3 border-t border-red-800 flex justify-between items-center flex-wrap gap-5">
            <div className="text-red-800 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="text-red-800 flex gap-3">
                <p>© 2025 Muse. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Footer;