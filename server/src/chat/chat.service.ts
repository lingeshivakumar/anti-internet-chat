import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { SendMessageDto } from './dto/send-message.dto';
import { ChatMessage } from './chat.types';

@Injectable()
export class ChatService {
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
}