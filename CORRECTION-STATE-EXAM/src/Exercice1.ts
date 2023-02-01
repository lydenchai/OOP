class Mailbox {
  private mails: Mail[] = [];
}

class Mail {
  constructor(protected title: string, protected body: string) {}
}

class ReceivedMail extends Mail {
  private fromUser: User;

  constructor(title: string, body: string, private receivedDate: string) {
    super(title, body);
  }
}

class SentMail extends Mail {
  private toUser: User;

  constructor(title: string, body: string, private sentDate: string) {
    super(title, body);
  }
}

class User {
  constructor(protected firstName: string, protected lastName: string) {}
}

// MAIN ----------------
