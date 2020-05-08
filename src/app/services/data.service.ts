import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Dhruvit Makadia',
      subject: 'Current Situation',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Amit Chauhan',
      subject: 'Work From Home',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Tony Stark',
      subject: 'Love You 3000',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Thanos',
      subject: 'I Am Inevitable',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Groot',
      subject: 'I Am Groot',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Doctor Strange',
      subject: 'Dormammu, I’ve come to bargain',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Thor',
      subject: 'The god of thunder',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Captain America',
      subject: 'The First Avenger',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
