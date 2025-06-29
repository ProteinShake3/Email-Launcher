function sendEmail() {
    const recipients = [
      "romum.cbfc@nic.in",
  "ceo.cbfc@nic.in",
  "sraomum.cbfc@nic.in",
  "jsfilms.inb@nic.in",
  "minister.inb@gov.in",
  "secy.inb@nic.in",
  "toieditorial@timesgroup.com",
  "feedback@hindustantimes.com",
  "grievanceofficer@aajtak.com",
  "editor@intoday.com"
    ];

    const subject = "Objection to Potentially Offensive Dialogue in Upcoming Film Udaipur Files";

    const body = `Dear Sir/Madam,

I hope this message finds you well.

I am writing to raise a serious concern regarding the upcoming film titled Udaipur Files, scheduled to release on 11 July 2025. According to circulating clips and early reports, the film includes a line spoken by a female character that references the age of Ummul Mu’mineen Aisha (may Allah be pleased with her) at the time of her marriage to Prophet Muhammad (peace and blessings be upon him):

“"Rasulullah(Sallallaho alaihi wasallam) ki jb shadi hui thi to unki wife Sayyeda Aayesha ki age kya thi”

This statement—especially in a cinematic setting—is highly sensitive and, depending on tone and intent, may be perceived by many as blasphemous (gustakhi) toward sacred Islamic personalities.

As concerned citizens and members of a diverse and respectful society, we request that this matter be looked into with urgency. If the scene exists and is found to be offensive, we respectfully urge:

Immediate review of the scene by the appropriate authorities.

Removal or alteration of the dialogue if it is found to be disrespectful or inflammatory.

Issuance of clarification or disclaimer by the filmmakers regarding the intent of such content.

Religious harmony in our country depends on mutual respect, especially in public media. We trust that responsible authorities will address this matter fairly and swiftly to prevent hurt and unrest.

Thank you for your time and attention.`.trim();

    const to = recipients.join(",");
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
