const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.859853132137!2d73.83002817496327!3d18.535234282561177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd482ea9d5f%3A0xdfc37e409f045867!2sNeelesh%20Apartments!5e0!3m2!1sen!2sin!4v1757767494473!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
            </div>
        </>
    );
};

export default ContactMap;
