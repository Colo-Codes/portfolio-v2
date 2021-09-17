const ContactForm = props => {
    return (
        <form netlify>
            <div class="p-10 card bg-base-200">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your name</span>
                    </label>
                    <input type="text" placeholder="Luke Skywalker" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your e-mail address</span>
                    </label>
                    <input type="email" placeholder="luke@tatooine.com" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your message</span>
                    </label>
                    <textarea class="textarea h-24 textarea-bordered" placeholder="I'm thinking about giving you my lightsaber..." required></textarea>
                </div>
                <input type="submit" value="Send message" class="btn w-max mt-10 mx-auto" />
            </div>
        </form>
    );
};

export default ContactForm;