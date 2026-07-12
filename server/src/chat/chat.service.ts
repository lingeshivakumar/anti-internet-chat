import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class ChatService {

  createMessage(data: SendMessageDto) {
    return {
      sender: data.sender,
      message: data.message,
      timestamp: Date.now(),
    };
  }

}