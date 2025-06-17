function sendEmail() {
    const recipients = [
        "library@iiti.ac.in",
        "registrar@iiti.ac.in",
        "director@iiti.ac.in",
        "dean.academics@iiti.ac.in"
    ];

    const subject = "Remove The Satanic Verses Immediately – Blasphemy Has No Place in IIT Indore";

    const body = `
To the IIT Indore Library Team and Administration:

I write with deep disgust to demand the immediate removal of Salman Rushdie’s The Satanic Verses from your shelves. This book is a hateful provocation — a vile, blasphemous assault on Islam that insulted millions, sparked global outrage, violent riots, and remains deeply disrespectful to the Prophet and our faith traditions.

Despite recent media noise claiming the ban was “untraceable” and thus court‑voided on November 5, 2024, it's reckless and unacceptable to stock this garbage in a learning environment. Allowing such inflammatory content under the banner of “academic freedom” is a slap in the face to the religious sentiments of Muslim students and staff. 
Let me be absolutely clear: this book was banned nationally for its blasphemy, and reintroducing it to your collection supplies raw fuel for division, hurt, and anger. No highbrow intellectual justification can hide the fact that it's deeply offensive and socially harmful — and it has no place in an Indian academic institution.

I expect swift action:

- Remove The Satanic Verses from library catalogues and physical location.
- Publicly confirm via email that you’ve taken it off the shelves.
- Commit to reviewing any future titles that could offend religious sensibilities before acquisition.

If this is not done immediately, I will escalate the matter to the Ministry of Education, concerned religious organizations, and both national and local media — and I will seek legal remedies under Section 295A of the Indian Penal Code for deliberate insensitivity toward religious beliefs.

Do the right thing.

Awaiting a prompt confirmation.

Furious Regards,
`.trim();

    const to = recipients.join(",");
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
