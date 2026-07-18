import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { SendMessageDto } from './dto/send-message.dto';
import { ChatMessage } from './chat.types';
import { ConnectedUser } from './interfaces/connected-user.interface';

@Injectable()
export class ChatService {
  private readonly users: ConnectedUser[] = [];

  createMessage(data: SendMessageDto): ChatMessage {
    return {
      id: randomUUID(),
      roomId: data.roomId,
      senderId: data.senderId,
      senderName: data.senderName,
      content: data.content,
      timestamp: Date.now(),
    };
  }

  addUser(socketId: string, username: string): ConnectedUser {
    const existingUser = this.users.find(
      (user) => user.socketId === socketId,
    );

    if (existingUser) {
      return existingUser;
    }

    const user: ConnectedUser = {
      socketId,
      username,
    };

    this.users.push(user);

    return user;
  }

  removeUser(socketId: string): void {
    const index = this.users.findIndex(
      (user) => user.socketId === socketId,
    );

    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  getUsers(): ConnectedUser[] {
    return [...this.users];
  }
}