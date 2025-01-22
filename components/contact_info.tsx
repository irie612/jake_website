import type { FC } from 'react';

const ContactInfo: FC = () => {
    return (
        <div className="text-center">
            <br />
            <p>Frith Street Tattoo</p>
            <p>Soho, London</p>
            <br />
            <p>
                Tel:{" "}
                <a href="tel:+442077348180" className="contact-text">
                    02077 348180
                </a>
            </p>
            <p>
                Email:{" "}
                <a
                    href="mailto:jcordal@icloud.com"
                    className="contact-text"
                >
                    jcordal@icloud.com
                </a>
            </p>
            <p>
                Instagram:{" "}
                <a
                    href="https://instagram.com/jakecordal"
                    target="_blank"
                    className="contact-text"
                >
                    @jakecordal
                </a>
            </p>
            <br />
        </div>

    );
};

export default ContactInfo;