import { useState } from "react";


const ContactForm = props => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [showModalMessage, setShowModalMessage] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    let modalMessage = <><p>Your message was successfully sent. 😄</p><p class="mt-10">Thank you!</p></>;
    const submitHandler = e => {

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ "form-name": "contact", "contactName": contactName, "contactEmail": contactEmail, "contactMessage": contactMessage })
        }).then(() => {
            setContactName('');
            setContactEmail('');
            setContactMessage('');
        }).catch(error => {
            modalMessage = <><p>Error on sending message!</p><p class="mt-10">{error}</p></>;
        });

        setShowModalMessage(true);
        e.preventDefault();
    };

    const closeModalHandler = e => {
        e.stopPropagation();
        if (e.target.className === 'modal' || e.target.className === 'btn') {
            setShowModalMessage(false);
        };
    };

    const handleChangeName = e => {
        setContactName(e.target.value);
    };
    const handleChangeEmail = e => {
        setContactEmail(e.target.value);
    };
    const handleChangeMessage = e => {
        setContactMessage(e.target.value);
    };

    // console.log(showModalMessage);

    return (
        <>
            <label for="my-modal"></label>
            {showModalMessage ? <input type="checkbox" id="my-modal" class="modal-toggle" checked readOnly /> : <input type="checkbox" id="my-modal" class="modal-toggle" readOnly />}
            <div class="modal" onClick={closeModalHandler}>
                <div class="modal-box mx-16" onClick={closeModalHandler}>
                    {modalMessage}
                    <div class="modal-action">
                        <button class="btn" onClick={closeModalHandler}>Close</button>
                    </div>
                </div>
            </div>
            <form name="contact" method="POST" data-netlify="true" onSubmit={submitHandler}>

                <input type="hidden" name="form-name" value="contact" />

                <div class="p-10 card bg-base-200">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your name</span>
                        </label>
                        <input type="text" name="contactName" value={contactName || ''} onChange={handleChangeName} placeholder="Luke Skywalker" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your e-mail address</span>
                        </label>
                        <input type="email" name="contactEmail" value={contactEmail || ''} onChange={handleChangeEmail} placeholder="luke@tatooine.com" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your message</span>
                        </label>
                        <textarea name="contactMessage" value={contactMessage || ''} onChange={handleChangeMessage} class="textarea h-24 textarea-bordered" placeholder="I'm thinking about giving you my lightsaber..." required></textarea>
                    </div>
                    <input type="submit" value="Send message" class="btn w-max mt-10 mx-auto" />
                </div>
            </form>
        </>
    );
};

export default ContactForm;;