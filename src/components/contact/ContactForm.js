import { useState } from "react";


const ContactForm = props => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');


    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const submitHandler = e => {

        // const formData = new FormData();

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // body: new URLSearchParams(formData).toString()
            body: encode({ "form-name": "contact", "contactName": contactName, "contactEmail": contactEmail, "contactMessage": contactMessage })
        }).then(() => {
            // const myName = document.getElementById('name');
            // const myEmail = document.getElementById('email');
            // const myMessage = document.getElementById('message');
            // const hidden = successMessage.classList.contains('hidden');

            setContactName('');
            setContactEmail('');
            setContactMessage('');


            // if (hidden) {
            //     successMessage.classList.remove('hidden');
            //     setTimeout(() => {
            //         successMessage.classList.add('hidden');
            //     }, 3000);
            // } else {
            //     successMessage.classList.add('hidden');
            // }
        }).catch((error) =>
            console.error(error));

        e.preventDefault();

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

    return (
        <>
            <form name="contact" method="POST" data-netlify="true" onSubmit={submitHandler}>

                <a href="/components/modal#my-modal" class="btn btn-primary">open modal</a>

                <div id="my-modal" class="modal">
                    <div class="modal-box">
                        <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
                        <div class="modal-action">
                            <a href="/components/modal#" class="btn btn-primary">Accept</a>
                            <a href="/components/modal#" class="btn">Close</a>
                        </div>
                    </div>
                </div>


                <div class="p-10 card bg-base-200">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your name</span>
                        </label>
                        <input type="text" name="contactName" value={contactName} onChange={handleChangeName} placeholder="Luke Skywalker" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your e-mail address</span>
                        </label>
                        <input type="email" name="contactEmail" value={contactEmail} onChange={handleChangeEmail} placeholder="luke@tatooine.com" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your message</span>
                        </label>
                        <textarea name="contactMessage" value={contactMessage} onChange={handleChangeMessage} class="textarea h-24 textarea-bordered" placeholder="I'm thinking about giving you my lightsaber..." required></textarea>
                    </div>
                    <input type="submit" value="Send message" class="btn w-max mt-10 mx-auto" />
                </div>
            </form>
        </>
    );
};

export default ContactForm;